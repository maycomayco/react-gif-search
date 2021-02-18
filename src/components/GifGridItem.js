import React from "react";
import { Box, Image, Text } from "@chakra-ui/react"

export const GifGridItem = ({title, url}) => {

	return(
		<Box className="animate__animated animate__fadeIn">
			<Image
				src={url}
				alt={title}
				boxSize="50"
				objectFit="cover"
			/>
			<Text as="i" fontSize="sm" isTruncated>{ title }</Text>
		</Box>
	);
}