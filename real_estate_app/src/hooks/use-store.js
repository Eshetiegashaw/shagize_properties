import { useState, useEffect } from "react";

/**
 * This hook fixes hydration issues when using persist to save hook data to localStorage
 */
export const useStore = (store, selector) => {
	const result = store(selector);
	const [data, setData] = useState();

	useEffect(() => {
		setData(result);
	}, [result]);

	return data;
};
