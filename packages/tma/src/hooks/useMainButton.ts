import { useTonWallet, useTonConnectUI } from "@tonconnect/ui-react"
import { useEffect } from 'react'
import WebApp from '@twa-dev/sdk'

export function useMainButton() {
  const wallet = useTonWallet()
  const [tonConnectUi] = useTonConnectUI()

  useEffect(() => {
    console.log('[useMainButton] wallet: ', wallet)
    if (wallet === null) {
      WebApp.MainButton.setText('Connect wallet')
      WebApp.MainButton.onClick(() => tonConnectUi.connectWallet())
      WebApp.MainButton.show()
    } else {
      WebApp.MainButton.hide()
    }
  }, [wallet, tonConnectUi])
}