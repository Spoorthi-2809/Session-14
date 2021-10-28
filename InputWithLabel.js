import React, { useEffect, useRef, useState } from "react";

const InputWithLabel = ({ 
	id, 
	label, 
	type, 
	value, 
	onInputChange,
}) => (
	return (
		<>
			<label htmlFor={id}>{children}</label>
			<input 
				style={{ 
					display: "block", 
					padding: "1rem", 
					border: "none",
					outline: "none",
					borderRadius: 4px,
				}} 
				id={id} 
				type={type} 
				value={value}  
				onChange={onInputChange} 
		/>
	);
};

export default InputWithLabel;