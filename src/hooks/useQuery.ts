import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useLayoutEffect, useState } from 'react';

export const useQuery = (deps: any[] = []) => {
	const location = useLocation();
	const [query, setQuery] = useState<string>('');

	useLayoutEffect(() => {
		let { q = '' } = queryString.parse(location.search) as { q: string };
		if (!q) return;
		setQuery(q);
		console.log({ location, q });
		//eslint-disable-next-line
	}, [...deps, location]);

	return query;
};
