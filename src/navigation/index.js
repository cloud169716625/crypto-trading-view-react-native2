import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import SignIn from '../screens/Signin';
import Trades from '../screens/Trades';

export default function Navigation() {
	const Stack = createNativeStackNavigator();
	const Tab = createBottomTabNavigator();

	const Auth = () => {
		// Stack Navigator for Login and Sign up Screen
		return (
			<Stack.Navigator initialRouteName="SignInScreen">
				<Stack.Screen name="SignInScreen" component={SignIn} options={{ headerShown: false }} />
			</Stack.Navigator>
		);
	};

	const Main = () => {
		return (
			<Stack.Navigator initialRouteName="ServiceList">
				<Stack.Screen name="ServiceList" component={Trades} options={{ headerShown: false }} />
			</Stack.Navigator>
		);
	};

	const Nav = () => {
		return (
			<Tab.Navigator
				screenOptions={{
					tabBarActiveTintColor: '#000000'
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
				{/* <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} /> */}
				<Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
				<Stack.Screen name="Main" component={Nav} options={{ headerShown: false }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});