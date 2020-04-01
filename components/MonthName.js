import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Months from "../constants/Months";
const MonthName = props => {
	const isLeap = props.year % 4 === 0 ? true : false;
	return (
		<TouchableOpacity style={styles.nameContainer}>
			<View>
				<Text style={styles.monthText}>{Months(isLeap)[props.month].name}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	nameContainer: {
		width: "100%",
		height: "10%",
		borderColor: "black",
		borderWidth: 2,
		alignItems: "center",
		justifyContent: "center"
	},
	monthText: {
		fontSize: 25
	}
});

export default MonthName;
