// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Amo is ERC20 {
    constructor() ERC20("Token", "TOK") {
        _mint(msg.sender, 50_000_000_000 * 10**18);
    }
} 