import { createSlice } from '@reduxjs/toolkit';
import { getAllPairs, getDayPrices } from './actions';

const initialState = {
	coinPairList: [],
	dayPriceList: []
};

const coinMarketSlice = createSlice({
	name: 'coinMarket',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getAllPairs.fulfilled.type, (state, action) => {
				state.coinPairList = action.payload;
			})
			.addCase(getDayPrices.fulfilled.type, (state, action) => {
				state.dayPriceList = action.payload;
			});
	}
});

export { getAllPairs, getDayPrices };
export default coinMarketSlice.reducer;
