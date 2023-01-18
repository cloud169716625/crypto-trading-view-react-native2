import React from 'react';
import { View, Pressable, Text } from 'react-native';

// components
import StyledDropDown from '../../../../components/StyledDropdown';
import Limit from './Limit';
import Market from './Market';
import StopLimit from './StopLimit';
import OCO from './OCO';

// constant
import { TRADE_TYPES } from '../../../../config/constant';

// styles
import styles from './styles';

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
			{tradeType === 'limit' ? (
				<Limit orderType={orderType} />
			) : tradeType === 'market' ? (
				<Market orderType={orderType} />
			) : tradeType === 'stopLimit' ? (
				<StopLimit orderType={orderType} />
			) : (
				<OCO orderType={orderType} />
			)}
		</View>
	);
}
export default OrderForm;
