import React, { useEffect, useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../services/giphy.service";
import { GifGridItem } from "./GifGridItem";
import { Heading, SimpleGrid, Box } from "@chakra-ui/react"

export const GifGrid = ({ category }) => {

	// cuando estamos haciendo la desestructuracion estamos renombrando data por images 'data:images
	const { data:images, loading } = useFetchGifs( category );

	return(
		<>
			<Heading size="sm">You searched for: {category}</Heading>
			<hr />
			{/* forma corta un operador ternario sin else */}
			{ loading && <p>Loading...</p>}
			<SimpleGrid columns={{sm: 2, lg: 3, xl:4}} spacing={5}>
				{
					images.map( img =>
						<GifGridItem
							key={img.id}
							{...img} //paso todos los params que vengan en img, como singulares
						/>
					)
				}
			</SimpleGrid>
		</>
	);
}