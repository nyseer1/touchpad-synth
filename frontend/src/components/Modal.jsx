"use client";
import { Link } from "react-router-dom";
import "./Modal.css";
import { useState, useEffect, useRef } from "react";
export default function Modal({
	isModalActive,
	handleModalButtonPress,
	modalText,
	modalOption,
	handleClickOutside,
}) {
	// states
	// funcs

	// refs
	// const modalContainerRef = useRef(null);

	// useEffect(() => {
	// 	if (isModalActive) {
	// 		modalContainerRef.current = document.getElementById("modalContainer");
	// 		modalContainerRef.current.addEventListener("click", handleClickOutside);
	// 	}

	// 	return () => {
	// 		// window.removeEventListener("click", handleClickOutside);
	// 		if (isModalActive) {
	// 			modalContainerRef.current.removeEventListener(
	// 				"click",
	// 				handleClickOutside,
	// 			);
	// 		}
	// 	};
	// }, [isModalActive]); //update(run again) when the prop useState changes

	return (
		<>
			{isModalActive ? (
				<div
					id="modalContainer"
					className="modal"
					onPointerDown={handleClickOutside}
				>
					<div id="modal" className="modal-content">
						<p>{modalText}</p>
						<ul>
							<li className="hamburgerItems">
								{handleModalButtonPress !== null ? (
									<button
										type="button"
										className="button"
										onPointerDown={handleModalButtonPress}
									>
										{modalOption}
									</button>
								) : (
									<div></div>
								)}
							</li>
							<li className="hamburgerItems">
								<button
									type="button"
									className="button"
									onPointerDown={handleClickOutside}
								>
									Back
								</button>
							</li>
						</ul>
					</div>
				</div>
			) : (
				<div></div>
			)}
		</>
	);
}
