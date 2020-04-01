import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import DateTile from "./DateTile";

import Months from "../constants/Months";

const renderingMonth = {
	previous: "previous",
	current: "current",
	next: "next"
};

const DateDisplay = props => {
	const dateArray = new Array(6);
	const isLeap = props.year % 4 === 0 ? true : false;
	const daysInMonth = Months(isLeap)[props.month].days;
	const previousMonth = props.month - 1 >= 0 ? props.month - 1 : 11;
	// const nextMonth = props.month + 1 >= 11 ? props.month + 1 : 0;
	let startDisplayDate =
		props.firstDay !== 0 ? Months(isLeap)[previousMonth].days - props.firstDay : 1;
	let previousMonthFinalDate = Months(isLeap)[previousMonth].days;
	let currentlyRendering = props.firstDay !== 0 ? renderingMonth.previous : renderingMonth.current;
	let dayCounter = 1;

	console.log(props.firstDay);

	const determineDate = () => {
		if (currentlyRendering === renderingMonth.previous) {
			if (startDisplayDate <= previousMonthFinalDate) {
				return startDisplayDate++;
			} else {
				currentlyRendering = renderingMonth.current;
			}
		}
		if (currentlyRendering === renderingMonth.current) {
			if (dayCounter <= daysInMonth) {
				return dayCounter++;
			} else {
				dayCounter = 1;
				currentlyRendering = renderingMonth.next;
			}
		}
		if (currentlyRendering === renderingMonth.next) {
			return dayCounter++;
		}
	};

	for (let i = 0; i < dateArray.length; i++) {
		dateArray[i] = new Array(7); //creates 2d array, 6 rows of 7
	}

	for (let j = 0; j < dateArray.length; j++) {
		for (let k = 0; k < dateArray[j].length; k++) {
			dateArray[j][k] = (
				<DateTile
					key={j + k}
					title={determineDate()}
					style={styles.dateTileStyle}
					textStyle={
						currentlyRendering === renderingMonth.current
							? styles.currentMonthDatesText
							: styles.notCurrentMonthDatesText
					}
				/>
			);
		}
	}
	return <View style={styles.datesContainer}>{dateArray}</View>;
};

const styles = StyleSheet.create({
	datesContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		width: "100%"
	},
	dateTileStyle: {
		width: "14.2857%",
		justifyContent: "center",
		alignItems: "center"
	},
	currentMonthDatesText: {
		color: "blue"
	},
	notCurrentMonthDatesText: {
		color: "red"
	}
});

export default DateDisplay;
