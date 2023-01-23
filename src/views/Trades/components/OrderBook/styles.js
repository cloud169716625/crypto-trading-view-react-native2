import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		height: '100%',
		// maxWidth: '20em',
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
		color: '#d83100',
		fontSize: 12
	},
	buyPrice: {
		color: '#34bc75',
		fontSize: 12
	},
	amountText: {
		color: '#929292',
		fontSize: 12
	},
	itemContainer: {
		paddingTop: 1,
		paddingBottom: 1,
		paddingLeft: 4,
		paddingRight: 4,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	mb12: {
		marginBottom: 12
	}
});

export default styles;
