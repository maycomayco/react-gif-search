import React from "react";
import { Box, Image } from "@chakra-ui/react"

export const GifGridItem = ({title, url}) => {

	return(
		<Box className="card animate__animated animate__fadeIn">
			<Image
				src={url}
				alt={title}
				// boxSize="50"
				// objectFit="none"
			/>
			<p><i>{title}</i></p>
		</Box>
	);
}