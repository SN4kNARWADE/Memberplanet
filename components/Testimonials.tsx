import Image from 'next/image';

const Testimonials = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-16">
          Thousands of groups find success with memberplanet.
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex items-center justify-center">
              <div className="h-16 w-32 relative grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={`https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&h=64&q=80&${i}`}
                  alt={`Partner logo ${i}`}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          ))}
        </div>
        
        <button className="text-cyan-500 hover:text-cyan-600 font-medium flex items-center justify-center mx-auto">
          <span>See more</span>
          <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Testimonials;