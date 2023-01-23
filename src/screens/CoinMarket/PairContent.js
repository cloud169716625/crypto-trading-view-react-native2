import { View, Text, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

function PariContent(props) {
	const { data } = props;
	return (
		<View style={[ styles.row, styles.pairContainer ]}>
			<View style={[ styles.row ]}>
				<Image source={{ uri: data.icon }} style={styles.icon} alt="icon" />
				<View>
					<Text style={styles.name}>{data.name}</Text>
					<Text style={styles.symbol}>{data.symbol}</Text>
				</View>
			</View>
			<View>
				<Text style={styles.name}>{data.price}</Text>
				<Text style={Number(data.percent) > 0 ? styles.upPercent : styles.downPercent}>
					{data.percent} %
					<MaterialIcons
						style={{ verticalAlign: 'bottom' }}
						name={Number(data.percent) > 0 ? 'arrow-drop-up' : 'arrow-drop-down'}
						size={16}
						color={Number(data.percent) > 0 ? '#00c100' : '#d83100'}
					/>
				</Text>
			</View>
		</View>
	);
}

export default PariContent;
