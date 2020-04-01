import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const DateTile = props => {
	return (
		<TouchableOpacity style={{ ...styles.tile, ...props.style }}>
			<View>
				<Text style={{ ...styles.text, ...props.textStyle }}>{props.title}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	tile: {
		width: "100%",
		// flex: 1,
		borderColor: "black",
		borderWidth: 1,
		backgroundColor: "#d1d1d1"
	},
	text: {
		fontSize: 15
	}
});

export default DateTile;
