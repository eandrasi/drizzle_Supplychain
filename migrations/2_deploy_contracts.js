// const SimpleStorage = artifacts.require("SimpleStorage");
// const TutorialToken = artifacts.require("TutorialToken");
// const ComplexStorage = artifacts.require("ComplexStorage");
var ArtistRole = artifacts.require("ArtistRole")

module.exports = function(deployer) {
  deployer.deploy(ArtistRole);
  // deployer.deploy(SimpleStorage);
  // deployer.deploy(TutorialToken);
  // deployer.deploy(ComplexStorage);
};
