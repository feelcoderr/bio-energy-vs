import { useRef } from 'react';

const products = [
  {
    id: 'ag-biochar',
    title: 'Agricultural Biochar',
    subtitle: 'Soil Health & Sequestration',
    desc: 'Engineered biochar designed to improve soil fertility, water retention, microbial activity, and long-term carbon storage. A foundational tool for regenerative agriculture.',
    image: '/images/product-biochar.jpg',
    features: ['Carbon Sequestration', 'Moisture Retention', 'Regenerative Agriculture', 'Sustainable Farming'],
  },
  {
    id: 'fertilizer',
    title: 'Biochar-Based Fertilizer',
    subtitle: 'Slow-Release Nutrient Delivery',
    desc: 'A biochar-enhanced nutrient delivery solution that improves fertilizer efficiency while minimizing nutrient loss and environmental runoff, leading to higher crop productivity.',
    image: '/images/product-pellets.jpg',
    features: ['Improved Nutrient Availability', 'Reduced Leaching', 'Enhanced Root Development', 'Higher Productivity'],
  },
  {
    id: 'filter-media',
    title: 'Activated Carbon & Filter Media',
    subtitle: 'Industrial Purification & Adsorption',
    desc: 'Specialized high-surface-area filtration media engineered for water purification, wastewater treatment, odor removal, and environmental remediation systems.',
    image: '/images/product-filter.jpg',
    features: ['Water Purification', 'Air Filtration', 'Industrial Adsorption', 'Pollution Control'],
  },
];

export default function ProductsCarbon() {
  return (
    <div 
      id="carbon" 
      className="product-category-card sticky top-24 w-full min-h-[85vh] rounded-[3rem] bg-surface-container-lowest border border-outline-variant/35 p-8 md:p-12 mb-16 shadow-[0_15px_50px_rgba(0,0,0,0.03)] origin-top flex flex-col justify-between overflow-hidden"
      style={{ zIndex: 2 }}
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-surface-tint/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-8 shrink-0">
        <span className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-surface-tint mb-2 inline-block px-4 py-1.5 border border-outline-variant/50 rounded-full bg-white">
          Category 02
        </span>
        <h2 className="font-heading text-4xl lg:text-5xl text-primary font-normal">Carbon Products</h2>
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
                  <div className="w-1.5 h-1.5 rounded-full bg-verdaez-400 shrink-0" />
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
