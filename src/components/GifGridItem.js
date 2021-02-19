import React from "react";
import { Box, Image, Text, Stack } from "@chakra-ui/react"

export const GifGridItem = ({title, url}) => {

	return(
		<Stack w="100%" h="100%" className="animate__animated animate__fadeIn" overflow="hidden">
			<Image
				src={url}
				alt={title}
				objectFit="cover"
				maxH="200px"
				h="200px"
			/>
			<Text as="i" fontSize="sm" isTruncated>{ title }</Text>
		</Stack>
	);
}