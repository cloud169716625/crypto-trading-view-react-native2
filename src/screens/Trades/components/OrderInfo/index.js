import React, { useState } from 'react';
import { View, Pressable, Text } from 'react-native';
import styles from './styles';
import OpenOrders from './OpenOrders';

function OrderInfo() {
	const [ curTab, setCurTab ] = useState('openOrders');
	return (
		<View>
			<View style={styles.tabContainer}>
				<Pressable
					style={[ styles.tabBtn, { borderColor: curTab === 'openOrders' ? '#34bc75' : 'transparent' } ]}
					onPress={() => setCurTab('openOrders')}
				>
					<Text style={{ color: curTab === 'openOrders' ? '#fff' : '#4d4f58' }}>Open Orders</Text>
				</Pressable>
				<Pressable
					style={[ styles.tabBtn, { borderColor: curTab === 'orderHistory' ? '#34bc75' : 'transparent' } ]}
					onPress={() => setCurTab('orderHistory')}
				>
					<Text style={{ color: curTab === 'orderHistory' ? '#fff' : '#4d4f58' }}>Order History</Text>
				</Pressable>
				<Pressable
					style={[ styles.tabBtn, { borderColor: curTab === 'transactions' ? '#34bc75' : 'transparent' } ]}
					onPress={() => setCurTab('transactions')}
				>
					<Text style={{ color: curTab === 'transactions' ? '#fff' : '#4d4f58' }}>Transactions</Text>
				</Pressable>
			</View>
			<View>
				<OpenOrders />
			</View>
		</View>
	);
}

export default OrderInfo;
