import React, { useEffect, useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../services/giphy.service";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {

	// cuando estamos haciendo la desestructuracion estamos renombrando data por images 'data:images
	const { data:images, loading } = useFetchGifs( category );

	return(
		<>
			<h4>{category}</h4>
			{/* forma corta un operador ternario sin else */}
			{ loading && <p>Loading...</p>}
			<div className='card-grid'>
				{
					images.map( img =>
						<GifGridItem
							key={img.id}
							{...img} //paso todos los params que vengan en img, como singulares
						/>
					)
				}
			</div>
		</>
	);
}