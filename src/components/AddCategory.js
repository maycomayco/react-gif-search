import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Input, IconButton, SearchIcon, Stack } from "@chakra-ui/react"

export const AddCategory = ({ setCategories }) => {
	const [inputValue, setInputValue] = useState('');

	// e es el event de onChange() en el input
	const handleInputValue = (e) => {
		setInputValue(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue.trim().length > 2) {
			// seteamos los nuevos valores a buscar, el ultimo ingresado primero
			setCategories( cats => [inputValue, ...cats] );
			setInputValue('');
		}
	}

	return(
		<Box as="form" width="100%" onSubmit={e => handleSubmit(e)}>
			<Stack spacing={0} direction="row">
				<Input
					name="query"
					value={inputValue}
					onChange={handleInputValue}
					placeholder="Search gif"
					backgroundColor="white"
					size="sm"
					color="blackAlpha.900"
					roundedRight={0}
				/>
				<IconButton
					aria-label="Search"
					icon={<img src="https://icongr.am/clarity/search.svg?size=20&color=#666"/>}
					roundedLeft={0}
					size="sm"
					p={2}
					onClick={e => handleSubmit(e)}
				/>
			</Stack>
		</Box>
	)
};

AddCategory.propTypes = {
	// declaro que propTypes es de tipo funcion y requerida
	setCategories: PropTypes.func.isRequired,
};