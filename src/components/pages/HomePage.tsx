import React from 'react';
import scss from './HomePage.module.scss';
import HeroSection from './home/HeroSection/HeroSection';
import AboutSection from './home/AboutSection/AboutSection';
import StepsHajjSection from './home/StepsOfHajjSection/StepsHajjSection';
import QuestionsSection from './home/QuestionsSection/QuestionsSection';
import InformationSection from './home/InformationSection/InformationSection';
import TrafficsSection from './home/TrafficsSection/TrafficsSection';
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'

const HomePage = () => {
	return (
		<>
			<div className={scss.HomePage}>
				<HeroSection />
				<AboutSection />
				<TrafficsSection>
					<div className={scss.row}>
						<h1>Тарифы 2025-2026</h1>
						<Link href='/packages'>
							Баардык таарифтер
							<IoIosArrowForward size={20} />
						</Link>
					</div>
				</TrafficsSection>
				<StepsHajjSection />
				<QuestionsSection />
				<InformationSection />
			</div>
		</>
	);
};

export default HomePage;
