const sha256 = require('sha256');

//Blockchain constructor
function Blockchain() {
    this.chain = [];
    this.pendingTransactions = [];  
}


//creatting a new block function
Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.pendingTransactions,
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash
    };

    this.pendingTransactions = [];
    this.chain.push(newBlock);

    return newBlock;
}

//getting the last block in the blockchain
Blockchain.prototype.getLastBlock = function() {
    return this.chain[this.chain.length - 1];
}


//Create new Transaction 
Blockchain.prototype.createNewTransaction = function(amount, sender, recipient){
    const newTransaction = {
        amount: amount,
        sender: sender,
        recipient: recipient
    };

    this.pendingTransactions.push(newTransaction)

    return this.getLastBlock()['index'] + 1; 
}


Blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nonce) {
 // ...return '90JNKBISHFF38U3RWFEWFUR'
    const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
    const hash = sha256(dataAsString);
    return hash;
}


module.exports = Blockchain;