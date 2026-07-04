import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 'pellets',
    title: 'Renewable Fuel Pellets',
    subtitle: 'High-Density Industrial Bioenergy',
    desc: 'Engineered for industrial heating, boilers, and thermal energy systems where consistency, combustion efficiency, and reliable fuel quality are essential.',
    image: '/images/product-pellets.jpg',
    features: ['High Energy Density', 'Low Ash Formation', 'Uniform Size', 'Reliable Industrial Supply'],
    layout: 'left'
  },
  {
    id: 'biochar',
    title: 'Industrial & Agricultural Biochar',
    subtitle: 'Carbon Sequestration & Soil Health',
    desc: 'Carbon-rich biochar designed to improve soil performance, support environmental restoration, and provide sustainable carbon solutions for industrial applications.',
    image: '/images/product-biochar.jpg',
    features: ['Soil Improvement', 'Water Retention', 'Environmental Remediation', 'Carbon Sequestration'],
    layout: 'right'
  },
  {
    id: 'oil',
    title: 'Pyrolysis Oil Platform',
    subtitle: 'Chemical Feedstocks & Thermal Energy',
    desc: 'A renewable bio-oil platform supporting industrial heating, chemical processing, and future bio-based manufacturing through further upgrading and formulation.',
    image: '/images/product-oil.jpg',
    features: ['Industrial Fuel', 'Chemical Feedstocks', 'Resin Alternatives', 'Process Heating'],
    layout: 'left'
  },
];

export default function ProductsShowcase() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Parallax product images
    gsap.utils.toArray('.product-image').forEach((img) => {
      gsap.fromTo(img, 
        { y: -30 }, 
        {
          y: 30,
          ease: "none",
          scrollTrigger: {
            trigger: img.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        }
      );
    });

    // Reveal product details
    gsap.utils.toArray('.product-content').forEach((content) => {
      gsap.fromTo(content,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: content,
            start: "top 80%",
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section id="portfolio" ref={containerRef} className="py-24 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-6">
        
        {products.map((product, idx) => (
          <div key={product.id} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-32 ${product.layout === 'right' ? 'lg:flex-row-reverse' : ''}`}>
            
            {/* Image Side */}
            <div className="w-full lg:w-1/2 overflow-hidden rounded-3xl shadow-ambient-lg relative h-[400px] md:h-[500px]">
              <div 
                className="product-image absolute inset-[-10%] w-[120%] h-[120%] bg-cover bg-center"
                style={{ backgroundImage: `url(${product.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-80" />
            </div>

            {/* Content Side */}
            <div className="product-content w-full lg:w-1/2">
              <span className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-surface-tint mb-3 inline-block">
                {product.subtitle}
              </span>
              <h3 className="font-heading text-4xl lg:text-5xl text-primary font-normal mb-6">
                {product.title}
              </h3>
              <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-8">
                {product.desc}
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-surface-tint" />
                    <span className="font-body text-sm font-medium text-on-surface">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
