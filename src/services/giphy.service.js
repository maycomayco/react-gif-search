export	const getGifs = async(category) => {
	const api_key = 'mZR7gtiszIy2NobJHS9TRui5MWSiMlWV';
	const query = encodeURI(category);
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

	return gifs;
}