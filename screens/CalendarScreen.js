import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import MonthName from "../components/MonthName";
import DateDisplay from "../components/DateDisplay";
import DayNameDisplay from "../components/DayNameDisplay";

const CalendarScreen = props => {
	const today = new Date();
	const [displayedDate, setDisplayedDate] = useState(today);
	const dayOfFirst = () => {
		const tempDisplayedDay = displayedDate.getDay();
		const tempDisplayedDate = displayedDate.getDate();
		const a = (tempDisplayedDate % 7) - (tempDisplayedDay + 1);
		if (a >= 0) {
			return a;
		} else {
			return a + 7;
		}
	};

	const getNextMonth = direction => {
		let year = displayedDate.getFullYear();
		if (direction === "up") {
			const nextMonth = displayedDate.getMonth() + 1 > 11 ? 0 : displayedDate.getMonth() + 1;
			if (nextMonth === 0) {
				year = displayedDate.getFullYear() + 1;
			}
			return new Date(year, nextMonth, displayedDate.getDate());
		} else {
			const nextMonth = displayedDate.getMonth() - 1 < 0 ? 11 : displayedDate.getMonth() - 1;
			if (nextMonth === 11) {
				year = displayedDate.getFullYear() - 1;
			}
			return new Date(year, nextMonth, displayedDate.getDate());
		}
	};

	const onChangeDate = direction => {
		if (direction === "up") {
			setDisplayedDate(getNextMonth(direction));
		} else {
			setDisplayedDate(getNextMonth(direction));
		}
	};

	return (
		<View style={styles.screen}>
			<MonthName month={displayedDate.getMonth()} year={displayedDate.getFullYear()} />
			<DayNameDisplay />
			<ScrollView>
				<DateDisplay
					firstDay={dayOfFirst()}
					month={displayedDate.getMonth()}
					year={displayedDate.getFullYear()}
					today={displayedDate.getDate()}
				/>
			</ScrollView>
			<Button
				title="up"
				onPress={() => {
					onChangeDate("up");
				}}
			/>
			<Button
				title="Down"
				onPress={() => {
					onChangeDate("down");
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		width: "100%"
	}
});

export default CalendarScreen;
