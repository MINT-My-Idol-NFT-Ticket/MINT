import { web3 } from "./ssafyConfig.js";
import fs from "fs";

const { abi: mintTicketAbi } = JSON.parse(
  fs.readFileSync("./artifacts/contracts/MintTicket.sol/MintTicket.json")
);
const { bytecode: mintTicketBytecode } = JSON.parse(
  fs.readFileSync("./artifacts/contracts/MintTicket.sol/MintTicket.json")
);

const { abi: saleTicketAbi } = JSON.parse(
  fs.readFileSync("./artifacts/contracts/SaleTicket.sol/SaleTicket.json")
);
const { bytecode: saleTicketBytecode } = JSON.parse(
  fs.readFileSync("./artifacts/contracts/SaleTicket.sol/SaleTicket.json")
);

// 관리자용 - 채은 지갑
const myWalletAddress = "0x2177a0dC22B2072e8ffFA2269a67E907784ef63b";
const myPrivateKey =
  "0x93bd1191b6feaea6755c4e3cc3eba0823ce51486b3a848d5f0ffa2a8ce52f00d";
const myWalletAccount = web3.eth.accounts.privateKeyToAccount(myPrivateKey);

// 테스트용 - 정빈 지갑
const jbWalletAddress = "0x162560909C304f3de8F71B425C80B8a16251cf51";
const jbPrivateKey =
  "0x0aa0ac9c31365d81fa78a65063ce913568e65d9a4d43318b15c305bef81ab616";

const jbWalletAccount = web3.eth.accounts.privateKeyToAccount(jbPrivateKey);

// 테스트용 - 창현 지갑
const chWalletAddress = "0xb2FF8d3Cb3759CD4F3841816Fc0e646C5A9AC40b";
const chPrivateKey =
  "0x2268d80094b1dcbfcb3785c0940d06ed14d941efe4a80145aced37037833cb7a";

const chWalletAccount = web3.eth.accounts.privateKeyToAccount(chPrivateKey);

const { abi: ssafyTokenAbi } = JSON.parse(
  fs.readFileSync("./artifacts/contracts/SsafyToken.sol/SsafyToken.json")
);
const ssafyTokenAddr = "0x6C927304104cdaa5a8b3691E0ADE8a3ded41a333";
export const ssafyTokenContract = new web3.eth.Contract(
  ssafyTokenAbi,
  ssafyTokenAddr
);

export async function mintDeploy(price) {
  const mintContractInstance = new web3.eth.Contract(mintTicketAbi);
  const mintDeployedContract = mintContractInstance.deploy({
    data: mintTicketBytecode,
    arguments: [price, ssafyTokenAddr],
  });
  const mintGasEstimate = await mintDeployedContract.estimateGas({
    from: myWalletAddress,
  });
  const mintResultEncode = mintDeployedContract.encodeABI();
  var tx = {
    data: mintResultEncode,
    gas: mintGasEstimate,
  };

  const mintTest = await web3.eth.accounts.signTransaction(tx, myPrivateKey);

  return await web3.eth.sendSignedTransaction(mintTest.rawTransaction);
}

