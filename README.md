# Blood Donation Supply chain & data auditing

This repository contains an Ethereum DApp that demonstrates a Supply Chain flow between a Blood Donor and Patient. The user story is similar to any commonly used supply chain process.

The smart contract should be used together with a Factory type of smart contract. The factory smart-contract is not implemented.

The DApp User Interface allows you to register the different roles needed for this demonstration and then move through the different stages of the entire Supply-chain.

## Diagrams and mockup 
[Draw.io activity diagram, sequence diagram, state diagram, data modeling diagram and webPage mockup](https://drive.google.com/file/d/1l006GcTabdrCR-6PL4T1Txl3TBBRmggF/view?usp=sharing)

## Donor Functions
The donor can initiate the process by sending a transaction containing his name, some information like a Donor-Card serial number and the blood type.
After sending this transaction, the donor will get back a transaction hash. The donor must take this transaction hash and send it together with the upc and the index in another transaction that will add the transaction hash to the item's history.
The donor can then transfer the ownership of the contract instance to the Processing Center and then set again the history of the steps the contract has been through.

## Processing Center Functions
Once the processing Center has become the owner of the contract instance, it can call the 'collect' function and it will claim the contract on it's address. After performing all the necessary functions, the Processing Center can mark the steps performed by providing the upc and calling the appropriate functions. After all the steps have been performed it can transfer the ownership to the Hospital and then set the History with the appropriate transaction hash at index 2.

## Hospital Functions
When the hospital account calls the 'Store' function it will confirm the possession of the item and also claim ownership. By calling the 'administer' function it signals that it is ready to deliver the item to the Patient and then can transfer ownership to the patient and set the history.

## Patient Functions
By calling the 'receive' function the patient claims ownership and accepts the blood transfer. In the end will set the history and so ending the cycle.

## History / Details Functions
Throwout the life-cycle the changes in history and item information can be observed and inspected.


# Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites
Please make sure you've already installed ganache-cli, Truffle and enabled MetaMask extension in your browser.


## Installing

Clone this repository: `https://github.com/eandrasi/drizzle_Supplychain`
Install using `npm install`
Launch Ganache
In a separate terminal window, Compile smart contracts: `truffle compile`
Migrate smart contracts to the locally running blockchain, ganache-cli: `truffle migrate --reset`
Test the smart-contracts `truffle test`
All tests should pass
In a separate terminal window, launch the DApp:
`cd app`
`npm start`


# Built With
+ Ethereum - Ethereum is a decentralized platform that runs smart contracts
+ IPFS - IPFS is the Distributed Web | A peer-to-peer hypermedia protocol to make the web faster, safer, and more open.
+ Truffle Framework - Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.
+ openzeppelin-solidity
+ truffle-assertions
+ drizzle
+ drizzle-react
+ drizzle-react-components
+ react
+ react-dom
+ react-scripts
+ react-toastify

# Authors
Eduard Andrasi

# Acknowledgments
+ Solidity
+ Ganache-cli
+ Truffle
+ Drizzle
+ React