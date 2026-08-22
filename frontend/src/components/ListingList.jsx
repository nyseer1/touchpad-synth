import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { createTheme } from "react-data-table-component";

const columns = [
	{ name: "Name", selector: (row) => row.name, sortable: true },
	{
		name: "Price",
		selector: (row) => row.price.$numberDecimal,
		sortable: true,
	},
	{ name: "Sold by", selector: (row) => row.sellerName, sortable: true },
];
//list of entities
export default function ListingList() {
	const inlineTheme = createTheme("violet", {
		primary: "#6200EE",
		text: {
			primary: "#eeeeee",
			secondary: "#eeeeee",
			disabled: "#888888",
		},
		background: {
			default: "#111111",
			header: "#111111", // distinct header background
		},
		divider: { default: "#3c3746ff" },
		selected: { default: "#ede7f6", text: "#1a1a2e" },
		highlightOnHover: { default: "#ede7f6", text: "#1a1a2e" },
		striped: { default: "#f3eeff", text: "#1a1a2e" },
		button: {
			default: "#6200EE",
			focus: "rgba(98,0,238,0.12)",
			hover: "rgba(98,0,238,0.08)",
			disabled: "#d1c4e9",
		},
		context: { background: "#6200EE", text: "#ffffff" },
		// Dark-mode overrides — only what changes
		darkMode: {
			primary: "#BB86FC",
			text: { primary: "#e0e0e0", secondary: "#b0b0b0" },
			background: { default: "#1a0533", header: "#240844" },
			divider: { default: "#3d1f6e" },
			selected: { default: "#2d1060", text: "#e0e0e0" },
			highlightOnHover: { default: "#2d1060", text: "#e0e0e0" },
			striped: { default: "#1e0a40", text: "#e0e0e0" },
		},
		// Structural
		spacing: { rowHeight: "48px", headerHeight: "56px", cellPaddingX: "16px" },
		typography: { fontSize: "14px", fontSizeHeader: "12px" },
		shape: { borderRadius: "8px" },
	});

	const [listings, setListings] = useState([]);

	//GET (ALL) fetch api connects to server
	async function getListings() {
		const response = await fetch(`http://localhost:3001/api/listing`);
		if (!response.ok) {
			console.error(`${response.status} Error: ${response.statusText}`);
			return;
		}
		const entityList = await response.json();
		//TODO test to get the right json data
		// console.log(response.json);

		setListings(entityList);
		//i can call listing.propertyName to get each , ie ${listing.name} listing._id
		listings.forEach((listing) => {
			console.log(JSON.stringify(listing));
		});
	}

	//DELETE (ONE)
	async function deleteListing(id) {
		await fetch(`http://localhost:3001/listing/${id}`, {
			method: "DELETE",
		});
		const newListings = listings.filter((entity) => entity._id !== id); //rm from list
		setListings(newListings);
	}

	//do not depend on getListings it refreshes constantly
	useEffect(() => {
		console.log("calling getlistings");
		getListings();
		return;
	}, [listings.length]); //run again if length changes

	return (
		<DataTable
			columns={columns}
			data={listings}
			pagination
			selectableRows
			theme={inlineTheme}
			//preset theme that has a colorMode that adjusts to system theme:
			// theme="material"
			// colorMode="system"
		/>
	);
	// if (listings.length === 0) {
	// 	return (
	// 		<>
	// 			<h3>Listings:</h3>
	// 			<p>No listings found.</p>
	// 		</>
	// 	);
	// }
	// if (listings.length === 1) {
	// 	console.log("length 1");
	// 	return (
	// 		<>
	// 			<h3>Listings:</h3>
	// 			<div className="listing-item" key={listings[0]._id}>
	// 				<h2>{listings[0].name}</h2>
	// 				<br />
	// 				{/* <p>ID: ${listing._id}</p> */}
	// 				<p>Price: ${listings[0].price.$numberDecimal}</p>
	// 				<br />
	// 				<p>Sold By: {listings[0].sellerName}</p>
	// 				<br />
	// 			</div>
	// 		</>
	// 	);
	// }

	// return (
	// 	<>
	// 		<h3>Listings:</h3>
	// 		{listings.map((listing) => (
	// 			<div className="listing-item" key={listing._id}>
	// 				<h2>{listing.name}</h2>
	// 				<br />
	// 				{/* <p>ID: ${listing._id}</p> */}
	// 				<p>Price: ${listing.price.$numberDecimal}</p>
	// 				<br />
	// 				<p>Sold By: {listing.sellerName}</p>
	// 				<br />
	// 			</div>
	// 		))}
	// 	</>
	// );
}
