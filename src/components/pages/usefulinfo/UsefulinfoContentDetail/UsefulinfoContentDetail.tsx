'use client';
import React from 'react';
import scss from './UsefulinfoContentDetail.module.scss';
import { motion } from 'framer-motion';
import { useTimeLine } from '@/hooks/use-time-line';

const packages = Array.from({ length: 5 }, (_, i) => ({
	title: `Lorem ipsum dolor sit amet consectetur.`,
	id: `section-${i}`,
	content: (
		<div className={scss.content}>
			<div className={scss['img-card']}></div>
			Lorem ipsum dolor sit amet consectetur. Non commodo a in vitae rhoncus
			sit. Sed ultrices nunc ultrices scelerisque quis eget. Elementum aliquam
			fringilla turpis aliquet aenean enim. Eget elit cras egestas adipiscing
			eget consectetur diam vulputate. A quisque lorem turpis viverra semper
			orci. Tempor enim libero sit nec mattis dictum. Gravida eleifend sagittis
			feugiat lorem massa augue. Ultricies augue sollicitudin consectetur mauris
			massa. Senectus mauris tempor elementum velit a imperdiet aliquam eu. Et
			sem morbi scelerisque accumsan. Massa habitasse pretium in faucibus et
			aenean vel dui. Libero at urna id nisi placerat malesuada sed est nunc.
			Mattis leo vitae iaculis lectus tempus pellentesque sed sit dolor. Nulla
			vestibulum urna augue turpis tempus iaculis felis. Et sem morbi
			scelerisque accumsan. Massa habitasse pretium in faucibus et aenean vel
			dui. Libero at urna id nisi placerat malesuada sed est nunc. Mattis leo
			vitae iaculis lectus tempus pellentesque sed sit dolor. Nulla vestibulum
			urna augue turpis tempus iaculis felis.
		</div>
	)
}));

const UsefulinfoContentDetail = () => {
	const { containerRef, height, heightTransform, ref, activeSections } =
		useTimeLine();

	return (
		<div className={scss.pageContainer}>
			<h4 className={scss.title}>Полезные информации</h4>
			<div className={scss.wrapper} ref={containerRef}>
				<div ref={ref} className={scss.timelineContainer}>
					{packages.map((item, index) => (
						<div
							key={index}
							className={`${index === 0 && scss.isFirst} ${scss.timelineEntry}`}
						>
							<div data-timeline-mark className={scss.timelineMark}>
								<div
									className={`${scss.markCircleOuter} ${
										activeSections.includes(index) ? scss.active : ''
									}`}
								>
									{index + 1}
								</div>
							</div>
							<div className={scss.contentWrapper}>
								<h3 className={scss.markTitle}>{item.title}</h3>
								{item.content}
							</div>
						</div>
					))}
					<div style={{ height: height + 'px' }} className={scss.timelineLine}>
						<motion.div
							style={{ height: heightTransform }}
							className={scss.timelineProgress}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UsefulinfoContentDetail;
