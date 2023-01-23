import { useState } from 'react';
import { CognitoUserPool } from 'amazon-cognito-identity-js';

const Pool_Data = {
	UserPoolId: 'ap-northeast-1_LllwZhAqj',
	ClientId: '45k8a0105jeq7n5kfukonv8bsh'
};

export default function useHandler() {
	const [ state, setstate ] = useState({
		loading: false,
		isAuthenticated: false
	});

	const { loading, isAuthenticated } = state;

	const userPool = new CognitoUserPool(Pool_Data);

	const getAuthenticatedUser = () => {
		return userPool.getCurrentUser();
	};

	return {
		loading,
		isAuthenticated,
		userPool,
		getAuthenticatedUser
	};
}
