"use client";
import { Link } from "react-router-dom";
import "./hamburgers.css";
import "./Modal.css";
import { useState, useEffect, useRef } from "react";
export default function Hamburger() {
	// states
	const [isActive, setIsActive] = useState(false);
	// funcs
	function handleOpenHamburger() {
		setIsActive(true);
		//open modal
		modalContainerRef.current.style.display = "block";
	}
	function handleCloseModal() {
		modalContainerRef.current.style.display = "none";
		setIsActive(false);
	}

	function handleClickOutside(e) {
		handleCloseModal();
	}

	function handleModalClick(e) {
		e.preventDefault();
		e.stopPropagation();
		e.stopImmediatePropagation();
		return false;
	}

	// refs
	const modalRef = useRef(null);
	const modalContainerRef = useRef(null);

	useEffect(() => {
		modalRef.current = document.getElementById("modal");
		modalContainerRef.current = document.getElementById("modalContainer");
		// window.addEventListener("click", handleClickOutside);
		modalContainerRef.current.addEventListener("click", handleClickOutside);
		modalRef.current.addEventListener("click", handleOpenHamburger);

		return () => {
			// window.removeEventListener("click", handleClickOutside);
		};
	});

	return (
		<>
			{/* todo make this change colors in light mode */}
			<button
				className={
					isActive
						? "hamburger hamburger--minus is-active"
						: "hamburger hamburger--minus"
				}
				type="button"
				onPointerDown={handleOpenHamburger}
				id="hamburgerButton"
			>
				<span className="hamburger-box">
					<span className="hamburger-inner"></span>
				</span>
			</button>
			{/* //TODO export this as its own component and then import it here 
			// also it makes the background black, make it transparent so everything is still visible, or do a blur effect idk*/}
			{/* it needs the id for the ref function, className for css styling */}
			{/* make id props.id inside the modal code, and when importing it just say id=modalContainer */}
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
								About Me
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
		</>
	);
}
