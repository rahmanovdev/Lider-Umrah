import React from 'react';
import scss from './TariffsSection.module.scss';
import TrafficCard from '@/components/ui/cards/traffic-card/TrafficCard';

const TariffsSection = () => {
	return (
		<section className={scss.Main}>
			<div className='container'>
				<div className={scss.content}>
					<h1>Тарифы</h1>

					<div className={scss.cards}>
						{Array.from({ length: 3 }).map((_, i) => (
							<TrafficCard
								type={i == 1 ? 'comfort' : 'ekonom'}
								key={`${i}-key`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default TariffsSection;
