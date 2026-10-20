import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Link, Outlet } from "react-router-dom";
import BackToTopButton from "./components/BackToTopButton";
import ScrollToAnchor from "./components/ScrollToAnchor";

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

	//sets the individual button links in navbar
	const navbarLinks = [
		{
			link: "/",
			label: "Home",
			key: "home",
		},
		{
			link: "/about/#about",
			label: "About Me",
			key: "about",
		},
		{
			link: "/about/#projects",
			label: "Projects",
			key: "projects",
		},
		{
			link: "/about/#contact",
			label: "Contact Me",
			key: "contact",
		},
	];

	return (
		<>
			<Navbar navbarLinks={navbarLinks} />
			<ScrollToAnchor />

			<div>
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
