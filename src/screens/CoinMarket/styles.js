import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: '#0d0e0f',
		paddingLeft: 18,
		paddingRight: 18,
		paddingTop: 24
	},
	scroll: {
		overflowY: 'auto',
		height: '100%'
	},
	tabBtn: {
		borderTopLeftRadius: 40,
		borderTopRightRadius: 0,
		borderBottomLeftRadius: 40,
		borderBottomRightRadius: 50,
		textAlign: 'center',
		paddingTop: 6,
		paddingBottom: 6,
		paddingLeft: 12,
		paddingRight: 12
	},
	activeBtn: {
		backgroundColor: '#34bc75'
	},
	inactiveBtn: {
		backgroundColor: 'transparent'
	},
	activeTxt: {
		color: '#fff'
	},
	inactiveTxt: {
		color: '#ffffff80'
	},
	activeCoin: {
		borderColor: '#34bc75'
	},
	inactiveCoin: {
		borderColor: 'transparent'
	},
	btnText: {
		color: '#fff',
		fontSize: 12
	},
	tabContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 12
	},
	itemContainer: {
		flexDirection: 'row'
	},
	searchContainer: {
		backgroundColor: '#141516',
		borderRadius: 40,
		flexDirection: 'row',
		width: '40%'
	},
	searchBtn: {
		backgroundColor: '#393a3a',
		borderTopLeftRadius: 0,
		borderTopRightRadius: 40,
		borderBottomLeftRadius: 50,
		borderBottomRightRadius: 40,
		paddingRight: 10,
		paddingLeft: 10,
		paddingBottom: 2,
		justifyContent: 'center'
	},
	input: {
		border: 'none',
		color: '#fff',
		outlineStyle: 'none',
		width: '80%',
		paddingLeft: 10,
		paddingRight: 10
	},
	tokenContainer: {
		flexDirection: 'row',
		overflowX: 'auto'
	},
	tokenBtn: {
		backgroundColor: 'transparent',
		borderBottomWidth: 3,
		borderStyle: 'solid',
		paddingBottom: 4,
		marginRight: 16
	},
	btnText: {
		color: '#fff'
	},
	pairContainer: {
		paddingTop: 8,
		paddingBottom: 8,
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	icon: {
		width: 30,
		height: 30,
		borderRadius: 50,
		marginRight: 8
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	spaceBetween: {
		justifyContent: 'space-between'
	},
	name: {
		color: '#fff',
		fontSize: 16
	},
	symbol: {
		color: '#ffffff80'
	},
	upPercent: {
		color: '#00c100',
		textAlign: 'right'
	},
	downPercent: {
		color: '#d83100',
		textAlign: 'right'
	},
	upIcon: {
		color: '#00c100',
		marginBottom: -6
	},
	downIcon: {
		color: '#d83100',
		marginTop: -6
	},
	headerRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	headerContainer: {
		paddingTop: 14,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10
	}
});

export default styles;
