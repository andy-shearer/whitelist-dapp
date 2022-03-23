const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const whitelistFactory = await hre.ethers.getContractFactory("Whitelist");
  const whitelistContract = await whitelistFactory.deploy(10);

  await whitelistContract.deployed();

  console.log("Whitelist deployed to:", whitelistContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
