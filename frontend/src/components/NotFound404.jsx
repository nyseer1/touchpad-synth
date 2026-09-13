// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NotFound404() {
	return (
		<div>
			<h1>404: Page Not Found</h1>
			<p>Hey you must've gotten lost, head back to the home page here:</p>
			<Link to="/">
				<button type="button">Back</button>
			</Link>
		</div>
	);
}
