import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Entypo from 'react-native-vector-icons/Entypo';

function StyledDropDown(props) {
	const { data, value, onChange } = props;

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
			data={data}
			// search
			maxHeight={300}
			labelField="label"
			valueField="value"
			placeholder={value}
			searchPlaceholder="Search..."
			value={value}
			onChange={(item) => {
				onChange(item.value);
			}}
			renderRightIcon={() => <Entypo style={styles.iconStyle} color="#fff" name="chevron-down" size={16} />}
			renderItem={renderItem}
		/>
	);
}

const styles = StyleSheet.create({
	dropdown: {
		height: 50,
		backgroundColor: '#1f2021',
		borderRadius: 14,
		paddingRight: 10,
		paddingLeft: 10,
		paddingHorizontal: 8,
		marginBottom: 10
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
		paddingLeft: 4,
		borderLeftColor: '#fff',
		borderLeftWidth: 1
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
