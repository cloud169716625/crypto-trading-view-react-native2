import React from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';

// components
import StyledPriceInput from '../../../../components/StyledPriceInput';
import StyledAmountInput from '../../../../components/StyledAmountInput';

function Limit(props) {
	const { orderType } = props;
	const [ price, setPrice ] = React.useState('');
	const [ amount, setAmount ] = React.useState('');
	const [ vol, setVol ] = React.useState('');

	const handlePrice = (data) => {
		setPrice(data);
	};

	const handleAmount = (data) => {
		setAmount(data);
	};

	React.useEffect(
		() => {
			if (price !== '' && amount !== '') {
				setVol(Number(price) * Number(amount));
			}
		},
		[ price, amount ]
	);
	return (
		<View>
			<StyledPriceInput value={price} placeholder="Price (USDT)" onChange={handlePrice} control />
			<StyledAmountInput value={amount} placeholder="Amount (BTC)" onChange={handleAmount} />
			<StyledPriceInput disabled value={vol} placeholder="Vol (USDT)" />
			<View style={styles.availView}>
				<Text style={styles.availText}>Avail.</Text>
				<Text style={styles.availPrice}>0 USDT</Text>
			</View>
			<Pressable style={[ styles.button, { backgroundColor: orderType === 'buy' ? '#34bc75' : '#d83100' } ]}>
				<Text style={styles.btnText}>Buy BTC</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	button: {
		borderRadius: 14,
		textAlign: 'center',
		padding: 12
	},
	btnText: {
		color: '#fff'
	},
	availView: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10
	},
	availText: {
		color: '#ffffff80'
	},
	availPrice: {
		color: '#fff'
	}
});

export default Limit;
