import React from 'react';
import { StyleSheet, View, Pressable, Text, TextInput } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
// components
import StyledDropDown from '../../components/StyledDropdown';
import StyledAmountInput from '../../components/StyledAmountInput';

function Trades() {
	const [ orderType, setOrderType ] = React.useState('buy');

	const handleOrderType = (data) => {
		setOrderType(data);
	};

	const handlePrice = (data) => {
		console.log('price', data);
	};

	const handleAmount = (data) => {
		console.log('amount', data);
	};

	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<Pressable
					title="Buy"
					style={[ styles.buyBtn, { backgroundColor: orderType === 'buy' ? '#34bc75' : '#1f2021' } ]}
					onPress={() => handleOrderType('buy')}
				>
					<Text style={styles.btnText}>Buy</Text>
				</Pressable>
				<Pressable
					style={[ styles.sellBtn, { backgroundColor: orderType === 'buy' ? '#1f2021' : '#34bc75' } ]}
					onPress={() => handleOrderType('sell')}
				>
					<Text style={styles.btnText}>Sell</Text>
				</Pressable>
			</View>
			<StyledDropDown />
			<StyledAmountInput placeholder="Price (USDT)" onChange={handlePrice} />
			<StyledAmountInput placeholder="Amount (BTC)" onChange={handleAmount} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginHorizontal: 16
	},
	buyBtn: {
		borderTopLeftRadius: 40,
		borderTopRightRadius: 0,
		borderBottomLeftRadius: 40,
		borderBottomRightRadius: 40,
		textAlign: 'center',
		padding: 12,
		width: '49%'
	},
	sellBtn: {
		borderTopLeftRadius: 40,
		borderTopRightRadius: 40,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 40,
		textAlign: 'center',
		padding: 12,
		width: '49%'
	},
	btnText: {
		color: '#fff'
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 12
	}
});

export default Trades;
