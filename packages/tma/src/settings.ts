export const isTestnet = true

export const tonConnectProps = {
    manifestUrl: 'https://nft-crossing.github.io/tonconnect-manifest.json',
    twaReturnUrl: 'https://t.me/Nft_crossing_bot/App' as '`${string}://${string}`'
}

export const tonApiProps = {
    clientSideKey: 'AEOWW47RRNQWVMYAAAAKSUU76L4CUEXEOSYFYUH47LAWQI7ZHGPU2FQUWZSVN4QSZOBR5AI',
    serverUrl: {
        mainnet: 'https://tonapi.io/v2/',
        testnet: 'https://testnet.tonapi.io/v2/',
    }
}

export const contractProps = {
    address: 'EQBi6rlCq2o51T9v2GHPwWDa4PRizRCyB6BfakzU-BP9CVk_',
    donate : {amount: 70000000, forward: 10000000 },
    swap : {amount: 250000000, forward: 51000000 }
}