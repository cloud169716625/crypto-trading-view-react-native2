import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import useHandler from '../../../api/useHandler';
import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';

export default function Signin() {
	const navigation = useNavigation();
	const { userPool } = useHandler();

	const [ userName, setUserName ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ errortext, setErrortext ] = useState('');
 
	const handleLogin = () => {
		const authenticationData = {
			Username: userName,
			Password: password
		};
		const authDetails = new AuthenticationDetails(authenticationData);
		const userData = {
			Username: userName,
			Pool: userPool
		};

		const congnitoUser = new CognitoUser(userData);

		congnitoUser.authenticateUser(authDetails, {
			onSuccess: async result => {
				const token = result?.refreshToken?.token;
				await AsyncStorage.setItem('REFRESH_TOKEN', token);

				setTimeout(() => {
					navigation.navigate('TradingViewChartScreen');
				}, 350)
			},
			onFailure: err => {
				console.log(err);
				const { message } = err;
				setErrortext(message);
			},
			newPasswordRequired: function(userAttributes, requiredAttributes) {
				delete userAttributes.email_verified;

				sessionUserAttributes = userAttributes;
			}
		});

		setUserName('');
		setPassword('');
	};

	return (
		<View style={styles.container}>
			<Text style={styles.titleText}>LET'S SIGN YOU IN</Text>
			<TextInput
				style={styles.inputStyle}
				onChangeText={(UserEmail) => setUserName(UserEmail)}
				placeholder="Username"
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
