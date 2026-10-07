import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function ScrollToAnchor() {
	const location = useLocation();
	const lastHash = useRef("");

	// listen to location change (ie url path changes) using useEffect with location as dependency
	// on change, smooth scroll to the id matching the url tail
	useEffect(() => {
		if (location.hash) {
			lastHash.current = location.hash.slice(1); // set to extracted url tail (id part)
		}

		if (lastHash.current && document.getElementById(lastHash.current)) {
			setTimeout(() => {
				document
					.getElementById(lastHash.current)
					?.scrollIntoView({ behavior: "smooth", block: "start" });
				lastHash.current = "";
			}, 0); //set a custom delay
		}
	}, [location]);

	return null;
}

export default ScrollToAnchor;
