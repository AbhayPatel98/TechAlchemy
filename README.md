# Test Project - Tech alchemy
https://goerli.etherscan.io/address/0xadb92ac6b8b167f75d166d5a1074c977ac46441f -- Check it.
Running some of the following tasks:
.Install openzeppelin library - npm install @openzeppelin/contracts    
.Then initialize a Node.js project - npm init -y     
.Then install Hardhat - npm install --save-dev hardhat    
.SELECT ANY PROJECT OPTION - IN MY CASE I SELECTED JS PROJECT
.Create my own ERC20 token  smart contract.
.then compile - npx hardhat compile
.after that write a deploy.js code and deploy it on goerli test network[Ethereum].
.Use my Meta-mask Account private key to integrate it and fetch balance and address of my goerli test network.
.then flatten my smart contract to verify it by using - npx  hardhat flatten ./contracts/Abhay.sol > flattenedAbhay.sol         
.Now finally succesfully able to See balance and can transfer ERC20 tokens to other accounts/address.

Deploying contracts with the account: 0xaC4919273d9BcfE68bbE4A6D36952A17E2FC75d1
Account balance: 1.065979635820685433
Token address: 0xADB92aC6B8B167f75D166d5A1074C977ac46441f - check it on Etherscan.

