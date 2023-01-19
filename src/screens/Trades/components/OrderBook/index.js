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
			<View style={styles.itemContainer}>
				<Text style={styles.amountText}>Price</Text>
				<Text style={styles.amountText}>Total</Text>
			</View>
			<View style={[styles.itemContainer, styles.mb12]}>
				<Text style={styles.amountText}>{`(USDT)`}</Text>
				<Text style={styles.amountText}>{`(BTC)`}</Text>
			</View>
			<View style={[styles.sellContainer, styles.mb12]}>
				{orderbookList?.asks?.map((item, key) => (
					<View style={styles.itemContainer} key={key}>
						<Text style={styles.sellPrice}>{Number(item[0]).toFixed(2)}</Text>
						<Text style={styles.amountText}>{Number(item[1]).toFixed(3)}</Text>
					</View>
				))}
			</View>
			<View style={styles.mb12}>
				<Text style={[styles.buyPrice, {fontSize: 16}]}>16741.6</Text>
				<Text style={styles.amountText}>16,734.9 USD</Text>
			</View>
			<View style={styles.buyContainer}>
				{orderbookList?.bids?.map((item, key) => (
					<View style={styles.itemContainer} key={key}>
						<Text style={styles.buyPrice}>{Number(item[0]).toFixed(2)}</Text>
						<Text style={styles.amountText}>{Number(item[1]).toFixed(3)}</Text>
					</View>
				))}
			</View>
		</View>
	);
}

export default OrderBook;
