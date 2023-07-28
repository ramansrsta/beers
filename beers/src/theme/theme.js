import { createTheme } from "@mui/material/styles";
import { blue, orange } from "@mui/material/colors";

const theme = createTheme({
	palette: {
		primary: { main: blue[800] },
		secondary: { main: orange[400] },
	},
});

export default theme;
