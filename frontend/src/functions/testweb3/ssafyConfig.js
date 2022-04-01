import Web3 from "web3"; //const Web3 = require("web3");

// 네트워크 기본 설정
const ssafyProvider = new Web3.providers.HttpProvider(
  "http://20.196.209.2:8545"
);
// const localProvider = new Web3.providers.HttpProvider("http://localhost:7545");
export const web3 = new Web3(ssafyProvider);
