import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";

const imgUrl = new URL("../../../assets/houzzBeer.png", import.meta.url).href;

const AddBeerModal = ({ open, handleClose, setMyBeers }) => {
	const [name, setName] = React.useState("");
	const [tagline, setTagLing] = React.useState("");
	const [description, setDescription] = React.useState("");

	const handleCancel = () => {
		handleClose();
		setName("");
		setTagLing("");
		setDescription("");
	};

	const handleSave = () => {
		const payload = {
			name,
			tagline,
			description,
		};

		setMyBeers((prev) => [...prev, payload]);
		handleCancel();
	};

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handleTagLineChange = (e) => {
		setTagLing(e.target.value);
	};

	const handleDescriptionChange = (e) => {
		setDescription(e.target.value);
	};
	return (
		<Dialog open={open} onClose={handleCancel} fullWidth>
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
					value={name}
					onChange={handleNameChange}
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
					value={tagline}
					onChange={handleTagLineChange}
					id="genre"
					label="Genere"
					type="type"
					fullWidth
					variant="outlined"
				/>
				<TextField
					autoFocus
					margin="dense"
					name={description}
					onChange={handleDescriptionChange}
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
				<Button onClick={handleCancel} style={{ color: "gray" }}>
					Cancel
				</Button>
				<Button onClick={handleSave} variant="contained" disabled={name === ""}>
					Save
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default AddBeerModal;
