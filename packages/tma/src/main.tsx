import React from "react"
import WebApp from '@twa-dev/sdk'
import ReactDOM from "react-dom/client"
import { MantineProvider } from "@mantine/core"
import App from "./App.tsx"
import { TonConnectUIProvider, THEME } from '@tonconnect/ui-react'
import { tonConnectProps } from './settings.ts'

WebApp.ready()
WebApp.expand()

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  
  <React.StrictMode>
    <MantineProvider>
      <TonConnectUIProvider 
        manifestUrl={ tonConnectProps.manifestUrl }
        uiPreferences={{ theme: THEME.DARK }}
        actionsConfiguration={{
          twaReturnUrl: tonConnectProps.twaReturnUrl
        }}
      >   
          <App />
      </TonConnectUIProvider>
      </MantineProvider>
  </React.StrictMode>
)