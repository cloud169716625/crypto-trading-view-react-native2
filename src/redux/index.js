import { configureStore } from '@reduxjs/toolkit';
import orderbookSlice from './orderbook';

export const store = configureStore({
	reducer: {
		orderbook: orderbookSlice
	}
});
