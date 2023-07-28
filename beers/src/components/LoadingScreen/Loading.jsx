import React from "react";
import { Box } from "@mui/material";

const Loading = ({ text }) => {
	return (
		<Box
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				fontSize: "2rem",
			}}
		>
			{text}
		</Box>
	);
};

export default Loading;
