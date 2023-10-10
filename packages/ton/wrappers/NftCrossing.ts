import { Address, beginCell, Cell, Contract, contractAddress, ContractProvider, Sender, SendMode } from 'ton-core';

export type NftCrossingConfig = {
    owner: Address;
};

export function nftCrossingConfigToCell(config: NftCrossingConfig): Cell {
    return beginCell().storeAddress(config.owner).endCell();
}

export class NftCrossing implements Contract {
    constructor(readonly address: Address, readonly init?: { code: Cell; data: Cell }) { }

    static createFromAddress(address: Address) {
        return new NftCrossing(address);
    }

    static createFromConfig(config: NftCrossingConfig, code: Cell, workchain = 0) {
        const data = nftCrossingConfigToCell(config);
        const init = { code, data };
        return new NftCrossing(contractAddress(workchain, init), init);
    }

    async sendDeploy(provider: ContractProvider, via: Sender, value: bigint) {
        await provider.internal(via, {
            value,
            sendMode: SendMode.PAY_GAS_SEPARATELY,
            body: beginCell().endCell(),
        });
    }
}
