import React from 'react';
import { View, ToastAndroid, Text } from 'react-native';
import { WebView } from 'react-native-webview';

const TradingViewChart = () => {
	return (
		<View style={{ backgroundColor: 'red' }}>
			{/* <WebView
				style={{ flex: 1 }}
				source={{
					uri: './C'
				}}
				allowFileAccessFromFileURLs={true}
				domStorageEnabled={true}
				allowFileAccess={true}
				allowUniversalAccessFromFileURLs={true}
				originWhitelist={[ '*' ]}
				onShouldStartLoadWithRequest={() => false}
				// injectedJavaScript={this.jsToInject}
				onMessage={(event) => {
					const data = JSON.parse(event.nativeEvent.data);
					if (data.type == 'onIntervalChanged') {
						ToastAndroid.show('Interval = ' + data.interval, ToastAndroid.SHORT);
					}
				}}
			/> */}
		</View>
	);
};

export default TradingViewChart;
