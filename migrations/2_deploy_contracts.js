const DonorRole = artifacts.require("DonorRole");
const HospitalRole = artifacts.require("HospitalRole");
const PatientRole = artifacts.require("PatientRole");
const ProcessingCenterRole = artifacts.require("ProcessingCenterRole")
const SupplyChain = artifacts.require("SupplyChain")

module.exports = function(deployer) {
  deployer.deploy(DonorRole);
  deployer.deploy(HospitalRole);
  deployer.deploy(PatientRole);
  deployer.deploy(ProcessingCenterRole);
  deployer.deploy(SupplyChain);
};
