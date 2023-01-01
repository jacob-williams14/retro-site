import React from "react";
import "./Taskbar.css";

export default function Navbar() {
	return (
		<div className="taskbar">
			<button className="start-button">Start</button>
			<button className="timer">Timer</button>
		</div>
	);
}
