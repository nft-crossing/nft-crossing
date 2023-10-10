import { useTonConnectUI, useTonAddress, SendTransactionResponse } from '@tonconnect/ui-react'
import { beginCell, Address } from 'ton-core'
import { contractProps } from '../settings'

interface Sender {
  nftTransfer(addr: string, amount: number, forwardAmount: number): Promise<SendTransactionResponse>;
}

export function useTonConnect(): { sender: Sender } {
  const [tonConnectUI] = useTonConnectUI();
  const ownerAddress = useTonAddress()

  return {
      sender: {
        nftTransfer: async (addr: string, amount: number, forwardAmount: number) => {
          const body = beginCell()
          .storeUint(0x5fcc3d14, 32)               // NFT transfer op code 0x5fcc3d14
          .storeUint(0, 64)                        // query_id:uint64
          .storeAddress(Address.parse(contractProps.address))    // new_owner:MsgAddress
          .storeAddress(Address.parse(ownerAddress))    // response_destination:MsgAddress
          .storeUint(0, 1)                         // custom_payload:(Maybe ^Cell)
          .storeCoins(forwardAmount)               // forward_amount:(VarUInteger 16)
          .storeUint(0,1)                          // forward_payload:(Either Cell ^Cell)
          .endCell();
          
          const myTransaction = {
              validUntil: Math.floor(Date.now() / 1000) + 360,
              messages: [
                  {
                      address: addr, // NFT Item address, which will be transferred
                      amount: amount.toString(), // toNano("0.09").toString(),  // for commission fees, excess will be returned
                      payload: body.toBoc().toString("base64") // payload with a NFT transfer body
                  }
              ]
          }
          return tonConnectUI.sendTransaction(myTransaction)
        }
    }
  }
}