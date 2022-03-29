// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./MintTicket.sol";
import "./token/ERC20/ERC20.sol";

contract SaleTicket {
   
    MintTicket public mintTicketAddress;
    IERC20 public erc20Contract;

    constructor (address _mintTicketAddress, address _currencyAddress) {
        mintTicketAddress = MintTicket(_mintTicketAddress);
        erc20Contract = IERC20(_currencyAddress);
    }

    mapping(uint256 => uint256) public ticketPrices;
    
    uint256[] public onSaleTicketArray;

    // 사용자(티켓 구매자)가 보유한 NFT 판매 등록
    function setForSaleTicket(uint256 _tokenId, uint256 _price) public {
        
        address ticketOwner = mintTicketAddress.ownerOf(_tokenId);
        
        require(ticketOwner == msg.sender, "Caller is not ticket owner.");
        require(ticketPrices[_tokenId] == 0, "This ticket is already on sale.");
        require(_price > 0, "Price is zero or lower.");

        ticketPrices[_tokenId] = _price;
        onSaleTicketArray.push(_tokenId);   // 판매중인 티켓 배열에 추가
    }

    // 사용자간 NFT P2P 거래
    function purchaseTicket(uint256 _tokenId) public {

        uint256 price = ticketPrices[_tokenId];
        address ticketOwner = mintTicketAddress.ownerOf(_tokenId);

        require(price > 0, "Ticket not sale.");
        require(ticketOwner != msg.sender, "Caller is ticket owner.");

        erc20Contract.transferFrom(msg.sender, ticketOwner, price); // SSF 전송
        mintTicketAddress.transferFrom(ticketOwner, msg.sender, _tokenId);  // NFT 양도 받기
        ticketPrices[_tokenId] = 0;

        // 판매중인 티켓 배열에서 방금 거래된 티켓 제거
        for (uint256 i = 0; i < onSaleTicketArray.length; i++) {
            if (ticketPrices[onSaleTicketArray[i]] == 0) {
                onSaleTicketArray[i] = onSaleTicketArray[onSaleTicketArray.length - 1];  // 맨 뒤 index를 방금 제거한 토큰의 자리로 옮김
                onSaleTicketArray.pop();
            }
        }
    }

    // 해당 콘서트 티켓 중 판매 등록된 수 반환
    function getOnSaleTicketArrayLength() view public returns (uint256) {
        
        return onSaleTicketArray.length;
    }

    // 해당 티켓 NFT가 판매 등록된 티켓 가격 반환
    function getTicketPrice(uint256 _tokenId) view public returns(uint256) {
        
        return ticketPrices[_tokenId];
    }
}