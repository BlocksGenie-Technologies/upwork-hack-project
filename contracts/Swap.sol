// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';

contract Swap {
    IUniswapV2Router02 public uniswapRouter;
    address public usdcToken;

    constructor(address _uniswapRouter, address _usdcToken) {
        uniswapRouter = IUniswapV2Router02(_uniswapRouter);
        usdcToken = _usdcToken;
    }

    function swap(uint256 ethAmount) payable external {
        require(ethAmount > 0, "ETH amount must be greater than 0");

        address[] memory path = new address[](2);
        path[0] = uniswapRouter.WETH();
        path[1] = usdcToken;

        uniswapRouter.swapExactETHForTokens{value: ethAmount}(
            0,
            path,
            msg.sender,
            block.timestamp + 3600
        );
    }
}
