export default async function sendTransaction(web3, options, senderPK) {
  try {
    const signedTransaction = await web3.eth.accounts.signTransaction(options, senderPK) // 트랜잭션에 서명
    console.log(signedTransaction)
    const result = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction) // 서명된 트랜젝션 전송
    return result
  } catch (err) {
    console.log(err)
  }
}
