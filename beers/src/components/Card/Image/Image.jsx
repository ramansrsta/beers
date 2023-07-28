import React from "react";
import { Box, Tooltip } from "@mui/material";

const Image = ({ url, ingredients, title }) => {
	const ingrdientsList = Object.keys(ingredients).map((key) => key);
	const tooltipContent = "Ingredients: " + ingrdientsList;

	return (
		<Tooltip title={tooltipContent} arrow placement="top">
			<Box mx={2}>
				<img
					style={{
						width: 50,
						height: 100,
					}}
					src={url}
					alt={title}
					loading="lazy"
				/>
			</Box>
		</Tooltip>
	);
};

export default Image;
