import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { RESTFUL_API_ENDPOINT } from '../../config/config';

export const getAllPairs = createAsyncThunk('get/all/coinpair', async () => {
	try {
		const response = await axios.get(`${RESTFUL_API_ENDPOINT}/exchangeInfo`);
		return response.data.symbols;
	} catch (err) {
		console.log(err);
	}
});

export const getDayPrices = createAsyncThunk('get/all/dayprices', async () => {
	try {
		const response = await axios.get(`${RESTFUL_API_ENDPOINT}/ticker/24hr`);
		return response.data;
	} catch (err) {
		console.log(err);
	}
});
