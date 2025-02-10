/**
 * Get the price of a token in USD
 * @param mintAddress The mint address of the token
 * @returns The price of the token in USD
 *
 * @author Nathan Liow, Texas Blockchain Labs Division
 * @updated 02-09-2025
 */

import { 
    BirdeyePriceResponse,
    JupiterPriceResponse, 
    RaydiumPriceResponse 
} from "../util/interface";

/**
 * Jupiter Price API
 * Docs: https://station.jup.ag/docs/utility/price-api
 * Rate Limits: 1 request per second (Free tier)
 */
export async function getJupiterTokenPriceInUsd(mintAddress: string): Promise<number> {
    const priceResponse = await fetch(`https://api.jup.ag/price/v2?ids=${mintAddress}`);
    const priceData = await priceResponse.json() as JupiterPriceResponse;
    
    const tokenPrice = priceData.data[mintAddress].price;
    return tokenPrice;
};

/**
 * Raydium Price API
 * Docs: https://api-v3.raydium.io/docs/
 * Rate Limits: ? request per second (Free tier)
 */
export async function getRaydiumTokenPriceInUsd(mintAddress: string): Promise<number> {
    const priceResponse = await fetch(`https://api-v3.raydium.io/mint/price?mints=${mintAddress}`);
    const priceData = await priceResponse.json() as RaydiumPriceResponse;
    
    const tokenPrice = parseFloat(priceData.data[mintAddress]);
    return tokenPrice;
};

/**
 * Birdeye Price API
 * Docs: https://docs.birdeye.so/reference/get_defi-price
 * Rate Limits: 1 request per second (Free tier)
 */
export async function getBirdeyeTokenPriceInUsd(mintAddress: string): Promise<number> {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json', 
            'x-chain': 'solana', 
            'X-API-KEY': 'INSERT_YOUR_API_KEY_HERE'
        }
    };
    const priceResponse = await fetch(`https://public-api.birdeye.so/defi/price?address=${mintAddress}`, options);
    const priceData = await priceResponse.json() as BirdeyePriceResponse;
    
    const tokenPrice = priceData.data?.value ?? 0;
    return tokenPrice;
};