import { makeStyles } from "@mui/styles";

const commonStyle = {
	fontSize: "20px",
	fontWeight: "bold",
};

const useEmptyAddBeerScreeStyles = makeStyles((theme) => ({
	container: {
		width: "100%",
		height: "84.5vh",
		background: "lightgray",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		gap: 12,
	},
	labelStyle: {
		...commonStyle,
		color: theme.palette.primary.main,
		cursor: "pointer",
	},
	titleStyle: {
		...commonStyle,
	},
}));

export default useEmptyAddBeerScreeStyles;
