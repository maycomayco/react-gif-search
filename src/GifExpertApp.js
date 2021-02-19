import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import { Box, Stack, Heading, Container, List } from "@chakra-ui/react"

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['']);
	// const [categories, setCategories] = useState(['Chavo']);

	return (
		<Box>
			<Stack direction="row" padding={4} spacing={4} backgroundColor="gray.800" color="white">
				<Heading size="sm" minW="125px" p="6px 0">Search Gif App</Heading>
				<AddCategory setCategories={ setCategories } />
			</Stack>
			<Box p={4}>
				{
					categories.map( cat => (
						<GifGrid
							key={ cat }
							category={ cat }
						/>
					))
				}
			</Box>
		</Box>
	);
}