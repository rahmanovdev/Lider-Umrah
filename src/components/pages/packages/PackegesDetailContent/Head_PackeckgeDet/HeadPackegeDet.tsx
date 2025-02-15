import React from 'react';
import scss from './HeadPackegeDet.module.scss';

const HeadPackegeDet = () => {
	// Бекендден келген маалымат
	const hajjLeader = {
		name: 'Максат Ажы Токтомушев',
		image: '/path/to/leader-image.jpg',
		description:
			'Көп жылдык тажрыйбага ээ, көптөгөн зыяратчыларды ийгиликтүү коштоп барган.'
	};

	return (
		<div className={scss.HeadPackegeDet}>
			<div className='container'>
				<div className={scss.content}>
					<div className={scss.card_container}>
						<div className={scss.info_card}>
							<div className={scss.date_range}>
								<div className={scss.date_item}>
									<div className={scss.month_year}>
										<h1>10</h1>
										<div className={scss.month}>
											<h5>Февраль</h5>
											<h5>2025</h5>
										</div>
									</div>
								</div>
								<div className={scss.line} />
								<div className={scss.date_item}>
									<div className={scss.month_year}>
										<h1>24</h1>
										<div className={scss.month}>
											<h5>Февраль</h5>
											<h5>2025</h5>
										</div>
									</div>
								</div>
							</div>
							<hr />
							<div className={scss.text_card}>
								<h2>Кумуш пакети</h2>
								<p>
									Эң популярдуу Аль-Харамга 800 м. чейинки аралыкта, 4-5*
									мейманканаларда жашоочу программа.
								</p>
								<button>Подробнее</button>
							</div>
						</div>
						<div className={scss.image_card}>
							<div className={scss.leader_container}>
								<div className={scss.leader_header}>
									<h3>Ажы башчы менен</h3>
								</div>
								<div className={scss.leader_content}>
									<div className={scss.leader_image}>
										<img
											src='https://bulak.kg/wp-content/uploads/2022/08/maksat-tok.jpg'
											alt={hajjLeader.name}
										/>
									</div>
									<div className={scss.leader_info}>
										<h4>{hajjLeader.name}</h4>
										<p>{hajjLeader.description}</p>
										<button className={scss.leader_button}>
											Ажы башчы жонундо маалымат
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className={scss.call_buttons}>
						<button>Арыз берүү</button>
						<button>Ватсапка жазуу</button>
						<button>Чалуу</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeadPackegeDet;
