import React, { useEffect, useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../services/giphy.service";
import { GifGridItem } from "./GifGridItem";
import { Heading, SimpleGrid, Box, Grid } from "@chakra-ui/react"

export const GifGrid = ({ category }) => {

	// cuando estamos haciendo la desestructuracion estamos renombrando data por images 'data:images
	const { data:images, loading } = useFetchGifs( category );

	return(
		<>
			<Heading size="sm" pb={3}>You searched for: {category}</Heading>
			<hr />
			{/* forma corta un operador ternario sin else */}
			{ loading && <p>Loading...</p>}
			<Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={5}>
				{
					images.map( img =>
						<GifGridItem
							key={img.id}
							{...img} //paso todos los params que vengan en img, como singulares
						/>
					)
				}
			</Grid>
		</>
	);
}