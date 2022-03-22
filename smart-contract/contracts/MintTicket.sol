// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./token/ERC721/extensions/ERC721Enumerable.sol";

contract MintTicket is ERC721Enumerable {
    mapping(uint256 => string) tokenURIs;

    constructor() ERC721("MINT NFT", "MNT") {}

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        return tokenURIs[tokenId];
    }

    function create(address to, string memory _tokenURI) public returns (uint256) {
        uint256 newTokenId = totalSupply() + 1;
        _mint(to, newTokenId);
        tokenURIs[newTokenId] = _tokenURI;
        return newTokenId;
    }
}