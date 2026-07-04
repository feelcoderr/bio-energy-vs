import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 'pellets',
    title: 'Biomass Fuel Pellets',
    subtitle: 'High-Density Industrial Bioenergy',
    desc: 'High-density biomass pellets manufactured for industrial boilers, furnaces, and thermal energy systems requiring reliable, efficient, and sustainable fuel. Designed to replace conventional fossil-based fuels.',
    image: '/images/product-pellets.jpg',
    features: ['High Calorific Value', 'Uniform Pellet Density', 'Low Moisture Content', 'Low Ash Generation'],
    layout: 'left'
  },
  {
    id: 'oil',
    title: 'Pyrolysis Oil',
    subtitle: 'Renewable Liquid Fuel Platform',
    desc: 'A renewable liquid fuel produced during controlled biomass conversion, suitable for industrial heating, thermal processing, and further upgrading into specialty bio-based products like phenolic resin alternatives.',
    image: '/images/product-oil.jpg',
    features: ['Industrial Boiler Fuel', 'Chemical Feedstocks', 'Asphalt Modification', 'Process Heating'],
    layout: 'right'
  },
  {
    id: 'syngas',
    title: 'Process Syngas',
    subtitle: 'Integrated Thermal Recovery',
    desc: 'Combustible process gas generated during pyrolysis and recovered for internal energy integration or industrial heating applications, dramatically improving overall process efficiency.',
    image: '/images/product-syngas.jpg',
    features: ['Process Energy', 'Thermal Recovery', 'Heat Generation', 'Efficiency Improvement'],
    layout: 'left'
  },
];

export default function ProductsEnergy() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Animate scale of cards as they get stacked upon
    const cards = gsap.utils.toArray('.energy-stack-card');
    
    cards.forEach((card, index) => {
      if (index === cards.length - 1) return; // Don't scale the last card

      gsap.to(card, {
        scale: 0.92,
        opacity: 0.6,
        ease: "none",
        scrollTrigger: {
          trigger: cards[index + 1],
          start: "top bottom",
          end: "top top+=128", // Matches the top-32 sticky position
          scrub: true,
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section id="energy" ref={containerRef} className="py-32 bg-surface-container-lowest">
      
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
         <span className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-surface-tint mb-4 inline-block px-4 py-1.5 border border-outline-variant/50 rounded-full bg-white">
          Category 01
        </span>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary font-normal">Renewable Energy</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative pb-32">
        {products.map((product, index) => (
          <div 
            key={product.id} 
            className="energy-stack-card sticky top-32 w-full min-h-[65vh] rounded-[2.5rem] bg-white border border-outline-variant/30 shadow-[0_10px_40px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col lg:flex-row mb-12 origin-top"
            style={{ zIndex: index }}
          >
            {/* Content Side */}
            <div className={`w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center ${product.layout === 'right' ? 'lg:order-2' : ''}`}>
              <span className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-surface-tint mb-4 inline-block">
                {product.subtitle}
              </span>
              <h3 className="font-heading text-4xl lg:text-5xl text-primary font-normal mb-6">
                {product.title}
              </h3>
              <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-10">
                {product.desc}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-verdaez-400" />
                    <span className="font-body text-sm font-medium text-on-surface">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Side */}
            <div className={`w-full lg:w-1/2 relative min-h-[300px] lg:min-h-full overflow-hidden ${product.layout === 'right' ? 'lg:order-1' : ''}`}>
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${product.image})` }}
              />
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
