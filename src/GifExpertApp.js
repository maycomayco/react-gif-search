import react, { useState } from "react";

export const GifExpertApp = () => {

	const [categories, setCategories] = useState(['First element', 'Second element', 'Third element']);

	const handleAdd = () => {
		// agregamos el elemento al final
		// setCategories( [...categories, 'Fourt element'] );
		// agregamos el elemento al inicio
		// setCategories( ['Fourt element', ...categories] );
		// utilizando un callback, el param que recibe es el estado anterior
		setCategories( cats => [...cats, 'Fourt element']);
	}

	return (
		<>
			<h2>Gif Expert App</h2>
			<hr />

			<button onClick={ handleAdd }>Agregar</button>

			<ol>
				{
					categories.map( cat => {
						return <li key={ cat }>{ cat }</li>
					})
				}
			</ol>
		</>
	);
}