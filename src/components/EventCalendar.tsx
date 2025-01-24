"use client";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { useState } from "react";

type DateValue = Date | null;
type Value = DateValue | [DateValue, DateValue];

function EventCalendar() {
	const [date, setDate] = useState<Value>(new Date());

	return (
		<div className="bg-white p-4 rounded-md">
			<Calendar />
		</div>
	);
}

export default EventCalendar;
