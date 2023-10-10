import { Hero } from './Hero'
import { NftsList } from './NftsList'
import { useTonApi } from '../hooks/useTonApi.ts'
import { useTonWallet } from "@tonconnect/ui-react"
import { Button } from '@mantine/core'
import { useState, useEffect } from 'react'

const VIEW = {
  MY: 0,
  CROSSING: 1
}

export function Body() {
  const wallet = useTonWallet()
  const { nfts, crossing, reloadNft } = useTonApi()
  const [viewMode, setViewMode] = useState(VIEW.MY)
  const [nftList, setNftList] = useState(nfts)

  useEffect(() => {
    if (viewMode === VIEW.MY) setNftList(nfts)
    else setNftList(crossing)
  }, [nfts, crossing, viewMode]) 
  
  return (
    <div>   
      {wallet ? (
          <>
            <Button variant="outline" onClick={() => setViewMode(VIEW.MY)}>
              My NFT
            </Button>
            <Button variant="outline" onClick={() => setViewMode(VIEW.CROSSING)}>
              Crossing
            </Button>
            <Button variant="outline" onClick={() => reloadNft()}>
              Reload
            </Button>
            <NftsList nfts={nftList} buttons={viewMode === VIEW.MY}/>
          </>
      ) : (
          <Hero />
      )}
  </div>
  )
}