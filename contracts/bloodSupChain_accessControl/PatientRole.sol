pragma solidity >=0.4.21 <0.6.0;

// Import the library 'Roles'
import "./Roles.sol";

contract PatientRole {
  using Roles for Roles.Role;

  event PatientAdded(address indexed account);
  event PatientRemoved(address indexed account);

  Roles.Role private patients;

  constructor() public {
    _addPatient(msg.sender);
  }
  modifier onlyPatient() {
    require(isPatient(msg.sender), "Caller must be registered as Patient");
    _;
  }

  function isPatient(address account) public view returns (bool) {
    return patients.has(account);
  }

  function addPatient(address account) public onlyPatient {
    _addPatient(account);
  }

  function renouncePatient() public {
    _removePatient(msg.sender);
  }

  function _addPatient(address account) internal {
    patients.add(account);
    emit PatientAdded(account);
  }

  function _removePatient(address account) internal {
    patients.remove(account);
    emit PatientRemoved(account);
  }
}