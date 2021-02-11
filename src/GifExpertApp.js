import react, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

	const [categories, setCategories] = useState(['Chavo']);

	return (
		<>
			<h2>Search gif App</h2>
			<AddCategory setCategories={ setCategories } />
			<hr />
			<div className="categories-list">
				<ol>
					{
						categories.map( cat => (
							// <li key={ cat }>{ cat }</li>
							<GifGrid
								key={ cat }
								category={ cat }
							/>
						))
					}
				</ol>
			</div>
		</>
	);
}