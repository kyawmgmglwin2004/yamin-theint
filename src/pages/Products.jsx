import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function Products() {
  return (
    <div className="bg-[var(--color-bg-primary)] px-[8vw] py-16">
      
      {/* Products Grid First */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => <ProductCard key={product.name} product={product} />)}
      </div>
      
      {/* Bottom Section */}
      <section className="mt-24 grid gap-16 border-t border-[var(--color-border-subtle)] pt-24 md:mt-32 md:grid-cols-2 md:items-center">
        <div className="order-2 md:order-1 relative rounded-[2rem] overflow-hidden group shadow-sm">
          <div className="aspect-[4/3] w-full bg-[#f8f8f8]">
             <img 
                src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80" 
                alt="Sustainable Packaging" 
                className="w-full h-full object-cover transition-transform duration-[15s] ease-out group-hover:scale-110 grayscale-[15%] group-hover:grayscale-0" 
             />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-0" />
          
          {/* Animated floating info box */}
          <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/90 rounded-2xl p-6 border border-white/50 translate-y-8 opacity-0 transition-all duration-700 ease-out group-hover:translate-y-0 group-hover:opacity-100 shadow-xl">
             <p className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-semibold mb-1">100% Recyclable</p>
             <p className="text-sm font-medium text-[var(--color-text-primary)]">Thoughtful packaging designed for second lives.</p>
          </div>
        </div>
        
        <div className="order-1 md:order-2 md:pl-8 lg:pl-16">
          <p className="mb-6 text-xs uppercase tracking-[.2em] text-[var(--color-text-muted)]">The Yamin standard</p>
          <h2 className="mb-8 font-serif text-[clamp(40px,5vw,60px)] font-normal leading-[1.1] tracking-[-.02em] text-[var(--color-text-primary)]">
            Good to skin.<br /><em className="italic text-[var(--color-accent)]">Good to earth.</em>
          </h2>
          <p className="mb-12 text-sm font-light leading-relaxed text-[var(--color-text-muted)] max-w-[420px]">
            We work with purposeful ingredients and thoughtful packaging, creating products that feel as good in your hands as they do on your skin. Every choice is made with tomorrow in mind.
          </p>
          
          <ul className="space-y-5">
            <li className="flex items-center gap-4 text-sm text-[var(--color-text-primary)] font-medium transition-colors hover:text-[var(--color-accent)]">
              <span className="flex size-10 items-center justify-center rounded-full bg-[var(--color-border-subtle)] text-[var(--color-accent)]">✦</span>
              Cruelty-free & Vegan
            </li>
            <li className="flex items-center gap-4 text-sm text-[var(--color-text-primary)] font-medium transition-colors hover:text-[var(--color-accent)]">
              <span className="flex size-10 items-center justify-center rounded-full bg-[var(--color-border-subtle)] text-[var(--color-accent)]">✦</span>
              Ethically Sourced Botanicals
            </li>
            <li className="flex items-center gap-4 text-sm text-[var(--color-text-primary)] font-medium transition-colors hover:text-[var(--color-accent)]">
              <span className="flex size-10 items-center justify-center rounded-full bg-[var(--color-border-subtle)] text-[var(--color-accent)]">✦</span>
              Carbon Neutral Shipping
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
