import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";

const imgUrl = new URL("../../../assets/houzzBeer.png", import.meta.url).href;

const AddBeerModal = ({ open, handleClose }) => {
	return (
		<Dialog open={open} onClose={handleClose} fullWidth>
			<DialogTitle>
				<Box
					style={{
						fontSize: "25px",
						fontWeight: "bold",
					}}
				>
					Add a New Beer
				</Box>
			</DialogTitle>
			<DialogContent>
				<Box>
					<img
						style={{
							width: 80,
							height: 100,
						}}
						src={imgUrl}
						alt="Beer Image"
						loading="lazy"
					/>
				</Box>
				<TextField
					autoFocus
					margin="dense"
					id="name"
					label="Beer Name"
					type="type"
					fullWidth
					variant="outlined"
				/>
				<TextField
					autoFocus
					margin="dense"
					id="genre"
					label="Genere"
					type="type"
					fullWidth
					variant="outlined"
				/>
				<TextField
					autoFocus
					margin="dense"
					id="description"
					multiline
					rows={4}
					label="Description"
					type="type"
					fullWidth
					variant="outlined"
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} style={{ color: "gray" }}>
					Cancel
				</Button>
				<Button onClick={handleClose} variant="contained">
					Save
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default AddBeerModal;
