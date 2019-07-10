pragma solidity >=0.4.21 <0.6.0;

// Import the library 'Roles'
import "./Roles.sol";

contract HospitalRole {
  using Roles for Roles.Role;

  event HospitalAdded(address indexed account);
  event HospitalRemoved(address indexed account);

  Roles.Role private hospitals;

  constructor() public {
    _addHospital(msg.sender);
  }
  modifier onlyHospital() {
    require(isHospital(msg.sender), "Caller must be registered as Hospital");
    _;
  }

  function isHospital(address account) public view returns (bool) {
    return hospitals.has(account);
  }

  function addHospital(address account) public onlyHospital {
    _addHospital(account);
  }

  function renounceHospital() public {
    _removeHospital(msg.sender);
  }

  function _addHospital(address account) internal {
    hospitals.add(account);
    emit HospitalAdded(account);
  }

  function _removeHospital(address account) internal {
    hospitals.remove(account);
    emit HospitalRemoved(account);
  }
}