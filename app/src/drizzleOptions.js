// import SimpleStorage from "./contracts/SimpleStorage.json";
// import ComplexStorage from "./contracts/ComplexStorage.json";
// import TutorialToken from "./contracts/TutorialToken.json";
import SupplyChain from "./contracts/SupplyChain.json"

const options = {
  web3: {
    block: false,
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:9545",
    },
  },
  // contracts: [SimpleStorage, ComplexStorage, TutorialToken],
  contracts: [SupplyChain],
  events: {
    SupplyChain: [
      "Donated",
      "Collected",
      "Tested",
      "Processed",
      "Packed",
      "Stored",
      "Administered",
      "Received"
    ],
  },
  polls: {
    accounts: 1500,
  },
};

export default options;
