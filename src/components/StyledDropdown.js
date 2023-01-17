import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Entypo from 'react-native-vector-icons/Entypo';
import { TRADE_TYPES } from '../config/constant';

function StyledDropDown() {
	const [ value, setValue ] = React.useState('');

	const renderItem = (item) => {
		return (
			<View style={styles.item}>
				<Text style={styles.textItem}>{item.label}</Text>
			</View>
		);
	};

	return (
		<Dropdown
			style={styles.dropdown}
			placeholderStyle={styles.placeholderStyle}
			selectedTextStyle={styles.selectedTextStyle}
			iconStyle={styles.iconStyle}
			data={TRADE_TYPES}
			// search
			maxHeight={300}
			labelField="label"
			valueField="value"
			placeholder="Select item"
			searchPlaceholder="Search..."
			value={value}
			onChange={(item) => {
				setValue(item.value);
			}}
			renderRightIcon={() => <Entypo color="#fff" name="chevron-down" size={20} />}
			renderItem={renderItem}
		/>
	);
}

const styles = StyleSheet.create({
	dropdown: {
		height: 50,
		backgroundColor: '#1f2021',
		borderColor: 'gray',
		borderWidth: 0.5,
		borderRadius: 14,
		paddingRight: 10,
		paddingLeft: 10,
		// shadowColor: '#000',
		paddingHorizontal: 8
	},
	icon: {
		marginRight: 5
	},
	placeholderStyle: {
		fontSize: 16,
		color: '#fff',
		textAlign: 'center'
	},
	selectedTextStyle: {
		fontSize: 16,
		color: '#fff',
		textAlign: 'center'
	},
	iconStyle: {
		width: 20,
		height: 20
	},
	item: {
		backgroundColor: '#1f2021',
		width: '100%',
		padding: 10
	},
	textItem: {
		color: '#fff'
	}
});

export default StyledDropDown;
