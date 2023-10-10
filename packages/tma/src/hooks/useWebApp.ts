import { useEffect, useState } from 'react'
import WebApp from '@twa-dev/sdk'

export function useWebApp() {
  const [val, setVal] = useState(false)

  useEffect(() => {
    if (WebApp.initDataUnsafe.user !== undefined) {
      setVal(true)
    } 
  }, [])

  return {
    webApp: WebApp,
    isWebApp: val
  }
}