import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Description from "../Description/Description";
import { Box } from "@mui/material";
import Image from "../Image/Image";

const ListCard = ({ title, subHeading, descriptionText, url, ingredients }) => {
	return (
		<Card>
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
