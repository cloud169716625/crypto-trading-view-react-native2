import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Pressable, Text, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// redux
import { getAllPairs, getDayPrices } from '../../redux/coinMarket';
// components
import PariContent from './PairContent';
// styles
import styles from './styles';
// constants
import { TOKEN_SYMBOLS, COIN_ICONS } from '../../config/constant';

function CoinMarket() {
	const dispatch = useDispatch();
	const pairList = useSelector((state) => state?.coinMarket?.coinPairList);
	const dayPriceList = useSelector((state) => state?.coinMarket?.dayPriceList);
	const [ curTab, setCurTab ] = useState('all');
	const [ curCoin, setCurCoin ] = useState('BNB');
	const [ searchText, setSearchText ] = useState('');
	const [ newCoinPairs, setNewCoinPairs] = useState([])
 
	const handleCoinPair = (items) => {
		let temp = []
		items.map((item) => {
			const quoteCoinSymbol = item.quoteAsset
			const day_price = dayPriceList.find(x => {return x.symbol === item.symbol})?.lastPrice
			console.log(day_price)
			const percent = dayPriceList.find(x => {return x.symbol === item.symbol})?.priceChangePercent
			const quoteCoinInfo = COIN_ICONS.find(x => x.symbol === quoteCoinSymbol.toLowerCase()) 
			if(quoteCoinInfo) {
				const data = {
					symbol: quoteCoinSymbol,
					price: day_price,
					percent: percent,
					icon: quoteCoinInfo.image,
					name: quoteCoinInfo.name
				}
				temp.push(data)
			}
		})
		setNewCoinPairs(temp)
	}
	
	useEffect(() => {
		dispatch(getAllPairs());
		dispatch(getDayPrices());
	}, []);

	useEffect(() => {
		if(pairList.length > 0 && dayPriceList) {
			handleCoinPair(pairList.filter(x => x.baseAsset === curCoin))
		}
	}, [curCoin, pairList.length, dayPriceList.length])

	return (
		<View style={styles.container}>
			<View style={styles.tabContainer}>
				<View style={styles.itemContainer}>
					<Pressable
						style={[ styles.tabBtn, { backgroundColor: curTab === 'all' ? '#34bc75' : 'transparent' } ]}
						onPress={() => setCurTab('all')}
					>
						<Text style={[ styles.btnText, { color: curTab === 'all' ? '#fff' : '#ffffff80' } ]}>All</Text>
					</Pressable>
					<Pressable
						style={[
							styles.tabBtn,
							{ backgroundColor: curTab === 'metaverse' ? '#34bc75' : 'transparent' }
						]}
						onPress={() => setCurTab('metaverse')}
					>
						<Text style={[ styles.btnText, { color: curTab === 'metaverse' ? '#fff' : '#ffffff80' } ]}>
							Metaverse
						</Text>
					</Pressable>
					<Pressable
						style={[ styles.tabBtn, { backgroundColor: curTab === 'nft' ? '#34bc75' : 'transparent' } ]}
						onPress={() => setCurTab('nft')}
					>
						<Text style={[ styles.btnText, { color: curTab === 'nft' ? '#fff' : '#ffffff80' } ]}>NFT</Text>
					</Pressable>
				</View>
				<View style={styles.searchContainer}>
					<TextInput
						style={styles.input}
						placeholder="...search"
						placeholderTextColor="#ffffff90"
						value={searchText}
						onChange={(e) => setSearchText(e.target.value)}
					/>
					<Pressable style={styles.searchBtn}>
						<FontAwesome name="search" size={16} color="#0d0e0f" />
					</Pressable>
				</View>
			</View>
			<View style={styles.tokenContainer}>
				<Pressable
					style={[ styles.tokenBtn, { borderColor: curCoin === 'Favorites' ? '#34bc75' : 'transparent' } ]}
					onPress={() => setCurCoin('Favorites')}
				>
					<Text style={styles.btnText}>Favorites</Text>
				</Pressable>
				{TOKEN_SYMBOLS.map((item, key) => (
					<Pressable
						key={key}
						style={[
							styles.tokenBtn,
							{ borderColor: curCoin === item.symbol ? '#34bc75' : 'transparent' }
						]}
						onPress={() => setCurCoin(item.symbol)}
					>
						<Text style={styles.btnText}>{item.symbol}</Text>
					</Pressable>
				))}
			</View>
			{
				newCoinPairs && newCoinPairs?.map((data, key) => <PariContent key={key} data={data} />)
			}
		</View>
	);
}

export default CoinMarket;
