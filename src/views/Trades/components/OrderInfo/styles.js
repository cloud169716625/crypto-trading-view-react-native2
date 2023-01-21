import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		height: '100%',
		maxWidth: '20em',
		display: 'flex',
		flexDirection: 'column'
	},
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
		height: 'fit-content',
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
		fontSize: 12,
		display: 'block',
		textAlign: 'right',
		whiteSpace: 'break-spaces'
	},
	timeText: {
		color: '#50525b',
		fontSize: 10,
		float: 'right',
		marginTop: 4
	}
});

export default styles;
