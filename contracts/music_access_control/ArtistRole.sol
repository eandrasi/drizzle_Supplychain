pragma solidity >=0.4.21 <0.6.0;

// Import the library 'Roles'
import "./Roles.sol";

// Define a contract 'FarmerRole' to manage this role - add, remove, check
contract ArtistRole {
  using Roles for Roles.Role;

  // Define 2 events, one for Adding, and other for Removing
  event ArtistAdded(address indexed account);
  event ArtistRemoved(address indexed account);

  // Define a struct 'farmers' by inheriting from 'Roles' library, struct Role
  Roles.Role private artists;

  // In the constructor make the address that deploys this contract the 1st farmer
  constructor() public {
    _addArtist(msg.sender);
  }

  // Define a modifier that checks to see if msg.sender has the appropriate role
  modifier onlyArtist() {
    require(isArtist(msg.sender), "Caller must be registered as Artist");
    _;
  }

  // Define a function 'isFarmer' to check this role
  function isArtist(address account) public view returns (bool) {
    return artists.has(account);
  }

  // Define a function 'addFarmer' that adds this role
  function addArtist(address account) public onlyArtist {
    _addArtist(account);
  }

  // Define a function 'renounceFarmer' to renounce this role
  function renounceArtist() public {
    _removeArtist(msg.sender);
  }

  // Define an internal function '_addFarmer' to add this role, called by 'addFarmer'
  function _addArtist(address account) internal {
    artists.add(account);
    emit ArtistAdded(account);
  }

  // Define an internal function '_removeFarmer' to remove this role, called by 'removeFarmer'
  function _removeArtist(address account) internal {
    artists.remove(account);
    emit ArtistRemoved(account);
  }
}