// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract SsafyNFT is ERC721 {

    uint256 private _tokenIds;
    mapping(uint256 => string) tokenURIs;

    constructor(
        string memory name,
        string memory symbol
    ) ERC721(name, symbol) {
    }

    function current() public view returns (uint256) {
        return _tokenIds;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        return tokenURIs[tokenId];
    }

    function create(address to, string memory _tokenURI) public returns (uint256) {
        uint256 newTokenId = SsafyNFT.current();
        _mint(to, newTokenId);
        tokenURIs[newTokenId] = _tokenURI;
        _tokenIds = _tokenIds + 1;
        return newTokenId;
    }
}