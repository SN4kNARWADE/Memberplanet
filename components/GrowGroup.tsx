import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const GrowGroup = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Group meeting"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <div className="text-white text-sm font-medium">Team Meeting</div>
                <div className="flex items-center">
                  <div className="flex -space-x-1">
                    <div className="h-6 w-6 rounded-full bg-gray-300 border-2 border-white"></div>
                    <div className="h-6 w-6 rounded-full bg-gray-400 border-2 border-white"></div>
                    <div className="h-6 w-6 rounded-full bg-gray-500 border-2 border-white"></div>
                  </div>
                  <div className="text-white text-xs ml-2">+3 more</div>
                </div>
              </div>
            </div>
            
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg mt-12">
              <Image
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Group collaboration"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <div className="text-white text-sm font-medium">Workshop</div>
                <div className="flex items-center">
                  <div className="flex -space-x-1">
                    <div className="h-6 w-6 rounded-full bg-gray-300 border-2 border-white"></div>
                    <div className="h-6 w-6 rounded-full bg-gray-400 border-2 border-white"></div>
                  </div>
                  <div className="text-white text-xs ml-2">+5 more</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 bg-green-500 rounded-full"></div>
              <div className="text-sm font-medium">Active now</div>
            </div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Grow your group</h2>
          <p className="text-lg text-gray-600 mb-8">
            Streamline your operations with our comprehensive membership management platform. Connect with members and grow your organization while we handle the administrative tasks so you can focus on what matters most.
          </p>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <Check className="h-6 w-6 text-cyan-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">User-friendly website builder</span>
            </li>
            <li className="flex items-start">
              <Check className="h-6 w-6 text-cyan-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Integrated online payment processing</span>
            </li>
            <li className="flex items-start">
              <Check className="h-6 w-6 text-cyan-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Automated email communications</span>
            </li>
          </ul>
          
          <Button className="bg-cyan-500 hover:bg-cyan-600">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GrowGroup;