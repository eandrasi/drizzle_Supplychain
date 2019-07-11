pragma solidity >=0.4.21 <0.6.0;

import './DonorRole.sol';
import './HospitalRole.sol';
import './PatientRole.sol';
import './ProcessingCenterRole.sol';

contract AccessControl is DonorRole, HospitalRole, PatientRole, ProcessingCenterRole {
    constructor() public {
        
    }
}