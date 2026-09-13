import { createBrowserRouter, RouterProvider } from "react-router-dom"; //only reload components that changed in order to refresh the page
import { StrictMode } from "react";
import Listing from "./components/Listing";
import SynthPage from "./components/SynthPage.jsx";
import NotFound404 from "./components/NotFound404.jsx";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const router = createBrowserRouter([
	//(READ ALL) entity list page
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <SynthPage />,
			},
		],
	},
	// //(UPDATE ONE) shows app and update single entity
	// {
	// 	path: "/edit/:id",
	// 	element: <App />,
	// 	children: [
	// 		{
	// 			path: "/edit/:id",
	// 			element: <Listing />,
	// 		},
	// 	],
	// },
	// //(CREATE ONE)
	// {
	// 	path: "/create",
	// 	element: <App />,
	// 	children: [
	// 		{
	// 			path: "/create",
	// 			element: <Listing />,
	// 		},
	// 	],
	// },
	//TODO path not found
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/*",
				element: <NotFound404 />,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
