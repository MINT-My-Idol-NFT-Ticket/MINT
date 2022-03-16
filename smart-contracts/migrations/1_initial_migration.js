const SsafyNFT = artifacts.require("SsafyNFT");

module.exports = function (deployer) {
  deployer.deploy(SsafyNFT, "SSAFY", "SSF");
};
