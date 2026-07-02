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
      className={`group rounded-[24px] overflow-hidden bg-surface-container-lowest shadow-ambient-sm hover:shadow-ambient hover:-translate-y-1 transition-all duration-500 flex flex-col h-full ${
        isVisible ? `animate-fade-in-up ${delayClass}` : 'opacity-0'
      }`}
    >
      {/* Image Area */}
      <div className="relative h-60 w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-103"
        />
        {/* Subtle dark gradient overlay at top for image depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent pointer-events-none" />
        {/* Editorial bottom-fade mask to integrate the image with the text area */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-surface-container-lowest to-transparent pointer-events-none" />
      </div>

      {/* Content Area - 32px (p-8) padding as per design spec */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="font-heading text-xl font-normal text-primary">
          {product.name}
        </h3>
        <p className="font-body text-sm text-on-surface-variant mt-3 leading-relaxed flex-grow">
          {product.description}
        </p>
        <a
          href="#"
          className="text-xs font-semibold uppercase tracking-widest text-surface-tint hover:text-primary mt-6 inline-flex items-center gap-1.5 transition-all duration-300 group-hover:translate-x-0.5"
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
    <section id="products" className="py-28 bg-background" ref={sectionRef}>
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
          className={`section-description mx-auto text-center max-w-3xl mt-4 ${
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
