'use client';
import React, { useState } from 'react';
import {
	MdCalendarMonth,
	MdLocationOn,
	MdThumbUp,
	MdThumbDown
} from 'react-icons/md';
import styles from './AboutProgramDet.module.scss';
import clsx from 'clsx';

const sections = [
	{
		title: 'Питание',
		content: 'Lorem ipsum dolor sit amet consectetur...',
		icon: <MdCalendarMonth className={styles.icon} />
	},
	{
		title: 'Какие места посетим',
		content: 'каыраыдра',
		icon: <MdLocationOn className={styles.icon} />
	},
	{
		title: 'Мы рекомендуем!',
		content: 'Lorem ipsum dolor sit amet consectetur...',
		icon: <MdThumbUp className={styles.icon} />
	},
	{
		title: 'Не рекомендуем',
		content: 'Lorem ipsum dolor sit amet consectetur...',
		icon: <MdThumbDown className={styles.icon} />
	},
	{
		title: 'Вам дадим ',
		content: 'Lorem ipsum dolor sit amet consectetur...',
		icon: <MdThumbDown className={styles.icon} />
	}
];

const AboutProgramDet = () => {
	const [activeIndex, setActiveIndex] = useState(1);

	return (
		<div className='container'>
			<div className={styles.sectionList}>
				{sections.map((section, index) => (
					<button
						key={index}
						className={clsx(styles.sectionButton, {
							[styles.active]: index === activeIndex
						})}
						onClick={() => setActiveIndex(index)}
					>
						<div className={styles.dots_border}></div>
						<span className={styles.buttonText}>{section.title}</span>
						<div className={styles.iconContainer}>
							<span className={styles.iconWrapper}>{section.icon}</span>
						</div>
					</button>
				))}
			</div>

			{activeIndex !== null && (
				<div className={styles.contentCard}>
					<div className={styles.imageContainer}></div>
					<div className={styles.textContent}>
						{sections[activeIndex].content}
					</div>
				</div>
			)}
		</div>
	);
};

export default AboutProgramDet;
