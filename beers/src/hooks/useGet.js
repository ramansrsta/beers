import { useState, useEffect, useMemo } from "react";
import axios from "axios";

const useGet = (url, params = {}, query = {}, options = {}) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	const memoizedConfig = useMemo(
		() => ({ url, params, ...options }),
		[url, options, params]
	);
	const memoizedQuery = useMemo(() => query, [query]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios({
					method: "GET",
					...memoizedConfig,
					data: memoizedQuery,
				});
				setData(response.data);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [memoizedConfig, memoizedQuery]);

	return { data, error, loading };
};

export default useGet;
