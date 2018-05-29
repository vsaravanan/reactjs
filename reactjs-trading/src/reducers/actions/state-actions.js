export const UPDATE_STOCKID = 'UPDATE_STOCKID';

export function updateStockId(stockId) {
    return {
        type: UPDATE_STOCKID,
        payload: {
            stockId
        }
    }
}