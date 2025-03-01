import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { 
  CreditCard, 
  RefreshCcw, 
  Bell, 
  LayoutDashboard, 
  Database, 
  Users, 
  FileText, 
  BarChart3 
} from 'lucide-react';

const features = [
  {
    icon: <CreditCard className="h-8 w-8 text-white" />,
    title: 'Easy Onboarding',
    bgColor: 'bg-cyan-500'
  },
  {
    icon: <RefreshCcw className="h-8 w-8 text-white" />,
    title: 'Multiple Payment Options',
    bgColor: 'bg-cyan-500'
  },
  {
    icon: <Bell className="h-8 w-8 text-white" />,
    title: 'Auto-renewals & Reminders',
    bgColor: 'bg-cyan-500'
  },
  {
    icon: <LayoutDashboard className="h-8 w-8 text-white" />,
    title: 'Member Dashboard',
    bgColor: 'bg-cyan-500'
  },
  {
    icon: <Database className="h-8 w-8 text-white" />,
    title: 'Secure Online Database',
    bgColor: 'bg-cyan-500'
  },
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: 'Organizational Memberships',
    bgColor: 'bg-cyan-500'
  },
  {
    icon: <FileText className="h-8 w-8 text-white" />,
    title: 'Membership Levels',
    bgColor: 'bg-cyan-500'
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-white" />,
    title: 'Customizable Reporting',
    bgColor: 'bg-cyan-500'
  }
];

const ManageMembership = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Manage your membership</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Select a basic to premium group setup, easily accept recurring payments, and automate renewals – all in one spot.
          Let your members handle their own account and spend more time growing your group.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className={`${feature.bgColor} rounded-full p-4 mb-4`}>
              {feature.icon}
            </div>
            <h3 className="text-lg font-medium text-gray-900 text-center">{feature.title}</h3>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center">
        <Button className="bg-cyan-500 hover:bg-cyan-600">
          Learn More
        </Button>
      </div>
    </section>
  );
};

export default ManageMembership;