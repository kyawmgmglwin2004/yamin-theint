export default function ProductCard({ product }) {
  return <article className="group">
    <div className="relative aspect-[1/1.1] overflow-hidden bg-[#ead8c6]">
      <img className="size-full object-cover saturate-[.6] transition-transform duration-500 group-hover:scale-105" src={product.image} alt={product.name} />
      <span className="absolute left-4 top-4 border border-[#a56c3f] px-2 py-1.5 text-[9px] uppercase tracking-[.12em] text-[#a56c3f]">{product.featured ? 'Bestseller' : 'New ritual'}</span>
    </div>
    <div className="flex justify-between gap-5 py-[18px]">
      <div><h3 className="mb-1.5 font-sans text-xl font-medium text-[#4b3023]">{product.name}</h3><p className="text-[11px] text-[#8d7565]">{product.type}</p></div>
      <strong className="text-[11px] font-normal text-[#8d7565]">{product.price}</strong>
    </div>
  </article>
}
