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
	const modalContainerRef = useRef(null);

	const handleDisableClickBehind = (e) => {
		e.preventDefault();
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <dont need to render again>
	useEffect(() => {
		if (isModalActive) {
			modalContainerRef.current = document.getElementById("modalContainer");

			//full width&height container, steals input from background to disable clicking anything else
			modalContainerRef.current.addEventListener(
				"touchstart",
				handleDisableClickBehind,
			);
		}

		return () => {
			// window.removeEventListener("click", handleClickOutside);
			if (isModalActive) {
				modalContainerRef.current.removeEventListener(
					"touchstart",
					handleDisableClickBehind,
				);
			}
		};
	}, [isModalActive]); //update(run again) when the prop useState changes

	return (
		<>
			{isModalActive ? (
				<div
					id="modalContainer"
					className="modal"
					onPointerUp={handleClickOutside}
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
									onPointerUp={handleClickOutside}
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
