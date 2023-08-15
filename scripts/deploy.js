const hre = require("hardhat");

async function main() {
  const uniswapRouterAddress = "";
  const usdcTokenAddress = "";

  const Swap = await hre.ethers.getContractFactory("Swap");
  const swap = await Swap.deploy(uniswapRouterAddress, usdcTokenAddress);

  await swap.deployed();

  console.log("Swap deployed to:", swap.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
