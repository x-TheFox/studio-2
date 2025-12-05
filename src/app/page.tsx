import { Header } from '@/components/landing/header';
import { HeroSection } from '@/components/landing/hero-section';
import { AboutSection } from '@/components/landing/about-section';
import { SkillsSection } from '@/components/landing/skills-section';
import { ProjectsSection } from '@/components/landing/projects-section';
import { ProjectGallerySection } from '@/components/landing/project-gallery-section';
import { CertificatesSection } from '@/components/landing/certificates-section';
import { EducationSection } from '@/components/landing/education-section';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ProjectGallerySection />
        <CertificatesSection />
        <EducationSection />
      </main>
      <Footer />
    </div>
  );
}
