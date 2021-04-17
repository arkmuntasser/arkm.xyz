import { useRouter } from 'next/router';
import { useEffect, useLayoutEffect, useState } from 'react';

export default function useLoadInAnimation(ref, content) {
	const [animReady, setAnimReady] = useState(false);
	const [routeStable, setRouteStable] = useState(true);
	const router = useRouter();

	useEffect(() => {
		setAnimReady(false);
		const children = [...ref.current.children];

		for (let i = 0; i < children.length; i++) {
			children[i].style.transitionDuration = `${400 + 80 * i}ms`;
		}

		const timer = setTimeout(() => {
			setAnimReady(true);
		}, 50);

		return () => {
			clearTimeout(timer);
		}
	}, [content]);

	useEffect(() => {
		router.events.on('routeChangeStart', () => setRouteStable(false));
		router.events.on('routeChangeComplete', () => setRouteStable(true));
	}, []);

	return animReady && routeStable;
}
