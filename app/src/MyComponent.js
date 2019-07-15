import React from "react";
import {
  AccountData,
  ContractData,
  ContractForm,
} from "drizzle-react-components";

import logo from  "./logo.png";

export default ({ accounts }) => (
  // <div className="App">
  <div className="App">
    <div>
      <h1>Blood Donation Supply Chain</h1>
      <p>Track blood donation with blockchain</p>
    </div>

    {/* <div>
      <h2>Balance of first Account</h2>
      <AccountData accountIndex={0} units={"ether"} precision={5} />
    </div> */}

    <hr/>
    <div>
      <h2>Register Roles</h2>
      <div>
        <strong>Owner: </strong>
        <ContractData contract="SupplyChain" method="owner"/>
        <br />
        <br />
      </div>

      <div>
        ProcessingCenter address:
        <ContractForm contract="SupplyChain" method="addProcessingCenter" labels={['Processing center']} />
        <br />  
      </div>

      <div>
        Hospital Address:
        <ContractForm contract="SupplyChain" method="addHospital" labels={['Hospital']} />
        <br />
      </div>
      <div>
        Patient Address:
        <ContractForm contract="SupplyChain" method="addHospital" labels={['Patient']} />
        <br/>
      </div>
    </div>

    <hr/>
    <div>
      <h2>Donor Functions</h2>
      <div>
        Donate Blood
        <ContractForm contract="SupplyChain" method="donate" labels={['name', 'info', 'type']} />
        <br/>
        <br/>
      </div>

      <div>
        Set History
        <ContractForm contract="SupplyChain" method="setHistory" labels={['upc', '0 - donateTX', 'txHash']} />
        <br/>
        <br/>
      </div>

      <div>
        Transfer to Processing Center
        <ContractForm contract="SupplyChain" method="transfer" labels={['processingCenterAddress', 'upc']} />
        <br/>
        <br/>
      </div>

      <div>
        Set History
        <ContractForm contract="SupplyChain" method="setHistory" labels={['upc', '1 - toPcTx', 'txHash']} />
        <br/>
      </div>
    </div>

    <hr/>
    <div>
      <h2>Processing Center Functions</h2>
      <div>
        Collect
        <ContractForm contract="SupplyChain" method="collect" labels={['upc']} />
        <br/>
        <br/>
      </div>
      
      <div>
        Test
        <ContractForm contract="SupplyChain" method="test" labels={['upc']} />
        <br/>
        <br/>
      </div>
      
      <div>
        Process
        <ContractForm contract="SupplyChain" method="process" labels={['upc']} />
        <br/>
        <br/>
      </div>
      
      <div>
        Pack
        <ContractForm contract="SupplyChain" method="pack" labels={['upc']} />
        <br/>
        <br/>
      </div>

      <div>
        Transfer to Hospital
        <ContractForm contract="SupplyChain" method="transfer" labels={['hospital Address', 'upc']} />
        <br/>
        <br/>
      </div>

      <div>
        Set History
        <ContractForm contract="SupplyChain" method="setHistory" labels={['upc', '2 - toHospitalTx', 'txHash']} />
        <br/>
      </div>
    </div>

    <hr/>
    <div>
      <h2>Hospital Functions</h2>
      <div>
        Store
        <ContractForm contract="SupplyChain" method="store" labels={['upc']} />
        <br/>
        <br/>
      </div>
      
      <div>
        Administer
        <ContractForm contract="SupplyChain" method="administer" labels={['upc']} />
        <br/>
        <br/>
      </div>

      <div>
        Transfer to Patient
        <ContractForm contract="SupplyChain" method="transfer" labels={['patient Address', 'upc']} />
        <br/>
        <br/>
      </div>

      <div>
        Set History
        <ContractForm contract="SupplyChain" method="setHistory" labels={['upc', '3 - toPatientTx', 'txHash']} />
        <br/>
      </div>
    </div>

    <hr/>
    <div>
      <h2>Patient Functions</h2>
      <div>
        Receive
        <ContractForm contract="SupplyChain" method="receive" labels={['upc']} />
        <br/>
        <br/>
      </div>

      <div>
        Set History
        <ContractForm contract="SupplyChain" method="setHistory" labels={['upc', '4 - receivedTx', 'txHash']} />
        <br/>
      </div>
    </div>

    <hr/>
    <div>
      <h2>History / Details Functions</h2>
      <h3>
      Details
      </h3>
      <ContractData contract="SupplyChain" method="getDetails" methodArgs={[1]} />
      <hr/>
      <h3>
      History
      </h3>
      <ContractData contract="SupplyChain" method="getHistory" methodArgs={[1]} />
      <hr/>
    </div>
   
  </div>

    // <div className="section">
    //   <h2>Register Roles</h2>
    //   <AccountData accountIndex="0" units="ether" precision="3" />
    // </div>

  //   <div className="section">
  //     <h2>SimpleStorage</h2>
  //     <p>
  //       This shows a simple ContractData component with no arguments, along with
  //       a form to set its value.
  //     </p>
  //     <p>
  //       <strong>Stored Value: </strong>
  //       <ContractData contract="SimpleStorage" method="storedData" />
  //     </p>
  //     <ContractForm contract="SimpleStorage" method="set" />
  //   </div>

  //   <div className="section">
  //     <h2>TutorialToken</h2>
  //     <p>
  //       Here we have a form with custom, friendly labels. Also note the token
  //       symbol will not display a loading indicator. We've suppressed it with
  //       the <code>hideIndicator</code> prop because we know this variable is
  //       constant.
  //     </p>
  //     <p>
  //       <strong>Total Supply: </strong>
  //       <ContractData
  //         contract="TutorialToken"
  //         method="totalSupply"
  //         methodArgs={[{ from: accounts[0] }]}
  //       />{" "}
  //       <ContractData contract="TutorialToken" method="symbol" hideIndicator />
  //     </p>
  //     <p>
  //       <strong>My Balance: </strong>
  //       <ContractData
  //         contract="TutorialToken"
  //         method="balanceOf"
  //         methodArgs={[accounts[0]]}
  //       />
  //     </p>
  //     <h3>Send Tokens</h3>
  //     <ContractForm
  //       contract="TutorialToken"
  //       method="transfer"
  //       labels={["To Address", "Amount to Send"]}
  //     />
  //   </div>
  //   <div className="section">
  //     <h2>ComplexStorage</h2>
  //     <p>
  //       Finally this contract shows data types with additional considerations.
  //       Note in the code the strings below are converted from bytes to UTF-8
  //       strings and the device data struct is iterated as a list.
  //     </p>
  //     <p>
  //       <strong>String 1: </strong>
  //       <ContractData contract="ComplexStorage" method="string1" toUtf8 />
  //     </p>
  //     <p>
  //       <strong>String 2: </strong>
  //       <ContractData contract="ComplexStorage" method="string2" toUtf8 />
  //     </p>
  //     <strong>Single Device Data: </strong>
  //     <ContractData contract="ComplexStorage" method="singleDD" />
  //   </div>
  // </div>
);
