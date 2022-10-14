import { AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';

import { AxiosCall } from '../models';

export const useFetch = () => {
	const [loading, setLoading] = useState(false);
	let controller: AbortController;

	const callEndpoint = async (axiosCall: AxiosCall<any>) => {
		if (axiosCall.controller) controller = axiosCall.controller;

		setLoading(true);
		let result = {} as AxiosResponse<any>;

		try {
			result = await axiosCall.call;
		} catch (err) {}
		setLoading(false);
		return result;
	};

	const cancelEndpoint = () => {
		setLoading(false);
		controller && controller.abort();
	};

	useEffect(() => {
		return () => {
			cancelEndpoint();
		};
		// eslint-disable-next-line
	}, []);

	return { loading, callEndpoint };
};
