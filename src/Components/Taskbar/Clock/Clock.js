import React, { useState } from "react";
import "./Clock.css";

export default function Clock() {
	const time = new Date().toLocaleTimeString();
	const [currentTime, setCurrentTime] = useState(time);

	const updateTime = () => {
		let time = new Date().toLocaleTimeString(navigator.language, {
			hour12: false,
		});
		setCurrentTime(time);
	};

	setInterval(updateTime);

	return <div className="clock">{currentTime}</div>;
}
