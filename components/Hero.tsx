import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative">
      <div 
        className="bg-cover bg-center h-[500px] flex items-center justify-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.6)"
        }}
      >
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Membership. Simplified.</h1>
          <p className="text-xl text-white mb-8">All-in-one platform for managing your organization</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg">
              Try It Free
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Request a Demo
            </Button>
          </div>
        </div>
      </div>
      
      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-16 sm:h-24"
          fill="white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;