import React from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';

// components
import OrderForm from './components/OrderForm';
import OrderBook from './components/OrderBook';

function Trades() {
	return (
		<View style={styles.root}>
			<OrderForm />
			<OrderBook />
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#0d0e0f',
		padding: 12
	}
});

export default Trades;
