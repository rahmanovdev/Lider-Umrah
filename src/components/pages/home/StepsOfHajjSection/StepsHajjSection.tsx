'use client';
import * as React from 'react';
import scss from './StepsHajjSection.module.scss';
import Image from 'next/image';
import img1 from '../../../../../public/assets/stepsOfHadj_img/hadj-stage1.png';
import img2 from '../../../../../public/assets/stepsOfHadj_img/hadj-stage2.png';
import img3 from '../../../../../public/assets/stepsOfHadj_img/hadj-stage3.png';
import img4 from '../../../../../public/assets/stepsOfHadj_img/hadj-stage4.png';
import img5 from '../../../../../public/assets/stepsOfHadj_img/hadj-stage5.png';

const colors: Record<number, string> = {
	1: 'rgb(251, 218, 205)',
	2: 'rgb(113, 255, 175)',
	3: 'rgb(183, 241, 238)',
	4: 'rgb(251, 225, 188)',
	5: 'rgb(193, 231, 249)'
};

const steps = [
	{ title: 'Хадж: порядок исполнения', img: img1 },
	{ title: 'Ихрам', img: img2 },
	{ title: 'Арафа', img: img3 },
	{ title: 'Таваф', img: img4 },
	{ title: 'Са’й', img: img5 }
];

const StepsHajjSection = () => {
	const [currentStep, setCurrentStep] = React.useState(1);

	React.useEffect(() => {
		const interval = setInterval(() => {
			setCurrentStep(prevStep => (prevStep < 5 ? prevStep + 1 : 1));
		}, 2000);

		return () => clearInterval(interval);
	}, []);

	return (
		<section className={scss.Main}>
			<div
				className={scss['bg']}
				style={{
					background: colors[currentStep]
				}}
			></div>
			<div className={scss.pre_main}>
				<div className='container'>
					<div className={scss.content}>
						<h1>Столпы хаджа и обязательные действия</h1>
						<div className={scss.block_content}>
							{steps.map((step, index) => {
								const isActive = currentStep === index + 1;
								return (
									<div
										id={`step-${index}`}
										key={index}
										className={`${scss.block} ${
											isActive ? scss.active : scss.inactive
										}`}
										style={{
											background: colors[index + 1]
										}}
									>
										<h2>{step.title}</h2>
										<Image src={step.img} alt='' width={700} height={300} />
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default StepsHajjSection;
