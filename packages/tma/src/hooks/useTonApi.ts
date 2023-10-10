import { useTonWallet } from "@tonconnect/ui-react"
import { useState, useEffect } from 'react'
import { tonApiProps, contractProps, isTestnet } from '../settings.ts'
import { Address } from 'ton-core'

// https://github.com/tonkeeper/wallet/blob/develop/packages/%40core-js/src/TonAPI/HttpClient.ts
const options = {
  method: 'get',
  headers: new Headers({
      'Authorization': 'Bearer ' + tonApiProps.clientSideKey,
      'Content-Type': 'application/json',
      'accept': 'application/json', 
  }), 
}

const serverUrl = isTestnet ? tonApiProps.serverUrl.testnet : tonApiProps.serverUrl.mainnet

export interface Nft {
  address: string;
  previewUrl: string;
  name: string;
  collectionName: string;
}

function doRequest (account: Address, method: string) {
  return fetch(serverUrl + 'accounts/' + account +'/' + method, options)
  .then((response) => {
    return response.json();
  })
}

function getNftList (account: Address) {
  return doRequest(account,'nfts')
  .then((data) => {
    const nftItems : Array<Nft> = []
    const ni = data.nft_items
    if (ni instanceof Array) {
      ni.map( n => {
        const nft : Nft = {
          address: n.address,
          previewUrl: n.previews[2].url,
          name: n.metadata.name,
          collectionName: n!.collection.name,
        }
        nftItems.push(nft)
      })
    }
    return nftItems
  })
}

export function useTonApi(): { nfts: Array<Nft>; crossing: Array<Nft>; reloadNft: () => void; } {
  const [nfts, setNfts] = useState(Array<Nft>)
  const [crossing, setCrossing] = useState(Array<Nft>)
  const wallet = useTonWallet()

  const reloadNft = () =>{
    if (wallet === null) return
    getNftList(Address.parse(wallet.account.address)).then( nftItems => { setNfts(nftItems) })
    getNftList(Address.parse(contractProps.address)).then( nftItems => { setCrossing(nftItems) })
  }

  useEffect(() => {
    if (wallet === null) return
    // console.log('[useTonApi] getNftList: ', wallet!.account.address)
    getNftList(Address.parse(wallet.account.address)).then( nftItems => { setNfts(nftItems) })
    getNftList(Address.parse(contractProps.address)).then( nftItems => { setCrossing(nftItems) })
  }, [wallet]) 
  
    
  return {
    nfts,
    crossing,
    reloadNft
  }
}