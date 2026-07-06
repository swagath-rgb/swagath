import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ShowcaseSection from '@/components/ShowcaseSection';
import CourseSection from '@/components/CourseSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="relative">
      {/* Decorative Background Orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-800/20 rounded-full blur-3xl" />
        <div className="absolute top-3/4 -right-32 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-3xl" />
      </div>

      <Navbar />
      <HeroSection />
      <ShowcaseSection />
      <CourseSection />
      <Footer />
    </main>
  );
}
