import { AxiosResponse } from 'axios';
import { useEffect } from 'react';

export const useAsync = (
	asyncFn: () => Promise<AxiosResponse<any, any>>,
	successFunction: Function,
	returnFunction: Function,
	dependencies: any[] = []
) => {
	useEffect(() => {
		let isMounted = true;

		asyncFn().then((result) => {
			if (isMounted) successFunction(result.data);
		});

		return () => {
			returnFunction && returnFunction();
			isMounted = false;
		};
		// eslint-disable-next-line
	}, dependencies);
};
