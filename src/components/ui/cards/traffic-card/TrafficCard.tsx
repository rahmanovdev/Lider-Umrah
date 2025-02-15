import React from 'react';
import scss from './TrafficCard.module.scss';
import Image from 'next/image';
import Link from 'next/link'

type TProps = {
	type: 'ekonom' | 'comfort';
};

const Type = {
	ekonom: 'Эконом',
	comfort: 'Комфорт'
};

const TrafficCard: React.FC<TProps> = ({ type }) => {
	return (
		<div className={`${scss[type]} ${scss.Main}`}>
			<h2>{Type[type]}</h2>
			<div className={scss.data_block}>
				<p>
					от <span>2 марта</span>
				</p>
				<div className={scss.line}></div>
				<p>
					до <span>19 марта</span>
				</p>
			</div>

			<div className={scss.img_block}>
				<Image
					src={'/assets/tarif_images/tarif_img.png'}
					alt=''
					width={700}
					height={300}
				/>
			</div>

			<div className={scss.card_container}>
				<div className={scss.line}>
					<h4>Ажы башчы:</h4>
					<h5>Lorem Ipsums</h5>
				</div>
				<hr className={scss.divider} />
				<div className={scss.line}>
					<h4>Колличество:</h4>
					<h5>120 мест</h5>
				</div>
				<hr className={scss.divider} />
				<div className={scss.line}>
					<h4>Длительность:</h4>
					<h5>14 дней</h5>
				</div>
				<hr className={scss.divider} />
				<div className={scss.line}>
					<h4>Гостиница:</h4>
					<h5>&&&</h5>
				</div>
			</div>

			<div className={scss.link}>
				<Link href={`/packages/${1}`}> Подробнее </Link>
			</div>
		</div>
	);
};

export default TrafficCard;
