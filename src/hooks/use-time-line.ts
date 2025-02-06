'use client';

import { useScroll, useTransform } from 'framer-motion';
import React from 'react';

export const useTimeLine = () => {
	const ref = React.useRef<HTMLDivElement>(null);
	const containerRef = React.useRef<HTMLDivElement>(null);
	const [height, setHeight] = React.useState(0);

	React.useEffect(() => {
		if (ref.current) {
			const rect = ref.current.getBoundingClientRect();
			setHeight(rect.height);
		}
	}, [ref]);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start 10%', 'end 50%']
	});

	const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
	return {
		heightTransform,
		height,
		ref,
		containerRef
	};
};
