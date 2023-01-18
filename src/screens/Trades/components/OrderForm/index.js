import React from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';
// components
import StyledDropDown from '../../../../components/StyledDropdown';
import Limit from './Limit';
import Market from './Market';
import { TRADE_TYPES } from '../../../../config/constant';

function OrderForm() {
	const [ orderType, setOrderType ] = React.useState('buy');
	const [ tradeType, setTradeType ] = React.useState(TRADE_TYPES[0].value);
	const handleOrderType = (data) => {
		setOrderType(data);
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
					style={[ styles.sellBtn, { backgroundColor: orderType === 'buy' ? '#1f2021' : '#d83100' } ]}
					onPress={() => handleOrderType('sell')}
				>
					<Text style={styles.btnText}>Sell</Text>
				</Pressable>
			</View>
			<StyledDropDown data={TRADE_TYPES} value={tradeType} onChange={(data) => setTradeType(data)} />
			{tradeType === 'limit' ? <Limit orderType={orderType} /> : <Market orderType={orderType} />}
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

export default OrderForm;
