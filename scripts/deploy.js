const hre = require("hardhat");

async function main() {
  const uniswapRouterAddress = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4";
  const usdcTokenAddress = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4";

  const Swap = await hre.ethers.getContractFactory("Swap");
  const swap = await Swap.deploy(uniswapRouterAddress, usdcTokenAddress);

  await swap.deployed();

  console.log("Swap Contract deployed to:", swap.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
