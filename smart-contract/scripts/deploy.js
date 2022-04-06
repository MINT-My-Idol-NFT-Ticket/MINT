const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const MintTicket = await ethers.getContractFactory("MintTicket");
  const mintTicket = await MintTicket.deploy();

  //saveFrontendFiles(mintTicket, "MintTicket");
}

function saveFrontendFiles(token, name) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../../frontend/src/contracts";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + `/${name}-address.json`,
    JSON.stringify({ address: token.address }, undefined, 2)
  );
  const TokenArtifact = artifacts.readArtifactSync(name);

  fs.writeFileSync(
    contractsDir + `/${name}.json`,
    JSON.stringify(TokenArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
