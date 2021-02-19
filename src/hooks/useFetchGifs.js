import { useEffect, useState } from "react"
import { getGifs, getGifsRandom } from "../services/giphy.service";

export const useFetchGifs = (category) => {

	const [state, setState] = useState({
		data: [],
		loading: true,
	});

	useEffect( () => {
		// getGifs(category)
		getGifsRandom()
			.then(images => setState({
				data: images,
				loading: false
			}));
	}, [category]);
	// si cambia category se vuelve a disparar el hook

	return state;
}