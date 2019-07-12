const SupplyChain = artifacts.require("SupplyChain");
const truffleAssert = require('truffle-assertions');



contract("Testing the SupplyChain contract", async accounts => {

    const donorAcc              = accounts[0]
    const processingCenterAcc   = accounts[1]
    const hospitalAcc           = accounts[2]
    const patientAcc            = accounts[3]
    const addressZero           = "0x0000000000000000000000000000000000000000"

    console.log("donorAcc               ->" + donorAcc )
    console.log("processingCenterAcc    ->" + processingCenterAcc )
    console.log("HospitalAcc            ->" + hospitalAcc )
    console.log("PatientAcc             ->" + patientAcc )

    describe("Contract deployment", async () => {
        
        it("Can deploy the contract", async () => {
            let instance = await SupplyChain.deployed();
            let result = await instance;
            assert.exists(result);
        })

        it("Can get the owner", async () => {
            let instance = await SupplyChain.deployed();
            let owner = await instance.owner();
            assert.equal(owner, donorAcc)
        })
    })

    // describe("Donor functions", async () => {

    // })

})