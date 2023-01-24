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
					style={[ styles.tabBtn, curTab === 'openOrders' ? styles.activeTab : styles.inactiveTab ]}
					onPress={() => setCurTab('openOrders')}
				>
					<Text style={curTab === 'openOrders' ? styles.activeText : styles.inactiveTxt}>Open Orders</Text>
				</Pressable>
				<Pressable
					style={[ styles.tabBtn, curTab === 'orderHistory' ? styles.activeTab : styles.inactiveTab ]}
					onPress={() => setCurTab('orderHistory')}
				>
					<Text style={curTab === 'orderHistory' ? styles.activeText : styles.inactiveTxt}>
						Order History
					</Text>
				</Pressable>
				<Pressable
					style={[ styles.tabBtn, curTab === 'transactions' ? styles.activeTab : styles.inactiveTab ]}
					onPress={() => setCurTab('transactions')}
				>
					<Text style={curTab === 'transactions' ? styles.activeText : styles.inactiveTxt}>Transactions</Text>
				</Pressable>
			</View>
			<View>
				<OpenOrders />
			</View>
		</View>
	);
}

export default OrderInfo;
