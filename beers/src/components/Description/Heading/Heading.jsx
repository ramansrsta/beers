import React from "react";
import { Typography } from "@mui/material";

const Heading = ({ title }) => {
	return (
		<>
			<Typography sx={{ fontSize: 16 }}>{title}</Typography>
		</>
	);
};

export default Heading;
