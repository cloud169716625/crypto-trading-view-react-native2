import React from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';
// components
import OrderForm from './components/OrderForm';

function Trades() {
	return (
		<View style={styles.container}>
			<OrderForm />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#0d0e0f',
		padding: 12
	}
});

export default Trades;
