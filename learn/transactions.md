# Transactions

Transactions are atomic and mutate the state of the blockchain.

There are 4 parts to a transaction:
- Header: indicate accounts that need to sign transaction
- List of account addresses: all accounts that will be read from and written to
- Recent blockhash: prevents duplicate/stale transactions
- Instructions: data to be executed

Each instruction includes the accounts involved, the program to execute, and the data/operation to be executed. Instructions are limited to 1,232 bytes so there's a limit to the number of accounts that can
be referenced. 

Two fees are required for a transaction to be processed: a base fee and a priority fee. The base fee is
fixed while priority fees are optional but necessary for obtaining blockspace to land the transaction.

Each transaction uses computational units (CUs) which measures its computational cost. A more complex
transaction will cost more CUs which will incur more (priority) fees.

Transactions have three different statuses:
1. Processed: transaction is in a block
2. Confirmed: transaction's block has been voted on by 2/3rds supermajority
3. Finalized: atleast 31 blocks have been built on top of the transaction's block

## Transaction Lifecycle ##

There are 6 stages to a transaction:
1. User
2. Gulfstream
3. Block Buidling
4. Consensus
5. Block Verification
6. Turbine

Learn more about the lifecycle in the resources section.

## User and Application Transaction Flow ##
1. User connects wallet (Phantom) to application (Jupiter) and interacts (clicks swap)
2. Application builds transaction (swaps, token mints, etc.)
3. Transaction sent to wallet to sign/confirm
4. Transaction + signature of user sent to application
5. Application forwards transaction + signature to Remote Procedure Call (RPC) to execute on-chain transaction

## Resources

- [Helius Docs: Solana Executive Overview](https://www.helius.dev/blog/solana-executive-overview)