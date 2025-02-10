'use client';

import React from 'react';
import styles from './TrafficFilters.module.scss';
import { AnimatePresence, motion } from 'framer-motion';

const ValuesKey = {
	all: 'Бардык программалар',
	february: '1-февралдан 15-февралга чейинки умра сапарлары',
	march: '1-Марттан 31-мартка чейинки умра сапарлары',
	april: '1-Апрелден 30-апрелге чейинки умра сапарлары'
};

const TrafficFilters: React.FC = () => {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState<keyof typeof ValuesKey>('all');

	return (
		<div className={styles.traffic_filters}>
			<h1>Тарифы 2025-2026</h1>
			<div className={styles.dd_container}>
				<button onClick={() => setOpen(p => !p)}>{ValuesKey[value]}</button>
				<AnimatePresence initial={false}>
					{open && (
						<motion.div
							transition={{ type: 'spring', stiffness: 300, damping: 20 }}
							className={styles.dropdown}
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.95 }}
						>
							{Object.keys(ValuesKey).map(key => (
								<button
									key={key}
									onClick={() => {
										setValue(key as keyof typeof ValuesKey);
										setOpen(false);
									}}
								>
									{ValuesKey[key as keyof typeof ValuesKey]}
								</button>
							))}
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default TrafficFilters;
