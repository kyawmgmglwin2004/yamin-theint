import PageIntro from '../components/PageIntro'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function Products() {
  return <PageIntro eyebrow="The collection" title={<>Body care for<br /><em>slow living.</em></>}>
    <p className="mb-12 ml-0 max-w-[360px] text-sm leading-7 text-[#8d7565] md:mb-[70px] md:ml-[25%]">A considered edit of sensorial formulas made with generous botanicals, quiet intention, and nothing you do not need.</p>
    <div className="grid gap-6 md:grid-cols-3">{products.map((product) => <ProductCard key={product.name} product={product} />)}</div>
    <section className="mt-24 grid gap-8 border-t border-[#e1d2c2] pt-24 md:mt-[100px] md:grid-cols-2 md:gap-[15%]"><div><p className="mb-6 text-[10px] uppercase tracking-[.24em] text-[#a56c3f]">The Yamin standard</p><h2 className="text-[clamp(42px,5vw,68px)] font-medium leading-none tracking-[-.03em] text-[#4b3023]">Good to skin.<br /><em className="text-[#a56c3f]">Good to earth.</em></h2></div><p className="max-w-[310px] pt-0 text-sm leading-7 text-[#8d7565] md:pt-8">We work with purposeful ingredients and thoughtful packaging, creating products that feel as good in your hands as they do on your skin.</p></section>
  </PageIntro>
}
