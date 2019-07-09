pragma solidity >=0.4.21 <0.6.0;

// Import the library 'Roles'
import "./Roles.sol";

// Define a contract 'FarmerRole' to manage this role - add, remove, check
contract DonorRole {
  using Roles for Roles.Role;

  // Define 2 events, one for Adding, and other for Removing
  event DonorAdded(address indexed account);
  event DonorRemoved(address indexed account);

  // Define a struct 'farmers' by inheriting from 'Roles' library, struct Role
  Roles.Role private donors;

  // In the constructor make the address that deploys this contract the 1st farmer
  constructor() public {
    _addDonor(msg.sender);
  }

  // Define a modifier that checks to see if msg.sender has the appropriate role
  modifier onlyDonor() {
    require(isDonor(msg.sender), "Caller must be registered as Donor");
    _;
  }

  // Define a function 'isFarmer' to check this role
  function isDonor(address account) public view returns (bool) {
    return donors.has(account);
  }

  // Define a function 'addFarmer' that adds this role
  function addDonor(address account) public onlyDonor {
    _addDonor(account);
  }

  // Define a function 'renounceFarmer' to renounce this role
  function renounceDonor() public {
    _removeDonor(msg.sender);
  }

  // Define an internal function '_addFarmer' to add this role, called by 'addFarmer'
  function _addDonor(address account) internal {
    donors.add(account);
    emit DonorAdded(account);
  }

  // Define an internal function '_removeFarmer' to remove this role, called by 'removeFarmer'
  function _removeDonor(address account) internal {
    donors.remove(account);
    emit DonorRemoved(account);
  }
}