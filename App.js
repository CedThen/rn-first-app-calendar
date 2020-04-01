import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import CalendarScreen from "./screens/CalendarScreen";

export default function App() {
	return (
		<View style={styles.container}>
			<CalendarScreen />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		padding: 30
		// justifyContent: "center"
	}
});
