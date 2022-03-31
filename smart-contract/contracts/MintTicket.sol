// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./SaleTicket.sol";
import "./token/ERC721/extensions/ERC721Enumerable.sol";
import "./access/Ownable.sol";
import "./token/ERC20/ERC20.sol";

contract MintTicket is ERC721Enumerable, Ownable{

    SaleTicket public saleTicket;
    address public saleContractAddress;
    address admin;
    address adminAddress;
    uint256 ticketPrice;
    IERC20 public erc20Contract;
    struct TicketTokenData {
        uint256 tokenId;
    }

    mapping(uint256 => string) tokenURIs;

    constructor(uint256 _price, address _currencyAddress) ERC721("MINT NFT", "MNT") {
        admin = address(this);  // mintTicket contract 주소
        adminAddress = msg.sender;  // mintTicket 컨트랙트를 배포한 관리자 주소
        ticketPrice = _price;   
        erc20Contract = IERC20(_currencyAddress);
    }

    // contract를 deploy한 owner에게 contract가 갖고있는 결제금이 출금되는 함수
    function withdraw() public {
        
        uint amount = erc20Contract.balanceOf(admin);

        require(adminAddress == msg.sender, "Caller is not admin.");
        require(amount > 0, "There is no remaining balance.");

        erc20Contract.approve(admin, amount);
        erc20Contract.transferFrom(admin, adminAddress, amount);
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
        
        uint256 newTokenId = totalSupply() + 1;
        uint256 balanceLength = balanceOf(msg.sender);

        require(balanceLength == 0, "Caller already has a ticket.");
        
        erc20Contract.transferFrom(msg.sender, admin, ticketPrice); // SSF 전송
        _mint(msg.sender, newTokenId);  // NFT 발행
        tokenURIs[newTokenId] = _tokenURI;  
        approve(saleContractAddress, newTokenId);   // NFT 전송 권한 부여
        return newTokenId;
    }

    // 해당 컨트랙트 내에서, 특정 주소가 가진 티켓들의 tokenId 리스트 반환
    function getTicketList(address _mintTicketOwner) public view returns (TicketTokenData[] memory) {
        
        uint256 balanceLength = balanceOf(_mintTicketOwner);
        
        // 아래 주석 풀면 프론트에서 에러 처리 해줘야함 (Returned error: Execution reverted)
        require(balanceLength != 0, "Owner doesn't have ticket.");

        TicketTokenData[] memory ticketTokenData = new TicketTokenData[](balanceLength);

        for (uint256 i = 0; i < balanceLength; i++) {
            uint256 mintTokenId = tokenOfOwnerByIndex(_mintTicketOwner, i);
            
            ticketTokenData[i] = TicketTokenData(mintTokenId);
        }

        return ticketTokenData;
    }
    
    // buyTicket에서 saleContract에게 approve권한을 주기 위해 주소 등록
    function setSaleTicket(address _setSaleTicket) public {

        saleTicket = SaleTicket(_setSaleTicket);
        saleContractAddress = _setSaleTicket;
    }

    // 보유하고 있는 토큰 소각 (요청자의 토큰 보유 여부 확인 후 소각 그리고 돈 환불)
    function cancelTicket(uint256 _tokenId) public {

        // msg.sender가 가지고 있는 tokenId인지 확인
        address ticketOwner = ownerOf(_tokenId);

        require(ticketOwner == msg.sender, "Caller is not ticket owner.");

        // NFT 소각
        _burn(_tokenId);

        // SSF 환불
        erc20Contract.approve(admin, ticketPrice);
        erc20Contract.transferFrom(admin, msg.sender, ticketPrice);
    }   

}
