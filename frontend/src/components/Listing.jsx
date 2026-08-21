import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

//one entity
export default function Listing() {
	const [form, setForm] = useState({
		name: "",
		price: "",
		sellerName: "",
	});
	const [isNew, setIsNew] = useState(true);
	const params = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		//fetch api connects to server
		async function fetchData() {
			//GET (ONE)
			const id = params.id?.toString() || undefined; //? if no id, set undefined
			if (!id) return;
			setIsNew(false);
			const response = await fetch(
				`http://localhost:3001/api/listing/${id.toString()}`,
			);
			if (!response.ok) {
				console.error(`${response.status} Error: ${response.statusText}`);
				return;
			}
			const listing = await response.json();
			if (!listing) {
				console.warn(
					`Listing with ID = ${id} does not exist, returning to listings`,
				);
				navigate("/");
				return;
			}
			setForm(listing);
		}
		fetchData();
		return;
	}, [params.id, navigate]); //run again if vars changed

	function updateForm(value) {
		return setForm((prev) => {
			return { ...prev, ...value }; //concat prev list with new list
		});
	}
	async function handleSubmit(e) {
		e.preventDefault();
		const listing = { ...form };
		try {
			let response;
			if (isNew) {
				//if adding new entity
				response = await fetch("http://localhost:3001/api/listing", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(listing),
				});
			} else {
				//else update existing
				response = await fetch(
					`http://localhost:3001/api/listing/${params.id}`,
					{
						method: "PATCH",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(listing),
					},
				);
			}
		} catch (error) {
			console.error(`Error fetching listing: ${error}`);
		} finally {
			setForm({ name: "", price: "", sellerName: "" });
			navigate("/");
		}
	}

	return (
		<>
			<h3>Create/Update Listing</h3>
			<div className="EntityEdit">
				<form onSubmit={handleSubmit} className="ListingForm">
					<label htmlFor="Name">Product Name</label>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Product Name"
						value={form.name}
						onChange={(e) => updateForm({ name: e.target.value })}
					></input>
					<label htmlFor="Price">Price</label>
					<input
						type="number"
						name="price"
						id="price"
						placeholder="1.00"
						value={form.price}
						onChange={(e) => updateForm({ price: e.target.value })}
					></input>
					<label htmlFor="Seller">Seller</label>
					<input
						type="text"
						name="seller_name"
						id="seller_name"
						placeholder="First Last"
						value={form.sellerName}
						onChange={(e) => updateForm({ sellerName: e.target.value })}
					></input>
					{isNew ? (
						<input type="submit" value="Post Listing"></input>
					) : (
						<input type="submit" value="Save Listing"></input>
					)}
				</form>
			</div>
		</>
	);
}
