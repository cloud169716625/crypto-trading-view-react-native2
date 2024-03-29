import React from 'react';
import { View, Pressable, Text } from 'react-native';

// components
import StyledPriceInput from '../../../../components/StyledPriceInput';
import StyledAmountInput from '../../../../components/StyledAmountInput';

// styles
import styles from './styles';

function StopLimit(props) {
	const { orderType } = props;
	const [ stopPrice, setStopPrice ] = React.useState('');
	const [ limitPrice, setLimitPrice ] = React.useState('');
	const [ amount, setAmount ] = React.useState('');
	const [ totalPrice, setTotalPrice ] = React.useState('');

	React.useEffect(
		() => {
			if (stopPrice !== '' && amount !== '') {
				setTotalPrice(Number(stopPrice) * Number(amount));
			} else {
				setTotalPrice('');
			}
		},
		[ stopPrice, amount ]
	);
	return (
		<View>
			<StyledPriceInput
				value={stopPrice}
				placeholder="Stop (USDT)"
				onChange={(data) => setStopPrice(data)}
				control
			/>
			<StyledPriceInput
				value={limitPrice}
				placeholder="Limit (USDT)"
				onChange={(data) => setLimitPrice(data)}
				control
			/>
			<StyledAmountInput value={amount} placeholder="Amount (BTC)" onChange={(data) => setAmount(data)} />
			<View style={styles.volView}>
				<Text style={styles.vol}>{totalPrice === '' ? 'Total (USDT)' : totalPrice}</Text>
			</View>
			<View style={styles.availView}>
				<Text style={styles.availText}>Avail.</Text>
				<Text style={styles.availPrice}>0 USDT</Text>
			</View>
			<Pressable style={[ styles.button, orderType === 'buy' ? styles.greenBtn : styles.redBtn ]}>
				<Text style={styles.btnText}>{orderType === 'buy' ? 'Buy' : 'Sell'} BTC</Text>
			</Pressable>
		</View>
	);
}

export default StopLimit;
