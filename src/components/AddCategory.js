import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
	const [inputValue, setInputValue] = useState('');

	// e es el event de onChange() en el input
	const handleInputValue = (e) => {
		setInputValue(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue.trim().length > 2) {
			setCategories( cats => [...cats, inputValue] );
			setInputValue('');
		}
	}

	return(
		<form onSubmit={e => handleSubmit(e)}>
			<input
				type="text"
				value={inputValue}
				onChange={handleInputValue}
				placeholder="Search gif"
			/>
		</form>
	)
};

AddCategory.propTypes = {
	// declaro que propTypes es de tipo funcion y requerida
	setCategories: PropTypes.func.isRequired,
};