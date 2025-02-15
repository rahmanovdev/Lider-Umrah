import React from 'react';
import scss from './PackegesContent.module.scss';
import TrafficsSection from '../../home/TrafficsSection/TrafficsSection';
import TrafficFilters from '../../home/traffic-filters/TrafficFilters';

const PackegesContent = () => {
	return (
		<div className={scss.PackegesContent}>
			<div className='container'>
				<TrafficsSection>
					<TrafficFilters />
				</TrafficsSection>
			</div>
		</div>
	);
};

export default PackegesContent;
