import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
// components
import OrderForm from './components/OrderForm';
import OrderBook from './components/OrderBook';
import OrderInfo from './components/OrderInfo';
import Header from '../../components/Header';

function Trades() {
	return (
		<View style={styles.root}>
			<Header />
			<View style={styles.headerContainer}>
				<MaterialCommunityIcons name="text-short" color="#fff" size={32} />
				<Text style={styles.pair}>BTC/USDT</Text>
				<Text style={styles.percent}>+0.88%</Text>
			</View>
			<ScrollView>
				<View style={{ flex: 1 }}>
					<View style={styles.topContainer}>
						<View style={{ width: '60%' }}>
							<OrderForm />
						</View>
						<View style={{ width: '40%' }}>
							<OrderBook />
						</View>
					</View>
				</View>
				<View style={{ flex: 1 }}>
					<OrderInfo />
				</View>
			</ScrollView>
		</View>
	);
}

export default Trades;
