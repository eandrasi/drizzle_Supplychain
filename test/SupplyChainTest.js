const SupplyChain = artifacts.require("SupplyChain");
const truffleAssert = require('truffle-assertions');

contract("Testing the SupplyChain contract", async accounts => {
    
    let upc = 1
    
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

    describe("Registering Roles", () => {

        it("Can register Donor role", async () => {
            let instance = await SupplyChain.deployed()
            let result = await instance.addDonor(accounts[9])
            assert.equal(result.logs[0].event, "DonorAdded")
            assert.equal(result.logs[0].args.account, accounts[9])
        })
        
        it("Can remove Donor role", async () => {
            let instance = await SupplyChain.deployed()
            let result = await instance.renounceDonor({from: accounts[9]})
            assert.equal(result.logs[0].event, "DonorRemoved")
            assert.equal(result.logs[0].args.account, accounts[9])
        })

        it("Can check Donor role", async () => {
            let instance = await SupplyChain.deployed()
            let result = await instance.isDonor(donorAcc)
            assert.isTrue(result)
        })

        it("Can register ProcessingCenter role", async () => {
            let instance = await SupplyChain.deployed()
            let result = await instance.addProcessingCenter(processingCenterAcc)
            assert.equal(result.logs[0].event, "ProcessingCenterAdded")
            assert.equal(result.logs[0].args.account, processingCenterAcc)
        })

        it("Can register Hospital role", async () => {
            let instance = await SupplyChain.deployed()
            let result = await instance.addHospital(hospitalAcc)
            assert.equal(result.logs[0].event, "HospitalAdded")
            assert.equal(result.logs[0].args.account, hospitalAcc)

            let roleAdded = await instance.isHospital(hospitalAcc)
            assert.isTrue(roleAdded)
        })

        it("Can register Patient role", async () => {
            let instance = await SupplyChain.deployed()
            let result = await instance.addPatient(patientAcc)
            assert.equal(result.logs[0].event, "PatientAdded")
            assert.equal(result.logs[0].args.account, patientAcc)

            let roleAdded = await instance.isPatient(patientAcc)
            assert.isTrue(roleAdded)
        })
    })

    describe("Donor Functions", () => {
        it("Can donate blood and set history", async () => {
            let instance = await SupplyChain.deployed()
            let result = await instance.donate("James", "James's info", 2, {from: donorAcc})
            assert.equal(result.logs[0].event, "Donated")

            let donateTx = result.tx
            let upc = result.logs[0].args.upc.toNumber()
            // console.log("TX:" + donateTx + "  UPC:" + upc)
            let history = await instance.setHistory(upc, 0, donateTx)//insert in array at index 0
            assert.exists(history)
        })
       

        it("Can transfer ownership and set history", async () => {
            let instance = await SupplyChain.deployed()
            let result = await instance.transfer(processingCenterAcc, upc)
            truffleAssert.eventEmitted(result, "TransferOwnership")

            // console.log("TRANSFER:" + JSON.stringify(result, null, 4))
            // console.log(result)\

            let toPcTx = result.tx
            let history = await instance.setHistory(upc, 1, toPcTx)//insert in array at index 1
            assert.exists(history)
        })
    })

    describe("ProcessingCenter Functions", () => {
        it("Can Collect", async () => {
            let instance = await SupplyChain.deployed()
            let result  = await instance.collect(upc, {from: processingCenterAcc})
            truffleAssert.eventEmitted(result, "Collected")
        })
        
        it("Can Test", async () => {
            let instance = await SupplyChain.deployed()
            let result  = await instance.test(upc, {from: processingCenterAcc})
            truffleAssert.eventEmitted(result, "Tested")
        })
        
        it("Can Process", async () => {
            let instance = await SupplyChain.deployed()
            let result  = await instance.process(upc, {from: processingCenterAcc})
            truffleAssert.eventEmitted(result, "Processed")
        })
        
        it("Can Pack", async () => {
            let instance = await SupplyChain.deployed()
            let result  = await instance.pack(upc, {from: processingCenterAcc})
            truffleAssert.eventEmitted(result, "Packed")
        })

        it("Can transfer ownership and set history", async () => {
            let instance = await SupplyChain.deployed()
            let result = await instance.transfer(hospitalAcc, upc, {from: processingCenterAcc})
            truffleAssert.eventEmitted(result, "TransferOwnership")

            let toHospitalTx = result.tx
            let history = await instance.setHistory(upc, 2, toHospitalTx)//insert in array at index2
            assert.exists(history)
        })
    })

    describe("Hospital Functions", async () => {
        it("Can Store", async () => {
            let instance = await SupplyChain.deployed()
            let result = await instance.store(upc, {from: hospitalAcc})
            truffleAssert.eventEmitted(result, "Stored")
        })
        
        it("Can Administer", async () => {
            let instance = await SupplyChain.deployed()
            let result = await instance.administer(upc, {from: hospitalAcc})
            truffleAssert.eventEmitted(result, "Administered")
        })

        it("Can transfer ownership and set history", async () => {
            let instance = await SupplyChain.deployed()
            let result = await instance.transfer(patientAcc, upc, {from: hospitalAcc})
            truffleAssert.eventEmitted(result, "TransferOwnership")

            let toPatientTx = result.tx
            let history = await instance.setHistory(upc, 3, toPatientTx)//insert in array at index 3
            assert.exists(history)
        })
    })

    describe("Patient Functions", async () => {
        it("Can Receive and set history", async () => {
            let instance = await SupplyChain.deployed()
            let result = await instance.receive(upc, {from: patientAcc})
            truffleAssert.eventEmitted(result, "Received")

            let transaction = result.tx
            let history = await instance.setHistory(upc, 4, transaction)//insert in array at index 4
            assert.exists(history)
        })
    })

    describe("Tx history and item details", () => {
        it("Can read TxHistory", async () => {
            let instance = await SupplyChain.deployed()
            let result = await instance.getHistory(1)
            assert.exists(result)
            assert.isObject(result)
            // console.log(result)
        })

        it("Can get item details", async () => {
            let instance = await SupplyChain.deployed()
            let result = await instance.getDetails(1)
            assert.exists(result)
            assert.isObject(result)
            // console.log("DETAILS:" + JSON.stringify(result, null, 4))
        })
    })

})