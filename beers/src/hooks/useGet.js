import { useState, useEffect } from "react";
import axios from "axios";

const useGet = (url, params = {}, query = {}, options = {}) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios({
					method: "GET",
					url,
					params,
					data: query,
					...options,
				});
				setData(response.data);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [url, options, params, query]);

	return { data, error, loading };
};

export default useGet;
