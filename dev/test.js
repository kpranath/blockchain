const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(238, 'OINA90SDNF90N', '90ANSD9F0N9009N');

bitcoin.createNewTransaction(100, 'ALEX90FRT74UIS', 'JENN98303BBHFYR89');

bitcoin.createNewBlock(456, 'OINDFTRHH7689', 'UHR748NCGDVMMK3');

bitcoin.createNewTransaction(50, 'ALEX90FRT74UIS', 'JENN98303BBHFYR89');
bitcoin.createNewTransaction(300, 'ALEX90FRT74UIS', 'JENN98303BBHFYR89');
bitcoin.createNewTransaction(2000, 'ALEX90FRT74UIS', 'JENN98303BBHFYR89');

bitcoin.createNewBlock(852, 'KOT74HYHHNJMK', 'NGJ74GY77YEHBC7');


//console.log(bitcoin);
console.log(bitcoin.chain[2]);