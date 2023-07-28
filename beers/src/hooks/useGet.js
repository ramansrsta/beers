import { useState, useCallback, useMemo } from "react";
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

	const fetchData = useCallback(async () => {
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
	}, [memoizedConfig, memoizedQuery]);

	return { fetchData, data, loading, error };
};

export default useGet;
