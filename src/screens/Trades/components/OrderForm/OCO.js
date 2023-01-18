import React from 'react';
import { View, Pressable, Text } from 'react-native';

// components
import StyledPriceInput from '../../../../components/StyledPriceInput';
import StyledAmountInput from '../../../../components/StyledAmountInput';

// styles
import styles from './styles';

function OCO(props) {
	const { orderType } = props;
	const [ limitPrice, setLimitPrice ] = React.useState('');
	const [ stopPrice, setStopPrice ] = React.useState('');
	const [ stopLimitPrice, setStopLimitPrice ] = React.useState('');
	const [ stopLimitAmount, setStopLimitAmount ] = React.useState('');
	const [ totalPrice, setTotalPrice ] = React.useState('');

	React.useEffect(
		() => {
			if (stopPrice !== '' && stopLimitAmount !== '') {
				setTotalPrice(Number(stopPrice) * Number(stopLimitAmount));
			}
		},
		[ stopPrice, stopLimitAmount ]
	);
	return (
		<View>
			<Text style={styles.availText}>Limit</Text>
			<StyledPriceInput
				value={limitPrice}
				placeholder="Price (USDT)"
				onChange={(data) => setLimitPrice(data)}
				control
			/>
			<Text style={styles.availText}>Stop-Limit</Text>
			<StyledPriceInput
				value={stopPrice}
				placeholder="Stop (USDT)"
				onChange={(data) => setStopPrice(data)}
				control
			/>
			<StyledPriceInput
				value={stopLimitPrice}
				placeholder="Limit (USDT)"
				onChange={(data) => setStopLimitPrice(data)}
				control
			/>
			<StyledAmountInput
				value={stopLimitAmount}
				placeholder="Amount (BTC)"
				onChange={(data) => setStopLimitAmount(data)}
			/>
			<StyledPriceInput disabled value={totalPrice} placeholder="Total (USDT)" />
			<View style={styles.availView}>
				<Text style={styles.availText}>Avail.</Text>
				<Text style={styles.availPrice}>0 USDT</Text>
			</View>
			<Pressable style={[ styles.button, { backgroundColor: orderType === 'buy' ? '#34bc75' : '#d83100' } ]}>
				<Text style={styles.btnText}>{orderType === 'buy' ? 'Buy' : 'Sell'} BTC</Text>
			</Pressable>
		</View>
	);
}

export default OCO;
