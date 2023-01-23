import React, { useState, useEffect } from 'react';
import { View, Pressable, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native'
import styles from './styles';
import Header from './Header';

// api
import { getCoinInfoAPI, getCoinPriceAPI } from '../../api/trade';
 
const TradingViewChart = () => {
	const navigation = useNavigation()
	const coinPair = 'BTCUSDT'; 
	const [ coinInfo, setCoinInfo ] = useState();
	const [price, setPrice] = useState();

	useEffect(() => {
		getCoinInfoAPI(coinPair).then((res) => {
			setCoinInfo(res);
		});
		getCoinPriceAPI(coinPair).then((res) => {
			setPrice(res?.price)
		})
	}, []);

	
	return (
		<View style={styles.container}>
			<Header />
			<View style={styles.tabContainer}>
				<Pressable>
					<Text style={styles.activeTab}>Chart</Text>
					<View style={styles.activeBorder} />
				</Pressable>
				<Pressable onPress={()=>navigation.navigate('CoinMarketScreen')}>
					<Text style={styles.inactiveTab}>Coin Info</Text>
				</Pressable>
				<Pressable onPress={()=>navigation.navigate('Trades')}>
					<Text style={styles.inactiveTab}>Recommendations</Text>
				</Pressable>
			</View>
			<View style={[styles.row, styles.pl10, styles.pr10]}>
				<View>
					<Text style={styles.price}>{(((Number(coinInfo?.highPrice) + Number(coinInfo?.lowPrice)) / 2).toFixed(2)).toString()}</Text>
					<Text style={styles.usdPrice}>=${Number(price).toFixed(2)} <Text style={Number(coinInfo?.priceChangePercent) > 0 ? styles.green : styles.red}>{coinInfo?.priceChangePercent} %</Text></Text>
					<Text style={styles.quote}>Top 1 in Popularity</Text>
				</View>
				<View style={[styles.row, {width: '50%'}]}>
					<View>
						<Text style={styles.usdPrice}>24h High</Text>
						<Text style={styles.usdPrice}>24h Low</Text>
						<Text style={styles.usdPrice}>{`24h Amount(BTC)`}</Text>
						<Text style={styles.usdPrice}>{`24h Volume(USDT)`}</Text>
					</View>
					<View>
						<Text style={styles.desc}>{Number(coinInfo?.highPrice).toFixed(2)}</Text>
						<Text style={styles.desc}>{Number(coinInfo?.lowPrice).toFixed(2)}</Text>
						<Text style={styles.desc}>{Number(coinInfo?.volume).toFixed(2)}</Text>
						<Text style={styles.desc}>{Number(coinInfo?.quoteVolume).toFixed(2)}</Text>
					</View>
				</View>
			</View>
			<View style={styles.divider} />
			<WebView source={{ uri: 'https://52wfn.csb.app/' }} />
			<View style={styles.btnContainer}>
				<Pressable style={styles.buyBtn} onPress={()=>navigation.navigate('Trades')}>
					<Text style={styles.btnText}>Buy</Text>
				</Pressable>
				<Pressable style={styles.sellBtn} onPress={()=>navigation.navigate('Trades')}>
					<Text style={styles.btnText}>Sell</Text>
				</Pressable>
			</View>
		</View>
	);
};

export default TradingViewChart;
