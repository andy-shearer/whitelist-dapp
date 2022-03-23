export const WHITELIST_CONTRACT_ADDRESS = "0x1bda1c2fc24e34687cec1ada4021f5dd4371a31f";
export const abi = [
                       {
                         "inputs": [
                           {
                             "internalType": "uint8",
                             "name": "_maxWhitelistedAddresses",
                             "type": "uint8"
                           }
                         ],
                         "stateMutability": "nonpayable",
                         "type": "constructor"
                       },
                       {
                         "inputs": [],
                         "name": "addAddressToWhitelist",
                         "outputs": [],
                         "stateMutability": "nonpayable",
                         "type": "function"
                       },
                       {
                         "inputs": [],
                         "name": "maxWhitelistedAddresses",
                         "outputs": [
                           {
                             "internalType": "uint8",
                             "name": "",
                             "type": "uint8"
                           }
                         ],
                         "stateMutability": "view",
                         "type": "function"
                       },
                       {
                         "inputs": [],
                         "name": "numWhitelistedAddresses",
                         "outputs": [
                           {
                             "internalType": "uint8",
                             "name": "",
                             "type": "uint8"
                           }
                         ],
                         "stateMutability": "view",
                         "type": "function"
                       },
                       {
                         "inputs": [
                           {
                             "internalType": "address",
                             "name": "",
                             "type": "address"
                           }
                         ],
                         "name": "whitelistedAddresses",
                         "outputs": [
                           {
                             "internalType": "bool",
                             "name": "",
                             "type": "bool"
                           }
                         ],
                         "stateMutability": "view",
                         "type": "function"
                       }
                     ];
