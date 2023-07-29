import * as React from "react";
import Box from "@mui/material/Box";
import ListCard from "../Card/Card";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button, Grid } from "@mui/material";
import Loading from "../LoadingScreen/Loading";
import useTabs from "./useTabs";
import useTabStyles from "./useTabStyles";
import AddBeerModal from "../modals/AddBeerModal/AddBeerModal";
import EmptyAddBeerScree from "../EmptyAddBeerScreen/EmptyAddBeerScree";

const url_for_image = new URL("../../assets/houzzBeer.png", import.meta.url)
	.href;

export default function BeerTabs() {
	const classes = useTabStyles();
	const {
		data,
		error,
		loading,
		handlePageChange,
		value,
		setValue,
		handleClickOpen,
		handleClose,
		open,
		myBeers,
		setMyBeers,
	} = useTabs();

	if (error) return <Loading text="Error Loading Data..." />;
	if (loading) return <Loading text="Loading...." />;

	const tabStyle = {
		cursor: "pointer",
		fontSize: "20px",
		fontWeight: "bold",
	};

	return (
		<>
			<AddBeerModal
				open={open}
				handleClose={handleClose}
				setMyBeers={setMyBeers}
			/>
			<Box mt={10}>
				<Box mb={2}>
					<Box className={classes.containerStyle}>
						<Box
							onClick={() => setValue(0)}
							style={{
								...tabStyle,
								color: value === 0 ? "black" : "gray",
							}}
						>
							All Beers
						</Box>
						<Box
							onClick={() => setValue(1)}
							style={{
								...tabStyle,
								color: value === 1 ? "black" : "gray",
							}}
						>
							My Beers
						</Box>
					</Box>
					{value === 1 && (
						<Box mt={-4} className={classes.addBeersStyle}>
							<Button variant="contained" onClick={handleClickOpen}>
								Add a new Beer
							</Button>
						</Box>
					)}
				</Box>
				{value === 0 && (
					<Box>
						{data?.length > 0 ? (
							<Grid container spacing={2}>
								{data?.map((beer) => (
									<Grid key={beer?.id} item md={12} sm={6}>
										<Box mb={2}>
											<ListCard
												title={beer?.name}
												subHeading={beer?.tagline}
												descriptionText={beer?.description}
												url={beer?.image_url}
												ingredients={beer?.ingredients}
											/>
										</Box>
									</Grid>
								))}
							</Grid>
						) : (
							<Loading text="No Data Found" />
						)}
						<Box>
							<Box className={classes.loadMoreStyle} onClick={handlePageChange}>
								Load More <KeyboardArrowDownIcon />
							</Box>
						</Box>
					</Box>
				)}

				{value === 1 && (
					<Box>
						{myBeers?.length > 0 ? (
							<Grid container spacing={2}>
								{myBeers?.map((beer, index) => (
									<Grid key={index} item md={12} sm={6}>
										<Box mb={2}>
											<ListCard
												title={beer?.name}
												subHeading={beer?.tagline}
												descriptionText={beer?.description}
												url={url_for_image}
											/>
										</Box>
									</Grid>
								))}
							</Grid>
						) : (
							<EmptyAddBeerScree onClick={handleClickOpen} />
						)}
					</Box>
				)}
			</Box>
		</>
	);
}
