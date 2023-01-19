import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// components
import OrderForm from './components/OrderForm';
import OrderBook from './components/OrderBook';
import OrderInfo from './components/OrderInfo';

function Trades() {
	return (
		<View style={styles.root}>
			<View style={styles.headerContainer}>
				<MaterialCommunityIcons name="text-short" color="#fff" size={32} />
				<Text style={styles.pair}>BTC/USDT</Text>
				<Text style={styles.percent}>+0.88%</Text>
			</View>
			<View style={styles.topContainer}>
				<View style={{ width: '60%' }}>
					<OrderForm />
				</View>
				<View style={{ width: '40%' }}>
					<OrderBook />
				</View>
			</View>
			<View>
				<OrderInfo />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		backgroundColor: '#0c0d0f',
		padding: 12,
		flex: 1,
		overflow: 'auto'
	},
	headerContainer: {
		flexDirection: 'row',
		display: 'flex',
		marginBottom: 20
	},
	topContainer: {
		justifyContent: 'space-between',
		flexDirection: 'row'
	},
	pair: {
		color: '#fff',
		fontWeight: 600,
		fontSize: 20
	},
	percent: {
		fontSize: 14,
		color: '#34bc75',
		marginTop: 3,
		marginLeft: 8
	}
});

export default Trades;
