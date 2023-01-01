import "./App.css";
import Desktop from "./Components/Desktop/Desktop";
import Taskbar from "./Components/Taskbar/Taskbar";

function App() {
	return (
		<div className="main-wrapper">
			<Desktop />
			<Taskbar />
		</div>
	);
}

export default App;
