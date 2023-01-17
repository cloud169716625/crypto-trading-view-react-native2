import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

function StyledAmountInput(props) {
	const { placeholder, onChange } = props;

	return (
		<View style={styles.container}>
			<Entypo name="minus" onPress={() => onChange(Number(amount) - 1)} />
			<TextInput style={styles.input} placeholder={placeholder} onChange={(amount) => onChange(amount)} />
			<Entypo name="plus" onPress={() => onChange(Number(amount) + 1)} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#1f2021'
	},
	input: {
		border: 'none',
		outline: 'none',
		textAlign: 'center',
		color: '#fff'
	}
});

export default StyledAmountInput;
