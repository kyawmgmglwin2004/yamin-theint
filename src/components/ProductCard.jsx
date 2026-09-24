export default function ProductCard({ product }) {
  return (
    <article className="group cursor-pointer">
      <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)]">
        <img
          className="size-full object-cover grayscale-[30%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
          src={product.image}
          alt={product.name}
        />
        {product.featured && (
          <span className="absolute left-5 top-5 border border-[var(--color-border-subtle)] bg-[var(--color-bg-primary)]/80 backdrop-blur-sm px-3 py-1.5 text-[9px] uppercase tracking-[.15em] text-[var(--color-text-primary)]">
            Bestseller
          </span>
        )}
      </div>
      <div className="flex justify-between items-start gap-5 py-6">
        <div>
          <h3 className="mb-2 font-serif text-2xl font-normal text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">{product.name}</h3>
          <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">{product.type}</p>
        </div>
        <strong className="text-xs font-medium text-[var(--color-text-primary)]">{product.price}</strong>
      </div>
    </article>
  )
}
