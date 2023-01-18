import React from 'react';
import { View, Pressable, Text } from 'react-native';

// components
import StyledAmountInput from '../../../../components/StyledAmountInput';

// styles
import styles from './styles';

function Market(props) {
	const { orderType } = props;
	const [ amount, setAmount ] = React.useState('');
	const [ isAmountSelected, setIsAmountSelected ] = React.useState(true);

	const handleAmount = (data) => {
		setAmount(data);
	};

	return (
		<View>
			<Pressable style={styles.marketPriceBtn}>
				<Text style={{ color: '#ffffff80' }}>Market Price</Text>
			</Pressable>
			<View style={styles.availView}>
				<Pressable onPress={() => setIsAmountSelected(true)} style={styles.amountBtn}>
					<Text style={{ color: isAmountSelected ? '#fff' : '#ffffff80' }}>Amount</Text>
				</Pressable>
				<Pressable onPress={() => setIsAmountSelected(false)} style={styles.amountBtn}>
					<Text style={{ color: isAmountSelected ? '#ffffff80' : '#fff' }}>Total</Text>
				</Pressable>
			</View>
			<StyledAmountInput value={amount} placeholder="(USDT)" onChange={handleAmount} />
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
export default Market;
