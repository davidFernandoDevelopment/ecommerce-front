import { useEffect } from 'react';

export const useHiddenBottomBar = (cb?: Function, deps: any[] = []) => {
	useEffect(() => {
		cb && cb();
		document.body.classList.add('hidden-bottom-bar');

		return () => {
			document.body.classList.remove('hidden-bottom-bar');
		};
		//eslint-disable-next-line
	}, deps);
};
