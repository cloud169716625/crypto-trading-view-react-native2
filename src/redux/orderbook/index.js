import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	buyOrderList: [],
	sellOrderList: []
};

const orderbookSlice = createSlice({
	name: 'orderbook',
	initialState,
	reducers: {
		updateBuyOrder(state, action) {
			state.buyOrderList = action.payload;
		},
		updateSellOrder(state, action) {
			state.sellOrderList = action.payload;
		}
	}
});

export const { updateBuyOrder, updateSellOrder } = orderbookSlice.actions;
export default orderbookSlice.reducer;
