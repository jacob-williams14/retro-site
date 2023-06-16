import React, { useEffect } from "react";
import "./FileArea.css";
import File from "./File/File";

export default function FileArea() {
	//todo: retrieve data from sanity

	//need onClick Handler
	return (
		<div className="fileArea">
			{/* map through data object, render files inside grid */}
			<File />
			<File />
			<File />
			<File />
			<File />
			<File />
			<File />
			<File />
			<File />
		</div>
	);
}
