import React from "react";
import { View, Text, StyleSheet } from "react-native";
import DateTile from "../components/DateTile";
import DaysOfWeek from "../constants/DaysOfWeek";

const DayNameDisplay = () => {
	const dayNameArray = new Array(7);
	for (let i = 0; i < dayNameArray.length; i++) {
		dayNameArray[i] = <DateTile key={i} title={DaysOfWeek[i]} style={styles.dayTilesStyle} />;
	}
	return <View style={styles.dayNamesContainer}>{dayNameArray}</View>;
};

const styles = StyleSheet.create({
	dayNamesContainer: {
		flexDirection: "row",
		width: "100%",
		paddingVertical: 10
	},
	dayTilesStyle: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
		flex: 1
	}
});

export default DayNameDisplay;
