import "@mantine/core/styles.css"
import { useMantineColorScheme, Badge } from "@mantine/core"
import { Header } from './components/Header'
import { Body } from './components/Body'
import { useMainButton } from './hooks/useMainButton'
import { useColorScheme } from './hooks/useColorScheme'
import { useTonConnectUI, THEME } from '@tonconnect/ui-react'
import { isTestnet } from './settings'


export default function App() { 
  const {colorScheme} = useColorScheme()
  const [, setOptions] = useTonConnectUI()
  const { setColorScheme } = useMantineColorScheme()
  useMainButton()
  setColorScheme(colorScheme)
  setOptions({uiPreferences:{ theme: colorScheme === 'dark' ? THEME.DARK : THEME.LIGHT }})
  return (
    <>
        { isTestnet && <Badge fullWidth variant="outline" color="red">TESTNET</Badge> }
        <Header />
        <Body />
    </>
  )
}
