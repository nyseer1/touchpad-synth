"use client";
import { Link } from "react-router-dom";
import "./hamburgers.css";
import "./Modal.css";
import { useState, useEffect, useRef } from "react";
import HamburgerModal from "./HamburgerModal";
//
export default function Hamburger() {
	// states
	const [isActive, setIsActive] = useState(false);
	// funcs
	function handleOpenModal() {
		setIsActive(true);
		//open modal
	}
	function handleCloseModal() {
		setIsActive(false);
	}

	function handleClickOutside(e) {
		handleCloseModal();
	}

	// refs
	const modalRef = useRef(null);
	const modalContainerRef = useRef(null);

	useEffect(() => {
		if (isActive) {
			modalContainerRef.current = document.getElementById("modalContainer");
			modalContainerRef.current.addEventListener("click", handleClickOutside);
		}

		return () => {
			if (isActive) {
				modalContainerRef.current.removeEventListener(
					"click",
					handleClickOutside,
				);
			}
		};
	}, [isActive]);

	return (
		<>
			{/* todo make this change 5colors in light mode */}
			<button
				className={
					isActive
						? "hamburger hamburger--minus is-active"
						: "hamburger hamburger--minus"
				}
				type="button"
				onPointerDown={handleOpenModal}
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
			{isActive ? <HamburgerModal id="modalContainer" /> : <div></div>}
		</>
	);
}
