import { Address, toNano } from 'ton-core';
import { NftCrossing } from '../wrappers/NftCrossing';
import { compile, NetworkProvider } from '@ton-community/blueprint';

export async function run(provider: NetworkProvider) {
    const nftCrossing = provider.open(NftCrossing.createFromConfig(
        {
            owner: Address.parse('kQBDxwiPuLOAdhz8We7O8G6RTWYrYK7L9DlG-wXRYyy7_pwv')
        }
        , await compile('NftCrossing')));

    await nftCrossing.sendDeploy(provider.sender(), toNano('0.05'));

    await provider.waitForDeploy(nftCrossing.address);

    // run methods on `nftCrossing`
    // console.log('ID', await nftCrossing.getID());
}
