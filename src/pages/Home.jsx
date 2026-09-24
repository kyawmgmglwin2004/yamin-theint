import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import heroImage from "../assets/yamin-hero1.jpeg";

export default function Home() {
  return (
    <>
      <section className="relative isolate flex min-h-[85vh] items-center overflow-hidden bg-[var(--color-bg-primary)] px-[8vw] py-20">
        <div
          className="absolute inset-0 -z-0 bg-cover bg-center transition-transform duration-[20s] ease-out hover:scale-105"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--color-bg-primary)]/90 via-[var(--color-bg-primary)]/60 to-transparent backdrop-blur-[2px]" />

        <div className="relative z-10 max-w-[600px] animate-[fadeIn_1s_ease-out] text-[var(--color-text-primary)]">
          <p className="mb-6 text-xs uppercase tracking-[.3em] text-[var(--color-text-muted)]">
            The Essentials
          </p>
          <h1 className="mb-8 font-serif text-[clamp(56px,8vw,110px)] font-normal leading-[1] tracking-[-.02em] text-[var(--color-text-primary)]">
            Awaken
            <br />
            your skin.
          </h1>
          <p className="mb-10 max-w-[380px] text-base font-light leading-relaxed text-[var(--color-text-muted)]">
            A sensorial ritual crafted with natural botanicals for deep nourishment and radiant vitality.
          </p>
          <Button to="/products">Shop the collection</Button>
        </div>
      </section>

      <section className="flex justify-around gap-8 overflow-hidden border-y border-[var(--color-border-subtle)] px-[5vw] py-6 text-xs uppercase tracking-[.2em] text-[var(--color-text-muted)] bg-[var(--color-bg-primary)]">
        <span className="hover:text-[var(--color-text-primary)] transition-colors">Plant-powered</span>
        <i className="text-[var(--color-border-subtle)]">✦</i>
        <span className="hover:text-[var(--color-text-primary)] transition-colors">Conscious beauty</span>
        <i className="text-[var(--color-border-subtle)]">✦</i>
        <span className="hover:text-[var(--color-text-primary)] transition-colors">Crafted with care</span>
        <i className="text-[var(--color-border-subtle)] hidden md:inline">✦</i>
        <span className="hover:text-[var(--color-text-primary)] transition-colors hidden md:inline">Cruelty-free</span>
      </section>
      <section className="border-t border-[var(--color-border-subtle)] bg-[#F5F4F0] px-[8vw] py-16">
        <div className="mb-12 flex flex-col items-start justify-between gap-8 md:mb-20 md:flex-row md:items-end">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[.2em] text-[var(--color-text-muted)]">
              The edit
            </p>
            <h2 className="font-serif text-[clamp(46px,6vw,72px)] font-normal leading-[1.1] tracking-[-.02em] text-[var(--color-text-primary)]">
              Rituals worth
              <br />
              <em className="italic text-[var(--color-accent)]">returning to.</em>
            </h2>
          </div>
          <Button to="/products" light>
            Explore all
          </Button>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1200px] items-center gap-16 px-[8vw] py-24 md:grid-cols-2 md:gap-20 md:py-32">
        <div className="order-2 md:order-1 relative group mx-auto w-full max-w-[500px]">
          <div className="aspect-[4/5] overflow-hidden bg-[var(--color-border-subtle)] w-full">
            <img
              src="/skincare_texture.jpg"
              alt="Skincare Texture"
              className="h-full w-full object-cover grayscale-[20%] transition-transform duration-[15s] ease-out group-hover:scale-110 group-hover:grayscale-0"
            />
          </div>

          {/* Floating animated product card */}
          <div className="absolute -bottom-8 -right-4 md:-right-12 w-[180px] sm:w-[220px] bg-[var(--color-bg-primary)]/95 backdrop-blur-md p-4 border border-[var(--color-border-subtle)] shadow-2xl transition-all duration-700 ease-out group-hover:-translate-y-4 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
            <div className="aspect-square overflow-hidden mb-4">
              <img
                src={products[5].image}
                alt={products[5].name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <p className="text-[9px] uppercase tracking-[.2em] text-[var(--color-accent)] mb-1">Night Ritual</p>
            <h3 className="font-serif text-base text-[var(--color-text-primary)] mb-2">{products[5].name}</h3>
            <p className="text-xs font-medium text-[var(--color-text-primary)]">{products[5].price}</p>
          </div>
        </div>

        <div className="order-1 md:order-2 md:pl-6">
          <p className="mb-6 text-xs uppercase tracking-[.2em] text-[var(--color-text-muted)]">
            A promise in every jar
          </p>
          <h2 className="mb-8 font-serif text-[clamp(42px,5vw,64px)] font-normal leading-[1.1] tracking-[-.02em] text-[var(--color-text-primary)]">
            Know what you
            <br />
            <em className="italic text-[var(--color-accent)]">put on your skin.</em>
          </h2>
          <p className="mb-12 text-sm font-light leading-relaxed text-[var(--color-text-muted)] max-w-[420px]">
            Every creation has a story, a source, and a signature. We believe in complete transparency about our ingredients and sourcing methods. Discover the conscious care and intention behind your daily ritual.
          </p>

          <div className="flex items-center gap-10">
            <Button to="/about" light>
              Our Philosophy
            </Button>

            <div className="hidden size-[90px] place-content-center rounded-full border border-[var(--color-border-subtle)] text-center text-[var(--color-text-primary)] animate-[spin_20s_linear_infinite] sm:grid">
              <span className="font-serif text-3xl leading-none italic animate-[spin_20s_linear_infinite_reverse]">YT</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-primary)] px-[8vw] py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] text-center">
          <p className="mb-6 text-xs uppercase tracking-[.2em] text-[var(--color-text-muted)]">
            Our Ingredients
          </p>
          <h2 className="mb-16 font-serif text-[clamp(40px,5vw,60px)] font-normal leading-[1.1] tracking-[-.02em] text-[var(--color-text-primary)]">
            Sourced with intention, <br className="md:hidden" /><em className="italic text-[var(--color-accent)]">crafted with care.</em>
          </h2>
          <div className="grid gap-12 sm:grid-cols-3 text-left">
            <div className="group cursor-pointer">
              <div className="mb-6 aspect-[4/3] overflow-hidden bg-[var(--color-border-subtle)]">
                <img src="/pure_botanicals.jpg" alt="Botanical Extracts" className="h-full w-full object-cover grayscale-[30%] transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0" />
              </div>
              <h3 className="mb-3 font-serif text-2xl text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">Pure Botanicals</h3>
              <p className="text-sm font-light leading-relaxed text-[var(--color-text-muted)]">Cold-pressed plant oils and potent botanical extracts to deeply nourish and restore the skin barrier.</p>
            </div>
            <div className="group cursor-pointer">
              <div className="mb-6 aspect-[4/3] overflow-hidden bg-[var(--color-border-subtle)]">
                <img src="/earth_minerals.jpg" alt="Earth Minerals" className="h-full w-full object-cover grayscale-[30%] transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0" />
              </div>
              <h3 className="mb-3 font-serif text-2xl text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">Earth Minerals</h3>
              <p className="text-sm font-light leading-relaxed text-[var(--color-text-muted)]">Finely milled natural clays and earth minerals for gentle detoxification and lasting clarity.</p>
            </div>
            <div className="group cursor-pointer">
              <div className="mb-6 aspect-[4/3] overflow-hidden bg-[var(--color-border-subtle)]">
                <img src="https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&w=800&q=80" alt="Active Hydration" className="h-full w-full object-cover grayscale-[30%] transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0" />
              </div>
              <h3 className="mb-3 font-serif text-2xl text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">Active Hydration</h3>
              <p className="text-sm font-light leading-relaxed text-[var(--color-text-muted)]">Bio-compatible humectants that draw in and lock moisture deeply into the skin all day.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
