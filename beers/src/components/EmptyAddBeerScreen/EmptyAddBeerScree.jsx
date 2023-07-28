import { Box } from "@mui/material";
import React from "react";
import useEmptyAddBeerScreeStyles from "./useEmptyAddBeerScreeStyles";

const EmptyAddBeerScree = ({ onClick }) => {
	const classes = useEmptyAddBeerScreeStyles();
	return (
		<Box className={classes.container}>
			<Box className={classes.titleStyle}>Nothing to see yet</Box>
			<Box>
				<span className={classes.labelStyle} onClick={onClick}>
					Click Here{" "}
				</span>
				<span className={classes.titleStyle}>to add your first beer</span>
			</Box>
		</Box>
	);
};

export default EmptyAddBeerScree;
