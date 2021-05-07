require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture strategy crawl mirror public gentle light army gauge'; 
let testAccounts = [
"0x009b0d918284e0785418354a5e578e12b5fb32eeff436c1903c681e01c0076b9",
"0xcd56cb88060bdf187f69fe50beeb4680b902378863b1f3f4d678e9e24fe7a810",
"0x1c0ceee64659425806f04bdf60cf21e0eb809b22404727df20325ba04d110d75",
"0x9a3d164ca1e3484e36ce236dbccd57f04193453112023726d10220cd4f09cbe4",
"0x10b200f7185b2b8aa01400d1bbb6bed9ecd2a4d39d365ba84e83f14a3862b0eb",
"0x4db8ff5e4c59d0415da0784287b93133943300d756a64789769804c957e3541e",
"0xf944e7cf05d7d81bc3f78f580fa4e559cccddb3ce15929c6f1d86d56fd2ef80d",
"0x4db2a8dd63ad1db376932a9a01e5c402de0c34bcd499edee5de6e7bdb7f8caee",
"0x1465723ddf3b10b7de53555732bf8e984c85f33238f616b47029e1721a30bc1c",
"0x0f17fd5983de0da5fe2a1b32a34e4ca4f47add1ea34e7a8ee4417fcb508a68a7"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
