import React, { useState } from "react";
import "./Taskbar.css";
import Clock from "../Clock/Clock";

export default function Taskbar() {
	return (
		<div className="taskbar">
			<div className="button-column">
				<button className="start">Start</button>
			</div>
			<div className="timer-column">
				<Clock />
			</div>
		</div>
	);
}
