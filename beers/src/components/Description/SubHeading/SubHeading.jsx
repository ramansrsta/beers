import React from "react";
import { Typography, useTheme } from "@mui/material";

const SubHeading = ({ subHeading }) => {
	const theme = useTheme();

	return (
		<>
			<Typography
				sx={{ fontSize: 14 }}
				style={{ color: theme.palette.secondary.main }}
			>
				{subHeading}
			</Typography>
		</>
	);
};

export default SubHeading;
