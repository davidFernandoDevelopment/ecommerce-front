import queryString from 'query-string';
import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useQuery = (
	setValue: (value: React.SetStateAction<string>) => void,
	deps: any[] = []
) => {
	const location = useLocation();

	useLayoutEffect(() => {
		let { q = '' } = queryString.parse(location.search) as { q: string };
		if (q) setValue(q);
		//eslint-disable-next-line
	}, [...deps, location]);
};
