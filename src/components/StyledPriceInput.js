import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

function StyledPriceInput(props) {
	const { placeholder, value, onChange, control, disabled, showPrice } = props;

	return (
		<View style={{ marginBottom: 10 }}>
			<View style={[ styles.container, { justifyContent: control ? 'space-between' : 'center' } ]}>
				{control && <Entypo name="minus" size={16} color="#fff" onPress={() => onChange(Number(value) - 1)} />}
				<TextInput
					style={styles.input}
					placeholder={placeholder}
					placeholderTextColor="#ffffff80"
					keyboardType="number-pad"
					value={value}
					onChange={(amount) => onChange(amount.target.value)}
					disabled={disabled ? true : false}
				/>
				{control && <Entypo name="plus" size={16} color="#fff" onPress={() => onChange(Number(value) + 1)} />}
			</View>
			{showPrice && <Text style={styles.text}>= {value} USD</Text>}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: '#1f2021',
		alignItems: 'center',
		padding: 10,
		borderRadius: 14
	},
	input: {
		border: 'none',
		textAlign: 'center',
		color: '#fff',
		outlineStyle: 'none'
	},
	text: {
		color: '#ffffff80'
	}
});

export default StyledPriceInput;
