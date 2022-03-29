// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./SaleTicket.sol";
import "./token/ERC721/extensions/ERC721Enumerable.sol";
import "./access/Ownable.sol";
import "./token/ERC20/ERC20.sol";
import "hardhat/console.sol";

contract MintTicket is ERC721Enumerable, Ownable{

    SaleTicket public saleTicket;
    address public saleContractAddress;
    // Payable address can receive Ether
    address admin;
    uint256 ticketPrice;
    IERC20 public erc20Contract;
    struct TicketTokenData {
        uint256 tokenId;
    }

    mapping(uint256 => string) tokenURIs;

    constructor(address _admin, uint256 _price, address _currencyAddress) ERC721("MINT NFT", "MNT") {
        admin = _admin;
        ticketPrice = _price;
        erc20Contract = IERC20(_currencyAddress);
    }

    // contract를 deploy한 owner에게 contract가 갖고있는 결제금이 출금되는 함수
    function withdraw() public {
        uint amount = address(this).balance;

        (bool success, ) = admin.call{value: amount}("");
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

    // private으로 바꾸기 (nft skeleton 참고)
    function getCurrencyAmount() public view returns (uint256) {
        return erc20Contract.balanceOf(msg.sender);
    }
    
    // 사용자가 결제 누르면 티켓 가격(msg.value)과 함께 호출되는 함수
    // 사용자에게 돈을 받고, NFT 발급
    function buyTicket(string memory _tokenURI) public returns (uint256) {   
        erc20Contract.transferFrom(msg.sender, admin, ticketPrice);
        uint256 newTokenId = totalSupply() + 1;
        _mint(msg.sender, newTokenId);
        tokenURIs[newTokenId] = _tokenURI;
        approve(saleContractAddress, newTokenId);
        return newTokenId;
    }

    // 해당 컨트랙트 내에서, 특정 주소가 가진 티켓들의 tokenId 리스트 반환
    function getTicketList(address _mintTicketOwner) public view returns (TicketTokenData[] memory) {
        uint256 balanceLength = balanceOf(_mintTicketOwner);
        
        // 아래 주석 풀면 프론트에서 에러 처리 해줘야함 (Returned error: Execution reverted)
        // require(balanceLength != 0, "Owner doesn't have ticket.");

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
}