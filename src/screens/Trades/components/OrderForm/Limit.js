import React from 'react';
import { View, Pressable, Text } from 'react-native';

// components
import StyledPriceInput from '../../../../components/StyledPriceInput';
import StyledAmountInput from '../../../../components/StyledAmountInput';

// styles
import styles from './styles';

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
			} else {
				setVol('');
			}
		},
		[ price, amount ]
	);
	return (
		<View>
			<StyledPriceInput value={price} placeholder="Price (USDT)" onChange={handlePrice} control showPrice />
			<StyledAmountInput value={amount} placeholder="Amount (BTC)" onChange={handleAmount} />
			<View style={styles.volView}>
				<Text style={styles.vol}>{vol === '' ? 'Vol (USDT)' : vol}</Text>
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

export default Limit;
