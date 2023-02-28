/** @format */

import * as fcl from "@onflow/fcl";
import * as t from "@onflow/types";
import "./config";

// ///////////////
// // Cadence code
// ///////////////

// Lifecycle FCL Auth functions
export const logOut = () => fcl.unauthenticate();
export const logIn = async () => await fcl.logIn();
export const signUp = () => fcl.signUp();
export const currentUser = () => fcl.currentUser();

// Morfi Transactions //

import { setupCollection as setupCollectionScript } from "./Transactions/setup_collection";
import { createMetadata as createMetadataScript } from "./Transactions/createMetadata";
import { mintNFT as mintNFTScript } from "./Transactions/mint_nft";

// // ****** Transactions Functions ****** //

// Setup Collection
export const setupCollection = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const transactionId = await fcl.mutate({
        cadence: setupCollectionScript,
        proposer: fcl.currentUser,
        payer: fcl.currentUser,
        authorizations: [fcl.currentUser],
        limit: 500,
      });
      const transaction = await fcl.tx(transactionId).onceSealed();
      console.log(transaction); // The transactions status and events after being sealed
    } catch (e) {
      console.log(e);
      reject(false);
    }
  });
};
// comment test

// Create Dream Metadata into contract

export const createMetadata = async (name, description, image, ipfsCID) => {
  return new Promise(async (resolve, reject) => {
    try {
      const transactionId = await fcl.mutate({
        cadence: createMetadataScript,
        args: (arg, t) => [
          arg(metadataId, t.UInt64),
          arg(price, t.UFix64),
          arg(_serial, t.UInt64),
        ],
        proposer: fcl.currentUser,
        payer: fcl.currentUser,
        authorizations: [fcl.currentUser],
        limit: 500,
      });
      const transaction = await fcl.tx(transactionId).onceSealed();
      console.log(transaction); // The transactions status and events after being sealed
    } catch (e) {
      console.log(e);
      reject(false);
    }
  });
};

// Mint an NFT into an account (from User perspective)

export const mintNFT = async (metadataId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const transactionId = await fcl.mutate({
        cadence: mintNFTScript,
        args: (arg, t) => [
          arg(metadataId, t.UInt64),
          arg(price, t.UFix64),
          arg(_serial, t.UInt64),
        ],
        proposer: fcl.currentUser,
        payer: fcl.currentUser,
        authorizations: [fcl.currentUser],
        limit: 500,
      });
      const transaction = await fcl.tx(transactionId).onceSealed();
      console.log(transaction); // The transactions status and events after being sealed
    } catch (e) {
      console.log(e);
      reject(false);
    }
  });
};
