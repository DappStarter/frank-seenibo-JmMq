require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid narrow fortune stone strong razor noble snake give kangaroo army gather'; 
let testAccounts = [
"0xb93d643e5e34d499cf23fbed8a543e6632e8d47fcaae2dcac215d1f647f7b80f",
"0x0ff077583437554fde22d4899325b222b75ec04dab633ac4e36c562a25d9e273",
"0xb64119e48b2c3820d168f4f0a5498fb4904be610933d42eadc0d3479b80d45d6",
"0xc56469c6bed1da565062e677c24faebfc52ea6de5a881e5adf7164e6b41ba63c",
"0x57b2e7356eb08b136da8ae2373e50e95b0ee9de0d48fee2601767e6642ff26d4",
"0x507345e43c8daafd9bcebd8a5f38ae104dc382c4f5284a1f268e2381b2c2f984",
"0x820b2f43de6aa01ea5ecc027e074f267c8ec10843707c4d8a0bed6a898a9cddd",
"0x1ee6cd8e6c1066077a061e399fdf77973d3a08a2355067863bd32f87f58bfba2",
"0x346b92e78549c7bb3d0bdec7c0b080fe14134cfa14b968559aca9d072daf544d",
"0x971aa5b1b7aea490d4b867ae1f670957b0c7a5faec6b3b1a0224e758da91d5b4"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

