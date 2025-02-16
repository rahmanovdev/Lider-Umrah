import React from 'react';
import scss from './TrafficsSection.module.scss';
import TrafficCard from '@/components/ui/cards/traffic-card/TrafficCard';

const TrafficsSection: React.FC<React.PropsWithChildren> = ({children}) => {
	return (
		<section className={scss.Main}>
			<div className='container'>
				<div className={scss.content}>
					{children}

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

export default TrafficsSection;
