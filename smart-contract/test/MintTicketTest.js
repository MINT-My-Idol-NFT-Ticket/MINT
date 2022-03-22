const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("MintTicket contract", function () {
  let MintTicket;
  let MintTicketInstance;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  beforeEach(async function () {
    MintTicket = await ethers.getContractFactory("MintTicket");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    MintTicketInstance = await MintTicket.deploy();
  });

  describe("NFT mint, transfer, and compare URI", function () {
    it("Should be owner who call function create", async function () {
      const tokenURI1 = "QmbFMke1KXqnYyBBWxB74N4c5SBnJMVAiMNRcGu6x1AwQH";
      const tokenURI2 = "token uri test";
      const createdTokenId1 = await MintTicketInstance.create(
        owner.address,
        tokenURI1
      );
      const createdTokenId2 = await MintTicketInstance.create(
        addr1.address,
        tokenURI2
      );

      let ownerOfToken1 = await MintTicketInstance.ownerOf(1);
      expect(ownerOfToken1).to.equal(owner.address);

      let ownerOfToken2 = await MintTicketInstance.ownerOf(2);
      expect(ownerOfToken2).to.equal(addr1.address);
    });

    it("Should address2 be a owner of token after transferFrom", async function () {
      const tokenURI1 = "QmbFMke1KXqnYyBBWxB74N4c5SBnJMVAiMNRcGu6x1AwQH";
      const createdTokenId1 = await MintTicketInstance.create(
        owner.address,
        tokenURI1
      );
      await MintTicketInstance["safeTransferFrom(address,address,uint256)"](
        owner.address,
        addr2.address,
        1
      );
      let changeOwner = await MintTicketInstance.ownerOf(1);
      expect(changeOwner).to.equal(addr2.address);
    });

    it("Should same with tokenURI which returned by tokenId of tokenURI()", async function () {
      const tokenURI1 = "QmbFMke1KXqnYyBBWxB74N4c5SBnJMVAiMNRcGu6x1AwQH";
      const createdTokenId1 = await MintTicketInstance.create(
        owner.address,
        tokenURI1
      );
      const tokenURIFetched = await MintTicketInstance.tokenURI(1);
      expect(tokenURI1).to.equal(tokenURIFetched);
    });
  });
});
