import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// alignItems: 'left',
		marginRight: 16
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
		color: '#fff',
		textAlign: 'center'
	},
	volView: {
		backgroundColor: '#1f2021',
		width: '100%',
		padding: 10,
		alignItems: 'center',
		borderRadius: 14
	},
	vol: {
		color: '#ffffff80'
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
	},
	inactiveBtn: {
		backgroundColor: '#1f2021'
	},
	redBtn: {
		backgroundColor: '#d83100'
	},
	greenBtn: {
		backgroundColor: '#34bc75'
	},
	activeTxt: {
		color: '#fff'
	},
	inactiveTxt: {
		color: '#ffffff80'
	}
});

export default styles;
