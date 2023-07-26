import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Description from "../Description/Description";

const ListCard = ({ title, subHeading, descriptionText }) => {
	return (
		<Card>
			<CardContent>
				<Description
					title={title}
					subHeading={subHeading}
					descriptionText={descriptionText}
				/>
			</CardContent>
		</Card>
	);
};

export default ListCard;
