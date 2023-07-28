import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/material";
import Image from "./Image/Image";
import Description from "./Description/Description";
import useCardStyles from "./useCardStyles";

const ListCard = ({ title, subHeading, descriptionText, url, ingredients }) => {
	const classes = useCardStyles();
	return (
		<Card className={classes.card}>
			<CardContent>
				<Box
					style={{
						display: "flex",
						gap: 16,
					}}
				>
					<Image url={url} ingredients={ingredients} title={title} />
					<Description
						title={title}
						subHeading={subHeading}
						descriptionText={descriptionText}
					/>
				</Box>
			</CardContent>
		</Card>
	);
};

export default ListCard;
