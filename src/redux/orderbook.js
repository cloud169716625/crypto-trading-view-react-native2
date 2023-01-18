import { createSlice } from '@reduxjs/toolkit';

const orderbookSlice = createSlice({
	name: 'orderbook',
	initialState: {
		updateBuyOrder: [],
		updateSellOrder: []
	},
	reducers: {
		updateBuyOrder(state, action) {
			state.updateBuyOrder = action.payload;
		},
		updateSellOrder(state, action) {
			state.updateSellOrder = action.payload;
		}
	}
});

export const { updateBuyOrder, updateSellOrder } = orderbookSlice.actions;
export default orderbookSlice.reducer;
