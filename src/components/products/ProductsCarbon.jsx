import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 'ag-biochar',
    title: 'Agricultural Biochar',
    subtitle: 'Soil Health & Sequestration',
    desc: 'Engineered biochar designed to improve soil fertility, water retention, microbial activity, and long-term carbon storage. A foundational tool for regenerative agriculture.',
    image: '/images/product-biochar.jpg',
    features: ['Carbon Sequestration', 'Moisture Retention', 'Regenerative Agriculture', 'Sustainable Farming'],
    layout: 'left'
  },
  {
    id: 'fertilizer',
    title: 'Biochar-Based Fertilizer',
    subtitle: 'Slow-Release Nutrient Delivery',
    desc: 'A biochar-enhanced nutrient delivery solution that improves fertilizer efficiency while minimizing nutrient loss and environmental runoff, leading to higher crop productivity.',
    image: '/images/product-pellets.jpg', // Reusing pellet image as placeholder for granular fertilizer
    features: ['Improved Nutrient Availability', 'Reduced Leaching', 'Enhanced Root Development', 'Higher Productivity'],
    layout: 'right'
  },
  {
    id: 'filter-media',
    title: 'Activated Carbon & Filter Media',
    subtitle: 'Industrial Purification & Adsorption',
    desc: 'Specialized high-surface-area filtration media engineered for water purification, wastewater treatment, odor removal, and environmental remediation systems.',
    image: '/images/product-filter.jpg',
    features: ['Water Purification', 'Air Filtration', 'Industrial Adsorption', 'Pollution Control'],
    layout: 'left'
  },
];

export default function ProductsCarbon() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Animate scale of cards as they get stacked upon
    const cards = gsap.utils.toArray('.carbon-stack-card');
    
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
    <section id="carbon" ref={containerRef} className="py-32 bg-background border-y border-outline-variant/30">
      
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
         <span className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-surface-tint mb-4 inline-block px-4 py-1.5 border border-outline-variant/50 rounded-full bg-surface-container-low">
          Category 02
        </span>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary font-normal">Carbon Products</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative pb-32">
        {products.map((product, index) => (
          <div 
            key={product.id} 
            className="carbon-stack-card sticky top-32 w-full min-h-[65vh] rounded-[2.5rem] bg-surface-container-lowest border border-outline-variant/30 shadow-[0_10px_40px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col lg:flex-row mb-12 origin-top"
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
