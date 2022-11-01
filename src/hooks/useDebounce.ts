import { useEffect, useState } from 'react';
import { debounceTime, Subject } from 'rxjs';

export const useDebounce = <T>(time: number, cb: (arg: T) => void) => {
	const [subject] = useState(new Subject<T>());

	useEffect(() => {
		subject.pipe(debounceTime(time)).subscribe((val) => {
			cb(val);
		});

		return () => {
			console.log('USEEFFECT USE-DEBOUNCE ...');
			subject.unsubscribe();
		};
		//eslint-disable-next-line
	}, []);

	return (v: T) => subject.next(v);
};
