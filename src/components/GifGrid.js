import React, { useEffect, useState } from "react";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {

	const [images, setImages] = useState([]);

	useEffect( () => {
		getGifs();
	}, []);

	// esto deberia ser un servicio, iterarlo
	const getGifs = async() => {
		const api_key = 'mZR7gtiszIy2NobJHS9TRui5MWSiMlWV';
		const query = 'chavo';
		const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${api_key}&limit=5`;

		// revisar doc de fetch
		const resp = await fetch(url);
		const { data } = await resp.json(); //obtengo solo la property que necesito

		// esto deberia ser un transform, de lo que me devuelve la API original y lo que realmente necesita mi App
		const gifs = data.map( img => {
			return {
				id: img.id,
				title: img.title,
				url: img.images?.downsized_large.url, //con (?) decimos que si vienen images entonces lo utilizamos
			};
		});

		console.log(gifs);
		setImages(gifs);
	}

	return(
		<>
			<h4>{category}</h4>
			{
				images.map( img =>
					<GifGridItem
						key={img.id}
						{...img} //paso todos los params que vengan en img, como singulares
					/>
				)
			}
		</>
	);
}