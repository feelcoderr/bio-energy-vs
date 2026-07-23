import { useRef } from 'react';

const products = [
  {
    id: 'pellets',
    title: 'Biomass Fuel Pellets',
    subtitle: 'High-Density Industrial Bioenergy',
    desc: 'High-density biomass pellets manufactured for industrial boilers, furnaces, and thermal energy systems requiring reliable, efficient, and sustainable fuel.',
    image: '/images/product-pellets.jpg',
    features: ['High Calorific Value', 'Uniform Pellet Density', 'Low Moisture Content', 'Low Ash Generation'],
  },
  {
    id: 'oil',
    title: 'Pyrolysis Oil',
    subtitle: 'Renewable Liquid Fuel Platform',
    desc: 'A renewable liquid fuel produced during controlled biomass conversion, suitable for industrial heating, thermal processing, and further upgrading.',
    image: '/images/product-oil.jpg',
    features: ['Industrial Boiler Fuel', 'Chemical Feedstocks', 'Asphalt Modification', 'Process Heating'],
  },
  {
    id: 'syngas',
    title: 'Process Syngas',
    subtitle: 'Integrated Thermal Recovery',
    desc: 'Combustible process gas generated during pyrolysis and recovered for internal energy integration or industrial heating applications, improving efficiency.',
    image: '/images/product-syngas.jpg',
    features: ['Process Energy', 'Thermal Recovery', 'Heat Generation', 'Efficiency Improvement'],
  },
];

export default function ProductsEnergy() {
  return (
    <div 
      id="energy" 
      className="product-category-card sticky top-24 w-full min-h-[85vh] rounded-[3rem] bg-surface-container-lowest border border-outline-variant/35 p-8 md:p-12 mb-16 shadow-[0_15px_50px_rgba(0,0,0,0.03)] origin-top flex flex-col justify-between overflow-hidden"
      style={{ zIndex: 1 }}
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-surface-tint/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-8 shrink-0">
        <span className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-surface-tint mb-2 inline-block px-4 py-1.5 border border-outline-variant/50 rounded-full bg-white">
          Category 01
        </span>
        <h2 className="font-heading text-4xl lg:text-5xl text-primary font-normal">Renewable Energy</h2>
      </div>

      {/* 3-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 items-stretch">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="bg-white border border-outline-variant/30 rounded-3xl p-6 flex flex-col justify-between h-full transition-all duration-500 hover:scale-[1.02] hover:border-surface-tint/50 shadow-[0_5px_15px_rgba(0,0,0,0.01)] hover:shadow-ambient-sm"
          >
            <div>
              {/* Product Image */}
              <div className="w-full h-[180px] rounded-2xl overflow-hidden relative mb-4">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${product.image})` }}
                />
              </div>

              <span className="text-[9px] font-body font-bold text-surface-tint uppercase tracking-widest block mb-1">
                {product.subtitle}
              </span>
              <h3 className="font-heading text-xl text-primary font-semibold leading-tight mb-3">
                {product.title}
              </h3>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed mb-4">
                {product.desc}
              </p>
            </div>
            
            <div className="border-t border-outline-variant/20 pt-4 space-y-2">
              {product.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-olive-scale-400 shrink-0" />
                  <span className="font-body text-[11px] font-medium text-on-surface">{feature}</span>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
      
    </div>
  );
}
