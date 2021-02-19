import React from "react";
import { Box, Image, Text, Stack } from "@chakra-ui/react"

export const GifGridItem = ({title, url}) => {

	return(
		<Stack w="100%" className="animate__animated animate__fadeIn" overflow="hidden">
			<Image
				src={url}
				alt={title}
				boxSize="50"
				objectFit="cover"
				overflow="hidden"
			/>
			<Text as="i" fontSize="sm" isTruncated>{ title }</Text>
		</Stack>
	);
}