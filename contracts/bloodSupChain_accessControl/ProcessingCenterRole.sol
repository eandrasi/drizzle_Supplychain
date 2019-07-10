pragma solidity >=0.4.21 <0.6.0;

// Import the library 'Roles'
import "./Roles.sol";

contract ProcessingCenterRole {
  using Roles for Roles.Role;

  event ProcessingCenterAdded(address indexed account);
  event ProcessingCenterRemoved(address indexed account);

  Roles.Role private processingCenters;

  constructor() public {
    _addProcessingCenter(msg.sender);
  }
  modifier onlyProcessingCenter() {
    require(isProcessingCenter(msg.sender), "Caller must be registered as ProcessingCenter");
    _;
  }

  function isProcessingCenter(address account) public view returns (bool) {
    return processingCenters.has(account);
  }

  function addProcessingCenter(address account) public onlyProcessingCenter {
    _addProcessingCenter(account);
  }

  function renounceProcessingCenter() public {
    _removeProcessingCenter(msg.sender);
  }

  function _addProcessingCenter(address account) internal {
    processingCenters.add(account);
    emit ProcessingCenterAdded(account);
  }

  function _removeProcessingCenter(address account) internal {
    processingCenters.remove(account);
    emit ProcessingCenterRemoved(account);
  }
}