export async function saleDeploy(mintAddr) {
  const saleContractInstance = new web3.eth.Contract(saleTicketAbi, mintAddr);
  const saleDeployedContract = saleContractInstance.deploy({
    data: saleTicketBytecode,
    arguments: [mintAddr, ssafyTokenAddr],
  });
  const saleGasEstimate = await saleDeployedContract.estimateGas({
    from: myWalletAddress,
  });
  const saleResultEncode = saleDeployedContract.encodeABI();
  var tx = {
    data: saleResultEncode,
    gas: saleGasEstimate,
  };
  const saleTest = await web3.eth.accounts.signTransaction(tx, myPrivateKey);

  return await web3.eth.sendSignedTransaction(saleTest.rawTransaction);
}
/* ============= */
(async () => {
  const mintContract = await mintDeploy(20);
  const mintContractAddr = mintContract.contractAddress;
  console.log(mintContractAddr);
  const saleContract = await saleDeploy(mintContractAddr);
  const saleContractAddr = saleContract.contractAddress;
  console.log(saleContractAddr);

  const mintContractTest = new web3.eth.Contract(
    mintTicketAbi,
    mintContractAddr
  );
  const saleContractTest = new web3.eth.Contract(
    saleTicketAbi,
    saleContractAddr
  );

  const admin = await mintContractTest.methods.owner().call();
  console.log("관리자 주소: ", admin);

  /* mintTicket 컨트랙트에 saleTicket 컨트랙트 주소 등록 (approve 권한 위해) */
  let tx = {};
  tx.nonce = await web3.eth.getTransactionCount(myWalletAddress);
  tx.from = myWalletAddress;
  tx.to = mintContractAddr;
  tx.data = mintContractTest.methods
    .setSaleTicket(saleContractAddr)
    .encodeABI();
  // //tx.gas = await web3.eth.getGasPrice();
  tx.gas = 300000;

  let signedTx = await web3.eth.accounts.signTransaction(
    tx,
    myWalletAccount.privateKey
  );

  var receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  //console.log(receipt);

  /* 정빈 토큰 구매 - erc20 토큰 전송을 위한 approve */
  tx = {};
  tx.nonce = await web3.eth.getTransactionCount(jbWalletAddress);
  tx.from = jbWalletAddress;
  tx.to = ssafyTokenAddr;
  tx.data = ssafyTokenContract.methods
    .approve(mintContractAddr, 20)
    .encodeABI();
  // //tx.gas = await web3.eth.getGasPrice();
  tx.gas = 3000000;

  signedTx = await web3.eth.accounts.signTransaction(
    tx,
    jbWalletAccount.privateKey
  );

  var receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  //console.log(receipt);

  /* 정빈 - 구매 전 잔액 */
  const jbsenderBalance = await mintContractTest.methods
    .getCurrencyAmount()
    .call({ from: jbWalletAddress });
  console.log("before jb balance:", jbsenderBalance);

  /*  정빈 토큰 구매 - buyticket 함수 호출 */
  console.log("========buyticket============");
  tx = {};
  tx.nonce = await web3.eth.getTransactionCount(jbWalletAddress);
  tx.from = jbWalletAddress;
  tx.to = mintContractAddr;
  tx.data = mintContractTest.methods.buyTicket("gitticket").encodeABI();
  // //tx.gas = await web3.eth.getGasPrice();
  tx.gas = 300000;

  signedTx = await web3.eth.accounts.signTransaction(
    tx,
    jbWalletAccount.privateKey
  );

  var receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  // console.log(receipt);

  /* 정빈 - 보유 티켓 조회 */
  const jbgetTickets = await mintContractTest.methods
    .getTicketList(jbWalletAccount.address)
    .call();

  console.log("jb의 tokenId: ", jbgetTickets[0].tokenId);
  const jbgetURI = await mintContractTest.methods
    .tokenURI(jbgetTickets[0].tokenId)
    .call();
  console.log("jb의 tokenURI: ", jbgetURI);

  const jbafterSenderBalance = await mintContractTest.methods
    .getCurrencyAmount()
    .call({ from: jbWalletAddress });
  console.log("after purchase ticket, jb balance : ", jbafterSenderBalance);

  /* 창현 토큰 구매 - erc20 토큰 전송을 위한 approve */
  tx = {};
  tx.nonce = await web3.eth.getTransactionCount(chWalletAddress);
  tx.from = chWalletAddress;
  tx.to = ssafyTokenAddr;
  tx.data = ssafyTokenContract.methods
    .approve(mintContractAddr, 20)
    .encodeABI();
  // //tx.gas = await web3.eth.getGasPrice();
  tx.gas = 3000000;

  signedTx = await web3.eth.accounts.signTransaction(
    tx,
    chWalletAccount.privateKey
  );

  var receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  //console.log(receipt);

  /* 창현 - 구매 전 잔액 */
  const chsenderBalance = await mintContractTest.methods
    .getCurrencyAmount()
    .call({ from: chWalletAddress });
  console.log("before ch balance:", chsenderBalance);

  /*  창현 토큰 구매 - buyticket 함수 호출 */
  console.log("========buyticket============");
  tx = {};
  tx.nonce = await web3.eth.getTransactionCount(chWalletAddress);
  tx.from = chWalletAddress;
  tx.to = mintContractAddr;
  tx.data = mintContractTest.methods.buyTicket("gitticket").encodeABI();
  // //tx.gas = await web3.eth.getGasPrice();
  tx.gas = 300000;

  signedTx = await web3.eth.accounts.signTransaction(
    tx,
    chWalletAccount.privateKey
  );

  var receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  // console.log(receipt);

  /* 창현 - 보유 티켓 조회 */
  const chgetTickets = await mintContractTest.methods
    .getTicketList(chWalletAccount.address)
    .call();

  console.log("ch의 tokenId: ", chgetTickets[0].tokenId);
  const getURI = await mintContractTest.methods
    .tokenURI(chgetTickets[0].tokenId)
    .call();
  console.log("ch의 tokenURI: ", getURI);

  /* 창현 - 보유 잔액 조회 */
  const chafterSenderBalance = await mintContractTest.methods
    .getCurrencyAmount()
    .call({ from: chWalletAddress });
  console.log("after purchase ticket, ch balance : ", chafterSenderBalance);

  /* mint contract 보유 잔액 */
  const senderBalance = await mintContractTest.methods
    .getCurrencyAmount()
    .call({ from: mintContractAddr });
  console.log("contract balance : ", senderBalance);

  /* 창현 - 구매한 토큰 판매 등록 */
  tx = {};
  tx.nonce = await web3.eth.getTransactionCount(chWalletAddress);
  tx.from = chWalletAddress;
  tx.to = saleContractAddr;
  tx.data = saleContractTest.methods
    .setForSaleTicket(chgetTickets[0].tokenId, 21)
    .encodeABI();
  // //tx.gas = await web3.eth.getGasPrice();
  tx.gas = 300000;

  signedTx = await web3.eth.accounts.signTransaction(
    tx,
    chWalletAccount.privateKey
  );

  var receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  //console.log(receipt);

  /* 등록한 토큰의 가격 */
  const setTicketPrice = await saleContractTest.methods
    .getTicketPrice(chgetTickets[0].tokenId)
    .call();
  console.log("setting price: ", setTicketPrice);

  /* p2p erc20 토큰 전송을 위한 approve */
  tx = {};
  tx.nonce = await web3.eth.getTransactionCount(jbWalletAddress);
  tx.from = jbWalletAddress;
  tx.to = ssafyTokenAddr;
  tx.data = ssafyTokenContract.methods
    .approve(saleContractAddr, setTicketPrice)
    .encodeABI();
  // //tx.gas = await web3.eth.getGasPrice();
  tx.gas = 3000000;

  signedTx = await web3.eth.accounts.signTransaction(
    tx,
    jbWalletAccount.privateKey
  );

  var receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  // console.log(receipt);

  /* 정빈 계좌로 창현 토큰 구매 */
  tx = {};
  //tx.nonce = await web3.eth.getTransactionCount(chWalletAddress);
  tx.from = jbWalletAccount.address;
  tx.to = saleContractAddr;
  tx.data = saleContractTest.methods
    .purchaseTicket(chgetTickets[0].tokenId)
    .encodeABI();
  // //tx.gas = await web3.eth.getGasPrice();
  tx.gas = 300000;

  signedTx = await web3.eth.accounts.signTransaction(
    tx,
    jbWalletAccount.privateKey
  );

  var receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  // console.log(receipt);

  /* 정빈 - 구매한 티켓 조회 */
  const purchaseTicket = await mintContractTest.methods
    .getTicketList(jbWalletAccount.address)
    .call();

  console.log(purchaseTicket);

  /* 정빈 - 구매한 티켓 삭제 */
  tx = {};
  tx.nonce = await web3.eth.getTransactionCount(jbWalletAccount.address);
  tx.from = jbWalletAccount.address;
  tx.to = mintContractAddr;
  tx.data = mintContractTest.methods
    .cancelTicket(purchaseTicket[0].tokenId)
    .encodeABI();
  // //tx.gas = await web3.eth.getGasPrice();
  tx.gas = 300000;

  signedTx = await web3.eth.accounts.signTransaction(
    tx,
    jbWalletAccount.privateKey
  );

  var receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  // console.log(receipt);

  /* 정빈 - 삭제 후 티켓 조회 */
  const afterCancelTicket = await mintContractTest.methods
    .getTicketList(jbWalletAccount.address)
    .call();

  console.log(afterCancelTicket);

  /* 관리자 - 보유 잔액 조회 */
  const beforeWithdrawBalance = await mintContractTest.methods
    .getCurrencyAmount()
    .call({ from: myWalletAddress });
  console.log("before withdraw ssf, admin balance : ", beforeWithdrawBalance);

  /* 관리자 - mint contract 잔액 출금 */
  tx = {};
  tx.nonce = await web3.eth.getTransactionCount(myWalletAddress);
  tx.from = myWalletAddress;
  tx.to = mintContractAddr;
  tx.data = mintContractTest.methods.withdraw().encodeABI();
  // //tx.gas = await web3.eth.getGasPrice();
  tx.gas = 300000;

  signedTx = await web3.eth.accounts.signTransaction(
    tx,
    myWalletAccount.privateKey
  );

  var receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  // console.log(receipt);

  /* 관리자 - 보유 잔액 조회 */
  const afterWithdrawBalance = await mintContractTest.methods
    .getCurrencyAmount()
    .call({ from: myWalletAddress });
  console.log("after withdraw ssf, admin balance : ", afterWithdrawBalance);
})();
