import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native'; 
import { Auth } from 'aws-amplify'; 

export default function Signin() {
	const navigation = useNavigation(); 

	const [ userName, setUserName ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ errortext, setErrortext ] = useState('');

	const handleLogin = async () => {
		try {
			await Auth.signIn(userName, password).then(async (res) => {
				if(res?.Session) {  
					navigation.navigate('TradingViewChartScreen');	 
				}
			});
		} catch (error) {
			setErrortext(error)
			console.log('Error!!', error.message, 'danger');
		} 

		setUserName('');
		setPassword('');
	};

	return (
		<View style={styles.container}>
			<Text style={styles.titleText}>LET'S SIGN YOU IN</Text>
			<TextInput
				style={styles.inputStyle}
				onChangeText={(UserEmail) => setUserName(UserEmail)}
				placeholder="Email"
				placeholderTextColor="#8b9cb5"
				autoCapitalize="none"
				keyboardType="default"
				returnKeyType="next"
				blurOnSubmit={false}
			/>
			<TextInput
				style={styles.inputStyle}
				onChangeText={(UserPassword) => setPassword(UserPassword)}
				placeholder="Password" //12345
				placeholderTextColor="#8b9cb5"
				keyboardType="default"
				blurOnSubmit={false}
				returnKeyType="next"
				secureTextEntry={true}
			/>
			{errortext && <Text style={{ color: 'red', padding: 20 }}>{errortext}</Text>}
			<TouchableOpacity style={styles.normalButton} onPress={handleLogin}>
				<Text style={styles.buttonText}>Sign In</Text>
			</TouchableOpacity>
			<Text style={styles.whiteText}>
				Don't Have an account? <Text style={styles.signupText}>Sign Up</Text>
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#0a0b0e'
	},
	titleText: {
		fontSize: 28,
		textAlign: 'center',
		color: '#fff',
		marginTop: 20,
		marginBottom: 50
	},

	normalButton: {
		borderRadius: 6,
		tintColor: '#2ebd76',
		backgroundColor: '#2ebd76',
		marginTop: 34,
		padding: 16,
		width: '86%'
	},
	buttonText: {
		textAlign: 'center',
		color: 'white',
		fontSize: 14
	},
	inputStyle: {
		color: '#fff',
		borderWidth: 1,
		borderRadius: 12,
		marginTop: 12,
		padding: 10,
		fontSize: 16,
		width: '86%',
		borderColor: '#1a3d2c',
		outlineColor: '#2ebd76'
	},
	signupText: {
		color: '#2fa969'
	},
	whiteText: {
		color: '#fff',
		marginTop: 50
	}
});
