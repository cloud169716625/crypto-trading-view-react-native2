import React from 'react';
import { View, Text } from 'react-native';
import { DataTable } from 'react-native-paper';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { OPEN_ORDERS } from './mockup';

function OpenOrders() {
	return (
		<View>
			<DataTable>
				<DataTable.Header style={{ padding: 0 }}>
					<DataTable.Title style={{ maxWidth: 40 }} />
					<DataTable.Title numeric>
						<Text style={styles.tableHeadText}>Date and Time</Text>
						<FontAwesome style={styles.iconStyle} color="#50525b" name="sort" size={12} />
					</DataTable.Title>
					<DataTable.Title numeric>
						<Text style={styles.tableHeadText}>Amount</Text>
						<FontAwesome style={styles.iconStyle} color="#50525b" name="sort" size={12} />
					</DataTable.Title>
					<DataTable.Title numeric>
						<Text style={styles.tableHeadText}>Value</Text>
						<FontAwesome style={styles.iconStyle} color="#50525b" name="sort" size={12} />
					</DataTable.Title>
					<DataTable.Title numeric>
						<Text style={styles.tableHeadText}>Rate/Fee</Text>
						<FontAwesome style={styles.iconStyle} color="#50525b" name="sort" size={12} />
					</DataTable.Title>
				</DataTable.Header>
				{OPEN_ORDERS.map((item, key) => (
					<DataTable.Row style={[ styles.tableRow, { padding: 0 } ]} key={key}>
						<DataTable.Cell style={{ maxWidth: 30 }}>
							<Text style={{ fontSize: 10, color: item.type === 0 ? '#34bc75' : '#d83100' }}>
								{item.type === 0 ? 'BUY' : 'SELL'}
							</Text>
						</DataTable.Cell>
						<DataTable.Cell numeric>
							<View>
								<Text style={styles.tableRowText}>{item.date}</Text>
								<Text style={styles.timeText}>{item.time}</Text>
							</View>
						</DataTable.Cell>
						<DataTable.Cell numeric>
							<Text style={styles.tableRowText}>{item.amount}</Text>
						</DataTable.Cell>
						<DataTable.Cell numeric>
							<Text style={styles.tableRowText}>{item.value} USD</Text>
						</DataTable.Cell>
						<DataTable.Cell numeric>
							<View>
								<Text style={styles.tableRowText}>{item.rate} USD</Text>
								<Text style={styles.tableRowText}>{item.fee} USD</Text>
							</View>
						</DataTable.Cell>
					</DataTable.Row>
				))}
			</DataTable>
		</View>
	);
}

export default OpenOrders;
