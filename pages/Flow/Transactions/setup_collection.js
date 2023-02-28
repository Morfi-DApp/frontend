/** @format */

export const setupCollection = `
import Morfi from 0x54879e206dce6b91
import NonFungibleToken from 0x631e88ae7f1d7c20
import MetadataViews from 0x631e88ae7f1d7c20

transaction() {
  prepare(signer: AuthAccount) {
    if signer.borrow<&Morfi.Collection>(from: Morfi.CollectionStoragePath) == nil {
      signer.save(<- Morfi.createEmptyCollection(), to: Morfi.CollectionStoragePath)
      signer.link<&Morfi.Collection{NonFungibleToken.CollectionPublic, NonFungibleToken.Receiver, MetadataViews.ResolverCollection}>(Morfi.CollectionPublicPath, target: Morfi.CollectionStoragePath)
    }
  }
}
  `;
