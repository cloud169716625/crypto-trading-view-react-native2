import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	root: {
		backgroundColor: '#0c0d0f',
		padding: 12,
		flex: 1,
		overflowY: 'auto'
	},
	headerContainer: {
		flexDirection: 'row',
		display: 'flex',
		marginBottom: 20
	},
	topContainer: {
		justifyContent: 'space-between',
		flexDirection: 'row'
	},
	pair: {
		color: '#fff',
		fontSize: 20
	},
	percent: {
		fontSize: 14,
		color: '#34bc75',
		marginTop: 3,
		marginLeft: 8
	},
	headerContainer2: {
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 14,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	}
});

export default styles;
