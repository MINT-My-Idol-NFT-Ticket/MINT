/**
 * PJT Ⅰ - 과제 3 테스트 코드 작성
 * @dev NFT mint, transfer, and compare URI
 */

const NftCreator = artifacts.require("SsafyNFT");

contract("NftCreator", (accounts) => {
  let SsafyNFT;
  let expectedOwner;

  before(async () => {
    SsafyNFT = await NftCreator.deployed();
    expectedOwner = accounts[0];
  });

  it("NFT mint, transfer, and compare URI", async () => {
    const tokenURI0 = "11111token uri test";
    const tokenURI = "token uri test";
    const createdTokenId = await SsafyNFT.create(expectedOwner, tokenURI0);
    const createdTokenId2 = await SsafyNFT.create(accounts[0], tokenURI);
    let owner = await SsafyNFT.ownerOf(1);
    assert.equal(expectedOwner, owner, "NFT Mint Failed");

    const receiver = accounts[1];
    await SsafyNFT.safeTransferFrom(owner, receiver, 1);
    owner = await SsafyNFT.ownerOf(1);
    assert.equal(receiver, owner, "NFT Transfer Failed.");

    const tokenURIFetched = await SsafyNFT.tokenURI(1);
    assert.equal(tokenURI, tokenURIFetched, "Wrong Token Id or URI.");
  });
});
