import React from 'react';
import { View, Text } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

function Header() {
	return (
		<View style={styles.headerContainer}>
			<View style={[ styles.row, { width: '36%', alignItems: 'center' } ]}>
				<Entypo color="#64717f" name="chevron-left" size={18} />
				<AntDesign color="#64717f" name="menu-fold" size={18} />
				<Text style={styles.pair}>BTC/USDT</Text>
			</View>
			<View style={[ styles.row, { width: '20%', alignItems: 'center' } ]}>
				<FontAwesome color="#64717f" name="bell-o" size={18} />
				<AntDesign color="#64717f" name="staro" size={18} />
				<MaterialCommunityIcons color="#64717f" name="share-outline" size={22} />
			</View>
		</View>
	);
}

export default Header;
