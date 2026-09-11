import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Link, Outlet } from "react-router-dom";
import BackToTopButton from "./components/BackToTopButton";

function App() {
	// const [isDesktop, setDesktop] = useState(true);
	// const updateMedia = () => {
	// 	setDesktop(window.innerWidth > 700);
	// };

	// useEffect(() => {
	// 	setDesktop(window.innerWidth > 700);
	// 	window.addEventListener("resize", updateMedia);
	// 	return () => window.removeEventListener("resize", updateMedia);
	// });

	return (
		<>
			<Navbar />
			<div className="adaptive">
				<div id="home" className="adaptive"></div>
				{/* todo shop image here */}
				{/* entity/entitylist here, outlet=childcomponent for this page in main.jsx */}
				<Outlet />
				<BackToTopButton />
				{/* poo */}
			</div>
		</>
	);
}

export default App;
