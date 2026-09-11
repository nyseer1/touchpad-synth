"use client";
import { Link } from "react-router-dom";
import "./Modal.css";
import { useState, useEffect, useRef, use } from "react";
export default function HamburgerModal() {
	// states
	const [isActive, setIsActive] = useState(null);
	// funcs
	function handleCloseModal() {
		modalContainerRef.current.style.display = "none";
		setIsActive(false);
	}

	function handleClickOutside(e) {
		handleCloseModal();
		setIsActive(false);
	}

	// refs
	const modalRef = useRef(null);
	const modalContainerRef = useRef(null);

	useEffect(() => {
		modalRef.current = document.getElementById("modal");
		modalContainerRef.current = document.getElementById("modalContainer");
		// window.addEventListener("click", handleClickOutside);
		modalContainerRef.current.addEventListener("click", handleClickOutside);

		return () => {
			// window.removeEventListener("click", handleClickOutside);
		};
	});

	return (
		<div id="modalContainer" className="modal">
			<div id="modal" className="modal-content">
				<p>Where do you want to go..</p>
				<ul>
					<li className="hamburgerItems">
						<Link to="/" className="link">
							Home
						</Link>
					</li>
					<li className="hamburgerItems">
						<Link to="/#about" className="link">
							Projects
						</Link>
					</li>
					<li className="hamburgerItems">
						{/* todo test if this works on other pages */}
						<Link to="/#projects" className="link">
							Projects
						</Link>
					</li>
					<li className="hamburgerItems">
						<Link to="/#contact" className="link">
							Contact Me
						</Link>
					</li>
					<li className="hamburgerItems">
						<button
							type="button"
							className="modalButton"
							onPointerDown={handleCloseModal}
						>
							Back
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
}
