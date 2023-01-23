import React from 'react';
import { View, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function Header() {
	return (
		<View style={styles.container}>
			<AntDesign color="#64717f" name="user" size={18} />
			<View style={[ styles.row, { width: '12%' } ]}>
				<FontAwesome color="#64717f" name="bell-o" size={18} />
				<AntDesign color="#64717f" name="search1" size={18} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 14,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	}
});

export default Header;
