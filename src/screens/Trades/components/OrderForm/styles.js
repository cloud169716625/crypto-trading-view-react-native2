import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginHorizontal: 16
	},
	buyBtn: {
		borderTopLeftRadius: 40,
		borderTopRightRadius: 0,
		borderBottomLeftRadius: 40,
		borderBottomRightRadius: 40,
		textAlign: 'center',
		padding: 12,
		width: '49%'
	},
	sellBtn: {
		borderTopLeftRadius: 40,
		borderTopRightRadius: 40,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 40,
		textAlign: 'center',
		padding: 12,
		width: '49%'
	},
	btnText: {
		color: '#fff'
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 12
	},
	button: {
		borderRadius: 14,
		textAlign: 'center',
		padding: 12
	},
	btnText: {
		color: '#fff'
	},
	availView: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10
	},
	availText: {
		color: '#ffffff80'
	},
	availPrice: {
		color: '#fff'
	},
	marketPriceBtn: {
		backgroundColor: '#1f2021',
		borderRadius: 14,
		textAlign: 'center',
		padding: 12,
		marginBottom: 10
	},
	amountBtn: {
		borderRadius: 14,
		textAlign: 'center',
		padding: 8,
		width: '49%',
		backgroundColor: '#1f2021'
	}
});

export default styles;
