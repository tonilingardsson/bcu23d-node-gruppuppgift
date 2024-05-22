**Gruppuppgift**

I denna uppgift som ska utföras i grupp ska ni ta fram en blockkedja som hanterar en fiktiv kryptovaluta samt hanterar transaktioner.

////////////////////////////////////////////////////////////////////////////////////

**Serverapplikationen(Back-End)**

[X] Som programmeringsspråk för Blockkedjan(serverdelen)ska **Node.js** användas.
[] Serverdelen ska vara utvecklad enligt designmönstret **MVC**. Det vill säga att **varje endpoint** ska vara placerad **i en egen controllermodul**.
[] **Route** hanteringen ska ligga i en **egen modul**.
[] Det ska finnas **endpoints(url)** för att kunna **lista blockkedjan**, **lägga till nya block** i blockkedjan.
[] **Validera** block**kedjan** och **blocken** i blockkedjan.
[] **Addera transaktioner** och att kunna göra en **”mine”** för alla transaktioner.

[] **Om tid finns** så är det bra om en **”consensus”** algoritm tas fram som synkroniserar flera noders blockkedjor.

////////////////////////////////////////////////////////////////////////////////////

**Klient applikationen (Front-End)**

[] Ska vara utvecklad antingen som en renodlad HTML+CSS+JavaScript eller med React (vårt val) och med ramverket Vite.
[] Samma grundkrav finns här att strukturen i applikationen ska följa vedertagna kodstandarder.

Via klientapplikationen ska det gå att:
[] Lista block i enblockkedja,
[] Hämta ut ett block ur blockkedjan.
[] Det ska även gå att kunna lägga till en ny transaktion.

////////////////////////////////////////////////////////////////////////////////////

Sprint 1: Project Setup and Basic Blockchain Functionality
Goal: Set up the development environment, implement the basic blockchain structure, and list all blocks.

Tasks:

Set up the development environment

Create a new repository.
Initialize the Node.js project.
Set up the directory structure (MVC pattern).
Implement basic blockchain structure

Create the Block class.
Properties: index, timestamp, data, previousHash, hash.
Create the Blockchain class.
Properties: chain (array of blocks), difficulty.
Methods: createGenesisBlock(), getLatestBlock(), addBlock(newBlock), isChainValid().
List all blocks

Create a view to display all blocks.
Set up a controller to handle fetching blocks.
Implement a route to display the list of blocks.
Cards:

Environment setup.
Block class implementation.
Blockchain class implementation.
Create genesis block.
Add block method.
Validate chain method.
View for listing blocks.
Controller for fetching blocks.
Route for listing blocks.
Sprint 2: Adding Transactions and Mining
Goal: Implement transactions, add mining functionality, and add blocks through mining.

Tasks:

Implement transaction structure

Create the Transaction class.
Properties: fromAddress, toAddress, amount, timestamp.
Integrate transactions into blockchain

Modify the Block class to include a transactions array.
Update the addBlock method to handle transactions.
Implement mining functionality

Add a mining method to the Blockchain class.
Method: minePendingTransactions(miningRewardAddress).
Adjust block creation to include mining proof-of-work (PoW).
Add block through mining

Create a view to initiate mining.
Set up a controller to handle mining requests.
Implement a route to start mining and add the block.
Cards:

Transaction class implementation.
Modify Block class for transactions.
Modify Blockchain class for transactions.
Implement mining method.
Adjust block creation for PoW.
View for mining.
Controller for mining.
Route for mining.
Sprint 3: Wallet Functionality and Transactions
Goal: Implement wallet functionality, add transactions, and validate transactions.

Tasks:

Create wallet functionality

Generate public and private keys.
Create a method to sign transactions.
Verify signed transactions.
Add transactions through the wallet

Create a view to add transactions.
Set up a controller to handle transaction creation.
Implement a route to submit transactions.
Validate transactions

Ensure transactions are valid before adding to a block.
Implement checks in the blockchain methods to validate transactions.
Cards:

Generate public/private keys.
Sign transactions.
Verify transactions.
View for adding transactions.
Controller for creating transactions.
Route for submitting transactions.
Validate transactions in blockchain.
Sprint 4: Consensus Mechanism and Synchronization
Goal: Implement consensus functionality to synchronize nodes.

Tasks:

Set up multiple node instances

Create a mechanism to run multiple instances of the blockchain.
Implement consensus algorithm

Create a method to synchronize chains.
Resolve conflicts by replacing the chain with the longest valid chain.
Synchronization functionality

Create a view to display the status of nodes.
Set up a controller to handle synchronization requests.
Implement a route to initiate synchronization.
Cards:

Set up multiple node instances.
Implement chain synchronization method.
Resolve conflicts in the chain.
View for node status.
Controller for synchronization.
Route for synchronization.
Summary
Sprint 1:

Setup and basic blockchain structure (9 cards).
Sprint 2:

Transactions and mining (8 cards).
Sprint 3:

Wallet functionality and transactions (7 cards).
Sprint 4:

Consensus mechanism and synchronization (6 cards).
Delegation
Sprint 1:

Two team members on environment setup and basic blockchain implementation.
One team member on views, controllers, and routes.
Sprint 2:

One team member on transaction and mining method implementation.
Two team members on views, controllers, and routes.
Sprint 3:

Two team members on wallet functionality and transaction validation.
One team member on views, controllers, and routes.
Sprint 4:

Two team members on consensus and synchronization methods.
One team member on views, controllers, and routes.
This plan should help you manage and delegate tasks effectively, ensuring that each sprint delivers a functional part of your crypto wallet application. Good luck with your project!
