import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const EngageSupporters = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Engage your supporters</h2>
          <p className="text-lg text-gray-600 mb-8">
            Create a seamless experience for your members and supporters with a mobile-friendly website that makes it easy to reach more supporters.
          </p>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <Check className="h-6 w-6 text-cyan-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Branded sites & supporter pages</span>
            </li>
            <li className="flex items-start">
              <Check className="h-6 w-6 text-cyan-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Events, ticketing, & RSVPs</span>
            </li>
            <li className="flex items-start">
              <Check className="h-6 w-6 text-cyan-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Group-wide fundraising, events, & surveys</span>
            </li>
          </ul>
          
          <Button className="bg-cyan-500 hover:bg-cyan-600">
            Learn More
          </Button>
        </div>
        
        <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Engage your supporters"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="bg-white rounded-lg p-4 shadow-lg max-w-xs mx-auto">
              <div className="flex items-center justify-between mb-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <div className="text-xs text-gray-500">Online</div>
              </div>
              <div className="h-24 bg-gray-100 rounded mb-2"></div>
              <div className="space-y-1">
                <div className="h-2 w-3/4 bg-gray-200 rounded"></div>
                <div className="h-2 w-1/2 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngageSupporters;