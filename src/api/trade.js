import axios from 'axios';
import { RESTFUL_API_ENDPOINT } from '../config/config';

export const getOrderBookAPI = async (pair) => {
	try {
		const response = await axios.get(`${RESTFUL_API_ENDPOINT}/depth?limit=6&symbol=${pair}`);
		return response.data;
	} catch (error) {
		console.log('get order book data error', error);
	}
};
