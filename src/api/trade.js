import axios from 'axios';
import { RESTFUL_API_ENDPOINT } from '../config/config';

export const getCoinInfoAPI = async (data) => {
	try {
		const response = await axios.get(`${RESTFUL_API_ENDPOINT}/ticker/24hr?symbol=${data}`);
		return response.data;
	} catch (err) {
		console.log(err);
	}
};

export const getCoinPriceAPI = async (data) => {
	try {
		const response = await axios.get(`${RESTFUL_API_ENDPOINT}/ticker/price?symbol=${data}`);
		return response.data;
	} catch (err) {
		console.log(err);
	}
};
