import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#151d2a',
		flex: 1
	},
	btnContainer: {
		width: '60%',
		flexDirection: 'row',
		padding: 20,
		alignSelf: 'flex-end'
	},
	buyBtn: {
		width: '45%',
		backgroundColor: '#34bc75',
		height: 34,
		borderRadius: 6,
		alignItems: 'center',
		marginRight: 8
	},
	sellBtn: {
		width: '45%',
		backgroundColor: '#ff424c',
		height: 34,
		borderRadius: 6,
		alignItems: 'center'
	},
	btnText: {
		color: '#fff',
		fontSize: 18,
		marginTop: 3
	},
	tabContainer: {
		flexDirection: 'row',
		padding: 10
	},
	activeTab: {
		color: '#fff',
		marginRight: 14
	},
	inactiveTab: {
		color: '#ffffff80',
		marginRight: 14
	},
	activeBorder: {
		backgroundColor: '#34bc75',
		height: 2,
		marginTop: 2,
		width: 22,
		marginLeft: 6
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	pr10: {
		paddingRight: 10
	},
	pl10: {
		paddingLeft: 10
	},
	price: {
		color: '#00c18a',
		fontSize: 18,
		marginBottom: 2
	},
	usdPrice: {
		fontSize: 10,
		color: '#ffffff80',
		marginBottom: 2
	},
	green: {
		color: '#00c18a'
	},
	red: {
		color: '#ff424c'
	},
	quote: {
		color: '#ff7300',
		fontSize: 10,
		backgroundColor: '#2b252b',
		width: 'auto',
		padding: 4,
		borderRadius: 8,
		marginBottom: 2
	},
	desc: {
		color: '#fff',
		textAlign: 'right',
		fontSize: 10,
		marginBottom: 2
	},
	divider: {
		height: 6,
		marginTop: 10,
		backgroundColor: '#000'
	},
	pair: {
		fontSize: 20,
		color: '#fff'
	},
	headerContainer: {
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 14,
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
});

export default styles;
