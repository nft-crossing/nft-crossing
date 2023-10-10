import { Blockchain, SandboxContract } from '@ton-community/sandbox';
import { Cell, toNano } from 'ton-core';
import { NftCrossing } from '../wrappers/NftCrossing';
import '@ton-community/test-utils';
import { compile } from '@ton-community/blueprint';

describe('NftCrossing', () => {
    let code: Cell;

    beforeAll(async () => {
        code = await compile('NftCrossing');
    });

    let blockchain: Blockchain;
    let nftCrossing: SandboxContract<NftCrossing>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        nftCrossing = blockchain.openContract(NftCrossing.createFromConfig({}, code));

        const deployer = await blockchain.treasury('deployer');

        const deployResult = await nftCrossing.sendDeploy(deployer.getSender(), toNano('0.05'));

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: nftCrossing.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and nftCrossing are ready to use
    });
});
