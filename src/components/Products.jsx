import { useEffect, useRef, useState } from 'react';

const products = [
  {
    name: 'Fuel Pellets',
    description:
      'Clean, consistent energy for industrial boilers and heat applications. High calorific value with low ash content.',
    image: '/images/fuel-pellets.png',
  },
  {
    name: 'Biochar',
    description:
      'Premium soil amendment and carbon sequestration agent for healthier soils and verified climate impact.',
    image: '/images/biochar.png',
  },
  {
    name: 'Slow-Release Fertilizer',
    description:
      'Biochar-enhanced fertilizer that boosts crop yield while reducing nutrient runoff and loss.',
    image: '/images/slow-release-fertilizer.png',
  },
  {
    name: 'Filtration Media',
    description:
      'High-performance activated carbon media for water treatment and industrial filtration systems.',
    image: '/images/filter-media.png',
  },
  {
    name: 'Pyrolysis Oil Derivatives',
    description:
      'Valuable chemical fractions for fuels, solvents, and industrial process feedstocks.',
    image: '/images/pyrolysis-oil.png',
  },
  {
    name: 'Carbon & Graphene Derivatives',
    description:
      'Advanced carbon nanomaterials for high-tech, energy storage, and industrial applications.',
    image: '/images/carbon-graphene.png',
  },
];

function ProductCard({ product, index, isVisible }) {
  const delayClass = [
    'delay-100',
    'delay-200',
    'delay-300',
    'delay-400',
    'delay-500',
    'delay-600',
  ][index] || 'delay-100';

  return (
    <div
      className={`group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
        isVisible ? `animate-fade-in-up ${delayClass}` : 'opacity-0'
      }`}
    >
      {/* Image Area */}
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Subtle gradient overlay at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading text-xl font-bold text-verdaez-900">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mt-2 leading-relaxed">
          {product.description}
        </p>
        <a
          href="#"
          className="text-sm font-semibold text-verdaez-600 hover:text-verdaez-400 mt-4 inline-flex items-center gap-1 transition"
        >
          Learn More
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </div>
  );
}

export default function Products() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2
          className={`section-heading text-center ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          Products Built from Biomass Carbon
        </h2>

        {/* Subtext */}
        <p
          className={`section-description mx-auto text-center max-w-3xl ${
            isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'
          }`}
        >
          Each product stream targets a practical market with industrial,
          agricultural, environmental, or energy-sector relevance.
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {products.map((product, index) => (
            <ProductCard
              key={product.name}
              product={product}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
