import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//one entity
function Listing(props) {
	return (
		//table row and columns displaying entity list
		<tr>
			<td>{props.listing.name}</td>
			<td>{props.listing.price}</td>
			<td>{props.listing.creationDate}</td>
			<td>{props.listing.sellerName}</td>
			<td>{props.listing.verified}</td>
			<td>
				<div>
					<Link to={`/edit/${props.listing._id}`}>Edit</Link>
				</div>
				<button
					color="red"
					type="button"
					onClick={() => {
						props.deleteListing(props.listing._id);
					}}
				>
					Delete
				</button>
			</td>
		</tr>
	);
}
//list of entities
export default function ListingList() {
	const [listings, setListings] = useState([]);
	console.log("in listinglist page");

	useEffect(() => {
		//fetch api connects to server
		async function getListings() {
			const response = await fetch(`http://localhost:3001/api/listing`);
			if (!response.ok) {
				console.error(`${response.status} Error: ${response.statusText}`);
				return;
			}
			const entityList = await response.json();
			setListings(entityList);
		}
		console.log("calling getlistings");
		getListings();
		return;
	}, [listings.length]); //run again if length changes

	async function deleteListing(id) {
		await fetch(`http://localhost:3001/api/listing/${id}`, {
			method: "DELETE",
		});
		const newListings = listings.filter((entity) => entity._id !== id); //rm from list
		setListings(newListings);
	}

	function listingList() {
		//map entity to table
		return listings.map((listing) => {
			return (
				<Listing
					listing={listing}
					deleteListing={() => deleteListing(listing._id)}
					key={listing._id}
				/>
			);
		});
	}

	return (
		<>
			<h3>Listings:</h3>
			<div className="EntityTable">
				<table>
					<thead>
						<tr>
							<th>Listing</th>
							<th>Price</th>
							<th>Date</th>
							<th>Sold By</th>
							<th>Verified</th>
						</tr>
					</thead>
					<tbody>{listingList()}</tbody>
				</table>
			</div>
		</>
	);
}
