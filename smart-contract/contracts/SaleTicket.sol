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

    // 티켓 소유자가 판매 등록
    function setForSaleTicket(uint256 _tokenId, uint256 _price) public {
        address ticketOwner = mintTicketAddress.ownerOf(_tokenId);
        require(ticketOwner == msg.sender, "Caller is not ticket owner.");
        require(ticketPrices[_tokenId] == 0, "This ticket is already on sale.");
        require(_price > 0, "Price is zero or lower.");
        //require(mintTicketAddress.isApprovedForAll(ticketOwner, address(this)), "Ticket owner did not approve token.");

        ticketPrices[_tokenId] = _price;
        onSaleTicketArray.push(_tokenId);
    }

    // 다른 사용자가 판매 등록된 티켓 구매
    function purchaseTicket(uint256 _tokenId) public {
        uint256 price = ticketPrices[_tokenId];
        address ticketOwner = mintTicketAddress.ownerOf(_tokenId);

        require(price > 0, "Ticket not sale.");
        require(ticketOwner != msg.sender, "Caller is ticket owner.");
        erc20Contract.transferFrom(msg.sender, ticketOwner, price);
        mintTicketAddress.transferFrom(ticketOwner, msg.sender, _tokenId);

        ticketPrices[_tokenId] = 0;

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

    function getTicketPrice(uint256 _tokenId) view public returns(uint256) {
        return ticketPrices[_tokenId];
    }
}