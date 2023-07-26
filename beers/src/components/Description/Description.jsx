import React from "react";
import Heading from "./Heading/Heading";
import SubHeading from "./SubHeading/subHeading";
import { Box, Typography } from "@mui/material";

const Description = ({ title, subHeading, descriptionText }) => {
	return (
		<>
			<Box>
				<Heading title={title} />
				<SubHeading subHeading={subHeading} />
				<Typography sx={{ fontSize: 14 }}>{descriptionText}</Typography>
			</Box>
		</>
	);
};

export default Description;
