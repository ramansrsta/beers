import { makeStyles } from "@mui/styles";

const useTabStyles = makeStyles((theme) => ({
	loadMoreStyle: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		color: theme.palette.primary.main,
		cursor: "pointer",
	},
	addBeersStyle: {
		display: "flex",
		justifyContent: "flex-end",
	},
	containerStyle: {
		display: "flex",
		gap: 8,
	},
}));

export default useTabStyles;
