import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Who we serve',
      links: [
        'Associations',
        'Nonprofits',
        'Educational Institutions',
        'Greek Life',
        'Faith-based',
        'Professional Associations',
        'Clubs',
        'Political Campaigns',
        'Fraternal Orders',
        'Service Organizations',
        'Sports Teams',
        'Alumni Groups'
      ]
    },
    {
      title: 'Features',
      links: [
        'Overview',
        'Membership Management',
        'Events',
        'Fundraising',
        'Communications',
        'Online Payments',
        'Mobile App',
        'Surveys',
        'Email Newsletters',
        'Support'
      ]
    },
    {
      title: 'Pricing',
      links: [
        'Subscription Plans & Pricing',
        'Payment Processing',
        'Enterprise'
      ]
    },
    {
      title: 'Support',
      links: [
        'Contact Support',
        'Help Center',
        'Blog',
        'FAQ'
      ]
    },
    {
      title: 'Company',
      links: [
        'About Us',
        'Careers',
        'Press',
        'Terms of Service',
        'Privacy Policy'
      ]
    },
    {
      title: 'Legal',
      links: [
        'Terms of Service',
        'Privacy Policy',
        'Cookie Policy',
        'GDPR'
      ]
    }
  ];

  return (
    <footer>
      <div className="bg-cyan-500 pt-16 pb-12 relative">
        <div className="absolute top-0 left-0 w-full overflow-hidden rotate-180">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="w-full h-16 sm:h-24"
            fill="white"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0z"></path>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-white">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href="#" className="text-white/80 hover:text-white text-sm">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-12 pt-8 border-t border-cyan-400 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="text-white text-xl font-bold mr-4">memberplanet</div>
              <div className="flex space-x-4">
                <Link href="#" className="text-white hover:text-cyan-200">
                  <Facebook size={20} />
                </Link>
                <Link href="#" className="text-white hover:text-cyan-200">
                  <Twitter size={20} />
                </Link>
                <Link href="#" className="text-white hover:text-cyan-200">
                  <Instagram size={20} />
                </Link>
                <Link href="#" className="text-white hover:text-cyan-200">
                  <Linkedin size={20} />
                </Link>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <Link href="#">
                <Image 
                  src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?q=80&w=120&auto=format&fit=crop"
                  alt="App Store"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <Link href="#">
                <Image 
                  src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?q=80&w=120&auto=format&fit=crop"
                  alt="Google Play"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-cyan-600 py-4 text-white/80 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          © {new Date().getFullYear()} memberplanet. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;