import { useEffect, useState } from 'react'
import WebApp from '@twa-dev/sdk'

type ColorScheme = 'dark' | 'light';

export function useColorScheme() : { colorScheme: ColorScheme } {
  const [scheme, setScheme] = useState<ColorScheme>('dark')

  useEffect(() => {
    if (WebApp.initDataUnsafe.user !== undefined) {
      setScheme(WebApp.colorScheme)
    } 
  }, [])

  return {
    colorScheme: scheme
  }
}