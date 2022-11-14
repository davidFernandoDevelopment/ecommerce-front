import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import React, { useLayoutEffect, useRef } from 'react';

export const useQuery = (
	setValue: (value: React.SetStateAction<string>) => void,
	deps: any[] = []
) => {
	const location = useLocation();
	let query = useRef<string | null>(null);

	useLayoutEffect(() => {
		let { q = '' } = queryString.parse(location.search) as { q: string };
		if (!q) return;
		setValue(q);
		query.current = q;
		console.log({ location, q });
		//eslint-disable-next-line
	}, [...deps, location]);

	return query.current;
};
