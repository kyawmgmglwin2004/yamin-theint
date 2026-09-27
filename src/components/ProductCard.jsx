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
          <span className="absolute left-3 top-3 sm:left-5 sm:top-5 border border-[var(--color-border-subtle)] bg-[var(--color-bg-primary)]/80 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1.5 text-[8px] sm:text-[9px] uppercase tracking-[.15em] text-[var(--color-text-primary)]">
            Bestseller
          </span>
        )}
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-5 py-3 sm:py-6">
        <div>
          <h3 className="mb-1 font-serif text-base sm:text-2xl font-normal text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors leading-snug">{product.name}</h3>
          <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[var(--color-text-muted)]">{product.type}</p>
        </div>
        <strong className="text-[11px] sm:text-xs font-medium text-[var(--color-text-primary)]">{product.price}</strong>
      </div>
    </article>
  )
}
