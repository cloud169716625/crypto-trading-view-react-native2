import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	tabContainer: {
		flexDirection: 'row',
		marginTop: 30
	},
	tabBtn: {
		backgroundColor: 'transparent',
		border: '#34bc75',
		borderBottomWidth: 3,
		borderBottomStyle: 'solid',
		marginRight: 14,
		paddingBottom: 4
	},
	tableHead: {
		width: 'auto',
		border: 'none'
	},
	tableHeadText: {
		color: '#50525b',
		fontSize: 10,
		padding: 0,
		marginRight: 4
	},
	tableRow: {
		border: 'none'
	},
	tableRowText: {
		color: '#fff',
		fontSize: 10,
		textAlign: 'right',
		whiteSpace: 'break-spaces'
	},
	timeText: {
		color: '#50525b',
		fontSize: 10,
		float: 'right',
		marginTop: 4
	},
	activeTab: {
		borderColor: '#34bc75'
	},
	inactiveTab: {
		borderColor: 'transparent'
	},
	activeText: {
		color: '#fff'
	},
	inactiveTxt: {
		color: '#4d4f58'
	}
});

export default styles;
