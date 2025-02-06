'use client';
import React from 'react';
import scss from './WhyWe.module.scss';
import Image from 'next/image';
import { useTimeLine } from '@/hooks/use-time-line';
import { motion } from 'framer-motion';

const Whywe = () => {
	const { containerRef, height, heightTransform,  ref } =
		useTimeLine();
	return (
		<section className={scss.whywe}>
			<div className={`${scss.container} container`}>
				<h2>Что нас отличает от других компаний?</h2>
				<div className={scss['content']}>
					<figure className={scss['figure']}>
						<Image
							width={490}
							height={650}
							src='/assets/images/about-page-advantages.jpg'
							alt='about-page-advantages.jpg'
						/>
					</figure>
					<div className={scss.wrapper} ref={containerRef}>
						<div ref={ref} className={scss.timelineContainer}>
							{packages.map((item, index) => (
								<div
									key={index}
									className={`${index === 0 && scss.isFirst} ${
										scss.timelineEntry
									}`}
								>
									<div className={scss.timelineMark}>
										<div className={`${scss.markCircleOuter} ${''}`}>
											{index + 1}
										</div>
									</div>

									<div className={scss.contentWrapper}>
										<h3 className={scss.markTitle}>{item.title}</h3>
										{item.content}
									</div>
								</div>
							))}
							<div
								style={{
									height: height + 'px'
								}}
								className={scss.timelineLine}
							>
								<motion.div
									style={{
										height: heightTransform,
									}}
									className={scss.timelineProgress}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const packages = Array.from({ length: 20 }, () => ({
	title: `Работаем с 2006 года`,
	content: 'Один из самых первых и крупных Хадж/Умра операторов России'
}));

export default Whywe;
