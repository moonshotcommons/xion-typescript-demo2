import { StargateClient } from '@cosmjs/stargate';

// Change this to your node endpoint
const rpcEndpoint = 'https://rpc.xion-testnet-1.burnt.com:443';

// Address to query
const bobAddress = 'xion1j0se0le8vftzmvqmfddf9qcamz3445r98p52th060jdhjyrl3v2qn4scdq';

async function main() {
    const client = await StargateClient.connect(rpcEndpoint);

    const balance = await client.getAllBalances(bobAddress);
    console.log("Account Balance:", balance);
}

main().catch(console.error);