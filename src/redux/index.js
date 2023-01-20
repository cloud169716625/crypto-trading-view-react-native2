import { configureStore } from '@reduxjs/toolkit';
import orderbookSlice from './orderbook';
import coinMarketSlice from './coinMarket';

export const store = configureStore({
	reducer: {
		orderbook: orderbookSlice,
		coinMarket: coinMarketSlice
	}
});
