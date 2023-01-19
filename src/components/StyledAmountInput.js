import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

function StyledAmountInput(props) {
	const { placeholder, value, onChange } = props;
	const [ percent, setPercent ] = React.useState(0);

	const handleChangePercentage = (data) => {
		setPercent(data);
	};

	return (
		<View style={{ marginBottom: 10 }}>
			<View style={styles.container}>
				<Entypo name="minus" color="#fff" size={16} onPress={() => onChange(Number(value) - 1)} />
				<TextInput
					style={styles.input}
					placeholder={placeholder}
					placeholderTextColor="#ffffff80"
					keyboardType="number-pad"
					value={value}
					onChange={(amount) => onChange(amount.target.value)}
				/>
				<Entypo name="plus" color="#fff" size={16} onPress={() => onChange(Number(value) + 1)} />
			</View>
			<View style={styles.percentContainer}>
				<Text
					style={[
						styles.text,
						{
							backgroundColor:
								percent === 25 || percent === 50 || percent === 75 || percent === 100
									? '#34bc75'
									: '#1f2021'
						}
					]}
					onPress={() => handleChangePercentage(25)}
				>
					25%
				</Text>
				<Text
					style={[
						styles.text,
						{ backgroundColor: percent === 50 || percent === 75 || percent === 100 ? '#34bc75' : '#1f2021' }
					]}
					onPress={() => handleChangePercentage(50)}
				>
					50%
				</Text>
				<Text
					style={[
						styles.text,
						{ backgroundColor: percent === 75 || percent === 100 ? '#34bc75' : '#1f2021' }
					]}
					onPress={() => handleChangePercentage(75)}
				>
					75%
				</Text>
				<Text
					style={[ styles.text, { backgroundColor: percent === 100 ? '#34bc75' : '#1f2021' } ]}
					onPress={() => handleChangePercentage(100)}
				>
					100%
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#1f2021',
		alignItems: 'center',
		padding: 10,
		borderRadius: 14
	},
	percentContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 4
	},
	input: {
		border: 'none',
		textAlign: 'center',
		color: '#fff',
		outlineStyle: 'none',
		width: '80%'
	},
	text: {
		paddingTop: 4,
		paddingBottom: 4,
		width: 60,
		textAlign: 'center',
		color: '#ffffff80',
		borderRadius: 6
	}
});

export default StyledAmountInput;
