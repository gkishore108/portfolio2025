'use client';

import HeroSection from './components/HeroSection';
import HeroSection2 from './components/HeroSection2';
import SkillsSection from './components/SkillsSection';
import AppShowcase from './components/AppShowcase';
import DevelopmentProcess from './components/DevelopmentProcess';
import ContactSection from './components/ContactSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection2 from './components/SkillsSection2';
import TechnicalExpertise from './components/TechnicalExpertise';
import FeaturedProjects from './components/FeaturedProjects';

export default function MobileDevPortfolio() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-x-hidden">
			<HeroSection2 />
			<HeroSection />
			<SkillsSection />
			<AppShowcase />
			<DevelopmentProcess />
			<SkillsSection2 />
			<ExperienceSection />
			<TechnicalExpertise />
			<FeaturedProjects />
			<ContactSection />
		</main>
	);
}
