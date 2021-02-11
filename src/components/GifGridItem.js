import React from "react";

export const GifGridItem = ({title, url}) => {

	return(
		<div>
			<img src={url} alt={title} />
			<p><i>{title}</i></p>
		</div>
	);
}