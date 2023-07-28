import React, { useCallback } from "react";
import useGet from "../../hooks/useGet";

const useTabs = () => {
	const [value, setValue] = React.useState(0);
	const [page, setPage] = React.useState(1);
	const [open, setOpen] = React.useState(false);

	const queryParams = {
		page: page,
		per_page: 10,
	};
	const { fetchData, data, loading, error } = useGet(
		"https://api.punkapi.com/v2/beers",
		queryParams
	);

	React.useEffect(() => {
		fetchData();
	}, []);

	const handlePageChange = React.useCallback(() => {
		setPage((prev) => prev + 1);
		fetchData();
	}, [page]);

	const handleClickOpen = useCallback(() => {
		setOpen(true);
	}, [open]);

	const handleClose = useCallback(() => {
		setOpen(false);
	}, [open]);

	return {
		data,
		error,
		loading,
		handlePageChange,
		value,
		setValue,
		handleClickOpen,
		handleClose,
		open,
	};
};

export default useTabs;
