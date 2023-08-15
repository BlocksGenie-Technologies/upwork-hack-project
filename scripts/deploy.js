const hre = require("hardhat");

async function main() {
  const uniswapRouterAddress = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
  const usdcTokenAddress = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";

  const Swap = await hre.ethers.getContractFactory("Swap");
  const swap = await Swap.deploy(uniswapRouterAddress, usdcTokenAddress);

  await swap.deployed();

  console.log("Swap Contract deployed to:", swap.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
