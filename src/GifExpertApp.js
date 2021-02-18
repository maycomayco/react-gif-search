import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import { Box, Stack, Heading } from "@chakra-ui/react"

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['Chavo']);

	return (
		<Box>
			<Stack>
				<Stack direction="row" padding={4} spacing={4} backgroundColor="gray.800" color="white">
					<Heading size="sm">Search Gif App</Heading>
					<AddCategory setCategories={ setCategories } />
				</Stack>
				<Box className="categories-list">
					<ol>
						{
							categories.map( cat => (
								<GifGrid
									key={ cat }
									category={ cat }
								/>
							))
						}
					</ol>
				</Box>
			</Stack>
		</Box>
	);
}