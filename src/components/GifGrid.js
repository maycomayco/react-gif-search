import React from "react";

export const GifGrid = ({ category }) => {

	// esto deberia ser un servicio, iterarlo
	const getGifs = async() => {
		const api_key = 'mZR7gtiszIy2NobJHS9TRui5MWSiMlWV';
		const query = 'chavo';
		const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${api_key}&limit=5`;

		// revisar doc de fetch
		const resp = await fetch(url);
		const { data } = await resp.json(); //obtengo solo la property que necesito

		// esto deberia ser un trannsform, de lo que me devuelve la API original y lo que realmente necesita mi App
		const gifs = data.map( img => {
			return {
				id: img.id,
				title: img.title,
				img: img.images?.downsized_large.url, //con (?) decimos que si vienen images entonces lo utilizamos
			};
		});

		console.log(gifs);
	}

	getGifs();

	return(
		<>
			<h5>{category}</h5>
		</>
	);
}