import { View, Text, Image } from 'react-native';
import styles from './styles';

function PariContent(props) {
	const { data } = props;
	console.log(data);
	return (
		<View style={[ styles.row, styles.pairContainer ]}>
			<View style={[ styles.row ]}>
				<Image source={data.icon} style={styles.icon} alt="icon" />
				<View>
					<Text style={styles.name}>{data.name}</Text>
					<Text style={styles.symbol}>{data.symbol}</Text>
				</View>
			</View>
			<View>
				<Text style={styles.name}>{data.price}</Text>
				<Text style={Number(data.percent) > 0 ? styles.upPercent : styles.downPercent}>{data.percent} %</Text>
			</View>
		</View>
	);
}

export default PariContent;
