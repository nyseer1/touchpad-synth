import { Link } from "react-router-dom"; //<a> but allows for prefetching of specified NavLinks
import Hamburger from "./Hamburger";
import "../index.css";
export default function Navbar({ navbarLinks }) {
	//hide on screen drag (optional)
	// var prevScrollpos = window.pageYOffset;
	// window.onscroll = () => {
	// 	var currentScrollPos = window.pageYOffset;
	// 		document.getElementById("navbar").style.top = "0";
	// 	} else {
	// 		document.getElementById("navbar").style.top = "-50px";
	// 	}
	// 	prevScrollpos = currentScrollPos;
	// };
	//https://nextjs.org/docs/app/api-reference/components/NavLink

	const navbarLinkslist = navbarLinks.map((navItem) => (
		<li className="navbarLinks" key={navItem.key}>
			{/* <a title="Home page" href={navItem.link}>Home</a> */}
			<Link to={navItem.link}>{navItem.label}</Link>
		</li>
	));

	return (
		<ul id="navbar" className="navbar">
			{/* todo arrays.map, render a list of li here. use props.navbarLinks json later */}
			<li>
				<Link to="/" className="logo">
					Nyseer
				</Link>
			</li>
			{navbarLinkslist}
			<li className="icon">
				<Hamburger />
			</li>
		</ul>
	);
}
