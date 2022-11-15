import { useEffect, useState } from 'react';
import { debounceTime, Subject } from 'rxjs';

export const useDebounce = <T>(
	time: number,
	cb: (arg: T) => void,
	depsCB: any[] = []
) => {
	const [subject] = useState(new Subject<T>());

	useEffect(() => {

		const subscription = subject.pipe(debounceTime(time)).subscribe((val) => {
			cb(val);
		});

		return () => {
			console.log('USEEFFECT USE-DEBOUNCE ...');
			subscription.unsubscribe();
		};
		//eslint-disable-next-line
	}, [...depsCB]);

	return [(v: T) => subject.next(v)];
};
