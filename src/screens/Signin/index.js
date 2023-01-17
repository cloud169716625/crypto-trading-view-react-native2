import React, { useState, createRef } from 'react';
import { View, TextInput, StyleSheet, Keyboard, TouchableOpacity, Text, Alert } from 'react-native';

export default function SignIn({ navigation }) {
	const [ userEmail, setUserEmail ] = useState('');
	const [ userPassword, setUserPassword ] = useState('');
	const [ errortext, setErrortext ] = useState('');
	const passwordInputRef = createRef();
	const [ borderColor, setBorderColor ] = useState('#1a3d2c');

	const handleLogin = () => {
		setErrortext('');
		if (!userEmail) {
			Alert.alert('Please input your email');
			return;
		}
		if (!userPassword) {
			Alert.alert('Please input your password');
			return;
		}
		navigation.replace('Main');
	};

	const onFocus = () => {
		setBorderColor('#2ebd76');
	};

	return (
		<View style={styles.container}>
			<Text style={styles.titleText}>LET'S SIGN YOU IN</Text>
			<TextInput
				style={styles.inputStyle}
				onChangeText={(UserEmail) => setUserEmail(UserEmail)}
				placeholder="Email" //dummy@abc.com
				placeholderTextColor="#8b9cb5"
				autoCapitalize="none"
				keyboardType="email-address"
				returnKeyType="next"
				// onSubmitEditing={() => passwordInputRef.current && passwordInputRef?.current?.focus()}
				blurOnSubmit={false}
				onFocus={() => onFocus()}
			/>
			<TextInput
				style={styles.inputStyle}
				onChangeText={(UserPassword) => setUserPassword(UserPassword)}
				placeholder="Password" //12345
				placeholderTextColor="#8b9cb5"
				keyboardType="default"
				// ref={passwordInputRef}
				onSubmitEditing={Keyboard.dismiss}
				blurOnSubmit={false}
				secureTextEntry={true}
				returnKeyType="next"
			/>
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
		fontWeight: 'bold',
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
		fontSize: 14,
		fontWeight: '500'
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
