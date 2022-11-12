import { useEffect, useRef, useState } from 'react';

type Status = 'loading' | 'loaded' | 'error';
type Response = [Status, HTMLImageElement];

export const useImageStatus = (src: string): Response => {
	const image = useRef<HTMLImageElement>(new Image());
	const [status, setStatus] = useState<Status>('loading');

	useEffect(() => {
		let active = true;
		image.current.src = src;

		image.current.onload = () => {
			if (!active) return;
			setStatus('loaded');
		};
		image.current.onerror = () => {
			if (!active) return;
			setStatus('error');
		};

		return () => {
			active = false;
		};
	}, [src]);

	return [status, image.current];
};
