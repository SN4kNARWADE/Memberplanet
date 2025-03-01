import Image from 'next/image';
import { Button } from '@/components/ui/button';

const features = [
  {
    title: "Membership Management",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300&q=80",
    color: "bg-cyan-500"
  },
  {
    title: "Fundraising",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300&q=80",
    color: "bg-cyan-500"
  },
  {
    title: "Events",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300&q=80",
    color: "bg-cyan-500"
  },
  {
    title: "Communications",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300&q=80",
    color: "bg-cyan-500"
  },
  {
    title: "Surveys",
    image: "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300&q=80",
    color: "bg-cyan-500"
  },
  {
    title: "Mobile App",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300&q=80",
    color: "bg-cyan-500"
  },
  {
    title: "Payment Processing",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300&q=80",
    color: "bg-cyan-500"
  },
  {
    title: "Tech Support",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300&q=80",
    color: "bg-cyan-500"
  }
];

const PlatformFeatures = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          The platform that empowers growth for organizations. Find out if it's right for you.
        </h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {features.map((feature, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <div className="relative h-64">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              </div>
              <div className={`absolute top-0 left-0 w-full h-1 ${feature.color}`}></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center">
        <Button className="bg-cyan-500 hover:bg-cyan-600">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default PlatformFeatures;