// Jupiter Interfaces
export interface JupiterPriceResponse {
    data: {
        [key: string]: {
            id: string;
            type: string;
            price: number;
        };
    };
    timeTaken: number;
}

// Raydium Interfaces
export interface RaydiumPriceResponse {
    id: string;
    success: boolean;
    data: {
        [key: string]: string;
    };
}

// Birdeye Interfaces
export interface BirdeyePriceResponse {
    success: boolean;
    data: {
        value: number;
        updateUnixTime: number;
        updateHumanTime: string;
        // liquidity: number; // can be included if needed
    } | null;
}