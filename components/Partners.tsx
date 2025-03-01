import Image from 'next/image';

const partners = [
  "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&h=64&q=80&1",
  "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&h=64&q=80&2",
  "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&h=64&q=80&3",
  "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&h=64&q=80&4",
  "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&h=64&q=80&5"
];

const Partners = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-xl font-medium text-gray-600">Proud members of</h3>
      </div>
      
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
        {partners.map((partner, index) => (
          <div key={index} className="relative h-12 w-24">
            <Image
              src={partner}
              alt={`Partner logo ${index + 1}`}
              fill
              style={{ objectFit: 'contain' }}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;