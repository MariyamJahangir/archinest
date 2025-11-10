
import { Link } from 'react-router-dom';

const SERVICES = [
  {
    name: 'Total Design Package',
    to: '/total-design',
    color: 'from-amber-200 to-orange-100',
    image: 'https://i.pinimg.com/1200x/13/62/92/136292e719e18f4a309a199874901c41.jpg',
    description: '',
  },
  {
    name: 'Interiors',
    to: '/interiors',
    color: 'from-lime-200 to-emerald-200',
    image: 'https://i.pinimg.com/1200x/13/62/92/136292e719e18f4a309a199874901c41.jpg',
    description: '',
  },
  {
    name: 'Exteriors',
    to: '/exteriors',
    color: 'from-blue-200 to-cyan-200',
    image: 'https://i.pinimg.com/1200x/13/62/92/136292e719e18f4a309a199874901c41.jpg',
    description: '',
  },
  {
    name: 'Landscaping',
    to: '/landscaping',
    color: 'from-fuchsia-200 to-pink-200',
    image: 'https://i.pinimg.com/1200x/13/62/92/136292e719e18f4a309a199874901c41.jpg',
    description: '',
  },
];

export default function ServicesSection() {
  return (
    <section
  id="services"
  className="relative py-20 px-6 w-full mx-auto overflow-hidden"
  style={{
    backgroundImage: `url(/service-sec-bg.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay with blur and soft gradient */}
  <div className="absolute inset-0 bg-emerald-950/40 backdrop-blur-[1px]"></div>

  <div className="relative z-10 max-w-7xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-400 mb-6 drop-shadow-xl tracking-wide">
      Our Services
    </h2>
    <p className="max-w-3xl mx-auto text-gray-100 text-lg leading-relaxed mb-14">
      We design spaces that embody creativity, comfort, and craftsmanship.
      From concept to completion, our team ensures every detail reflects
      timeless elegance, innovative function, and a sense of harmony.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {SERVICES.map((service) => (
        <Link
          to={service.to}
          key={service.name}
          className={`group relative bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
        >
          {/* Gradient border effect */}
          <div
            className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-all duration-500`}
          ></div>

          <div className="relative p-4 flex flex-col items-center justify-center z-10">
            <div className="w-46 h-46 mb-5 rounded-2xl overflow-hidden shadow-lg border-4 border-white group-hover:scale-105 transition-all duration-500">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-all duration-300">
              {service.name}
            </h3>
            <p className="mt-3 text-gray-600 text-sm opacity-90 group-hover:opacity-100 transition-all duration-300">
              {service.description || "Exceptional design solutions tailored for your space."}
            </p>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>


  );
}
