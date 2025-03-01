import Hero from '@/components/Hero';
import ManageMembership from '@/components/ManageMembership';
import EngageSupporters from '@/components/EngageSupporters';
import GrowGroup from '@/components/GrowGroup';
import Testimonials from '@/components/Testimonials';
import PlatformFeatures from '@/components/PlatformFeatures';
import Partners from '@/components/Partners';
import WaveDivider from '@/components/WaveDivider';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ManageMembership />
      <WaveDivider position="top" />
      <EngageSupporters />
      <GrowGroup />
      <WaveDivider position="bottom" />
      <Testimonials />
      <PlatformFeatures />
      <Partners />
    </div>
  );
}