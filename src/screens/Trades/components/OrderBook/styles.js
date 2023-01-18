import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		height: '100%',
		maxWidth: '20em',
		marginLeft: 'auto',
		marginRight: 'auto',
		display: 'flex',
		flexDirection: 'column'
	},
	sellContainer: {
		flexDirection: 'column-reverse',
		display: 'flex',
		textAlign: 'center',
		overflowY: 'hidden'
	},
	buyContainer: {
		flexDirection: 'column',
		display: 'flex',
		textAlign: 'center',
		overflowY: 'hidden'
	},
	sellPrice: {
		color: '#d83100'
	},
	buyPrice: {
		color: '#34bc75'
	},
	amountText: {
		color: '#929292'
	},
	itemContainer: {
		padding: 4,
		display: 'flex',
		flexBasis: '50%',
		flexDirection: 'row'
	}
});

export default styles;
