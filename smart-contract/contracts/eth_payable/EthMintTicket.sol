// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./EthSaleTicket.sol";
import "../token/ERC721/extensions/ERC721Enumerable.sol";

contract MintTicket is ERC721Enumerable {

    SaleTicket public saleTicket;
    address public saleContractAddress;
    // Payable address can receive Ether
    address payable public owner;
    uint256 ticketPrice;

    struct TicketTokenData {
        uint256 tokenId;
    }

    mapping(uint256 => string) tokenURIs;

    constructor(uint256 _price) ERC721("MINT NFT", "MNT") payable {
        
        owner = payable(msg.sender);
        ticketPrice = _price;
    }

    // contract를 deploy한 owner에게 contract가 갖고있는 결제금이 출금되는 함수
    function withdraw() public {
        
        uint amount = address(this).balance;

        (bool success, ) = owner.call{value: amount}("");
        require(success, "Failed to send Ether");
    }

    // tokenId에 해당하는 tokenURI 반환
    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        
        return tokenURIs[tokenId];
    }

    // contract 생성시 등록된 티켓 가격 반환
    function getTicketPrice() public view returns (uint256) {
        
        return ticketPrice;
    }

    // 사용자가 결제 누르면 티켓 가격(msg.value)과 함께 호출되는 함수
    // 사용자에게 돈을 받고, NFT 발급
    function buyTicket(string memory _tokenURI) public payable returns (uint256) {   
        
        uint256 newTokenId = totalSupply() + 1;

        require(msg.value > 0, "Caller sent zero ether");
        require(ticketPrice <= msg.value, "Caller sent lower than price.");
        
        _mint(msg.sender, newTokenId);
        tokenURIs[newTokenId] = _tokenURI;
        approve(saleContractAddress, newTokenId);
        return newTokenId;
    }

    // 해당 컨트랙트 내에서, 특정 주소가 가진 티켓들의 tokenId 리스트 반환
    function getTicketList(address _mintTicketOwner) view public returns (TicketTokenData[] memory) {
        
        uint256 balanceLength = balanceOf(_mintTicketOwner);

        require(balanceLength != 0, "Owner doesn't have ticket.");

        TicketTokenData[] memory ticketTokenData = new TicketTokenData[](balanceLength);

        for (uint256 i = 0; i < balanceLength; i++) {
            uint256 mintTokenId = tokenOfOwnerByIndex(_mintTicketOwner, i);
            
            ticketTokenData[i] = TicketTokenData(mintTokenId);
        }

        return ticketTokenData;
    }

    function setSaleTicket(address _setSaleTicket) public {
        
        saleTicket = SaleTicket(_setSaleTicket);
        saleContractAddress = _setSaleTicket;
    }

    // 보유하고 있는 토큰 소각 
    function cancelTicket(uint256 _tokenId) public {

        // msg.sender가 가지고 있는 tokenId인지 확인
        address ticketOwner = ownerOf(_tokenId);

        require(ticketOwner == msg.sender, "Caller is not ticket owner.");

        // NFT 소각
        _burn(_tokenId);

    }   
}
