import { makeStyles } from "@mui/styles";

const useCardStyles = makeStyles((theme) => ({
	card: {
		padding: theme.spacing(2),
		borderRadius: theme.spacing(1),
		transition: "box-shadow 0.3s ease-in-out",
		"&:hover": {
			boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.15)",
			background: "lightblue",
		},
	},
}));

export default useCardStyles;
