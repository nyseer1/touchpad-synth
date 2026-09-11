import { Link } from "react-router-dom"; //<a> but allows for prefetching of specified NavLinks
import Hamburger from "./Hamburger";
import "../index.css";
export default function Navbar() {
	//hide on screen drag (optional)
	// var prevScrollpos = window.pageYOffset;
	// window.onscroll = () => {
	// 	var currentScrollPos = window.pageYOffset;
	// 	if (prevScrollpos > currentScrollPos) {
	// 		document.getElementById("navbar").style.top = "0";
	// 	} else {
	// 		document.getElementById("navbar").style.top = "-50px";
	// 	}
	// 	prevScrollpos = currentScrollPos;
	// };
	//https://nextjs.org/docs/app/api-reference/components/NavLink

	return (
		<ul id="navbar">
			<li>
				<Link to="/" className="logo">
					Nyseer
				</Link>
			</li>
			<li className="navbarItems">
				<Link to="#home">Home</Link>
			</li>
			<li className="navbarItems">
				<Link to="#about">About Me</Link>
			</li>
			<li className="navbarItems">
				<Link to="/#projects">Projects</Link>
			</li>
			<li className="navbarItems">
				<Link to="/#contact">Contact Me</Link>
			</li>
			<li className="icon">
				<Hamburger />
			</li>
		</ul>
	);
}
