#!/usr/bin/env node

process.on('unhandledRejection', console.error.bind(console))

const { inputFile, gasPriceGwei, rpcUrl, dontSendTx, tokenName } = require('yargs')
  .usage('Usage: $0 --input-file [file] --gas-price-gwei [gwei] --rpc-url [url] --dont-send-tx [bool] --token-name [string]')
  .demandOption(['inputFile', 'gasPriceGwei', 'rpcUrl', 'tokenName'])
  .boolean('dontSendTx')
  .argv;

const deployer = require("./deployerImplementation.js");
deployer.deploy(inputFile, gasPriceGwei, rpcUrl, dontSendTx, tokenName);
 