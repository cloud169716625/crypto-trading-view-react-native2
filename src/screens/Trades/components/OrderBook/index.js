import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
// api
import { getOrderBookAPI } from '../../../../api/trade';

// style
import styles from './styles';

function OrderBook() {
	const coinpair = 'BTCUSDT';
	const [ orderbookList, setOrderookList ] = useState([]);

	useEffect(() => {
		getOrderBookAPI(coinpair).then((res) => setOrderookList(res));
	}, []);

	console.log(orderbookList);

	return (
		<View style={styles.container}>
			<View style={styles.sellContainer}>
				{orderbookList?.asks?.map((item, key) => (
					<View style={styles.itemContainer} key={key}>
						<Text style={styles.sellPrice}>{Number(item[0]).toFixed(2)}</Text>
						<Text style={styles.amountText}>{item[1]}</Text>
					</View>
				))}
			</View>
			<View style={styles.buyContainer}>
				{orderbookList?.bids?.map((item, key) => (
					<View style={styles.itemContainer} key={key}>
						<Text style={styles.buyPrice}>{Number(item[0]).toFixed(2)}</Text>
						<Text style={styles.amountText}>{item[1]}</Text>
					</View>
				))}
			</View>
		</View>
	);
}

export default OrderBook;
