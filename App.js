import React from 'react';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import { store } from './src/redux';

import Amplify from '@aws-amplify/core';
Amplify.configure({
	aws_cognito_region: 'ap-northeast-1',
	aws_user_pools_id: 'ap-northeast-1_LllwZhAqj',
	aws_user_pools_web_client_id: '45k8a0105jeq7n5kfukonv8bsh'
});

const App = () => {
	return (
		<Provider store={store}>
			<Navigation />
		</Provider>
	);
};

export default App;
