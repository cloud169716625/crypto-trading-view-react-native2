import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
// websocket
import useWSClientHandle from '../api/useWSClientHandle';
import { wsClient } from '../config/config';

// screens
import SignIn from '../screens/Auth/Signin';
import Trades from '../screens/Trades';
import CoinMarket from '../screens/CoinMarket';
import TradingViewChart from '../screens/TradingViewChart';

export default function Navigation() {
	const { handleMessage, handleError, handleOpen, handleClose } = useWSClientHandle();

	React.useEffect(() => {
		wsClient.onopen = handleOpen;
		wsClient.onerror = handleError;
		wsClient.onmessage = handleMessage;
		wsClient.onclose = handleClose;
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const Stack = createNativeStackNavigator();
	const Tab = createBottomTabNavigator();

	const Auth = () => {
		return (
			<Stack.Navigator initialRouteName="SignInScreen">
				<Stack.Screen name="SignInScreen" component={SignIn} options={{ headerShown: false }} />
			</Stack.Navigator>
		);
	};

	const Main = () => {
		return (
			<Stack.Navigator initialRouteName="Trades">
				<Stack.Screen name="Trades" component={Trades} options={{ headerShown: false }} />
				<Stack.Screen name="CoinMarketScreen" component={CoinMarket} options={{ headerShown: false }} />
			</Stack.Navigator>
		);
	};

	const Nav = () => {
		return (
			<Tab.Navigator
				screenOptions={{
					tabBarActiveTintColor: '#000000',
					tabBarStyle: {
						backgroundColor: '#0d0e12',
						border: 'none'
					},
					title: ''
				}}
			>
				<Tab.Screen
					name="Home"
					component={Main}
					options={{
						headerShown: false,
						tabBarIcon: ({ color, size, focused }) => (
							<MaterialCommunityIcons name="home" color={focused ? '#34bc75' : '#3f4041'} size={size} />
						)
					}}
				/>
				<Tab.Screen
					name="Graph"
					component={Main}
					options={{
						headerShown: false,
						tabBarIcon: ({ color, size, focused }) => (
							<Foundation name="graph-bar" color={focused ? '#34bc75' : '#3f4041'} size={size} />
						)
					}}
				/>
				<Tab.Screen
					name="Exchange"
					component={Main}
					options={{
						headerShown: false,
						tabBarIcon: ({ color, size, focused }) => (
							<MaterialCommunityIcons
								name="swap-horizontal-circle"
								color={focused ? '#34bc75' : '#3f4041'}
								size={size}
							/>
						)
					}}
				/>
				<Tab.Screen
					name="Wallet"
					component={Main}
					options={{
						headerShown: false,
						tabBarIcon: ({ color, size, focused }) => (
							<Ionicons name="wallet" color={focused ? '#34bc75' : '#3f4041'} size={size} />
						)
					}}
				/>
			</Tab.Navigator>
		);
	};

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Main">
				<Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
				<Stack.Screen name="Main" component={Nav} options={{ headerShown: false }} />
				<Stack.Screen
					name="TradingViewChartScreen"
					component={TradingViewChart}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
