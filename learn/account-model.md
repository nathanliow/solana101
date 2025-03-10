# Account Model

Everything in Solana is an account.

Accounts are like a container, they can store executable code or state data.
Ownership of an account determines who can write data to the account.

## User Accounts

User accounts are owned by users like you and me. They all have corresponding 
public keys, which are their address, and private keys, which are used for signing
transactions. User accounts have isOnCurve set to true and are on the [Ed25519 curve](https://en.wikipedia.org/wiki/EdDSA#Ed25519), which means they have an associated private key.

## Data Accounts

Data accounts are used to store data or the state of a program. An example of a
data account is a token account which stores the balance of a user's token. Such
accounts must be initialized to store data and may be closed when the data is no 
longer needed. These accounts also have an owner who is the only account that can
modify the data (transferring out tokens and decreasing the balance).

## Program Accounts

Program accounts are used to store executable code. Programs are run to mutate
the state of other accounts but not itself. Programs can be upgraded with new
executeable code based on the upgrade authority of the program account. Some 
examples include the Jupiter Aggregator and Raydium Liquidity Pool programs.

## Native Program Accounts

Native program accounts special pre-deployed programs that handle core functionality
of Solana such as staking, voting, address lookup, and upgrading programs.

## Resources

- [Helius Docs: Solana Executive Overview](https://www.helius.dev/blog/solana-executive-overview)
- [QuickNode Docs: An Introduction to the Solana Account Model | QuickNode Guides](https://www.quicknode.com/guides/solana-development/getting-started/an-introduction-to-the-solana-account-model)
- [Solana Docs: Solana Account Model](https://solana.com/docs/core/accounts#account-type)