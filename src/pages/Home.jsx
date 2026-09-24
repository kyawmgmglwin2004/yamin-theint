import Button from '../components/Button'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import heroImage from '../assets/yamin-hero1.jpeg'

export default function Home() {
  return <>
    <section className="relative isolate flex min-h-[680px] items-center overflow-hidden bg-[#d8c0a5] px-[8vw] py-20 sm:min-h-[650px]">
      <div className="absolute inset-0 -z-0 bg-cover bg-center animate-[pulse_12s_ease-in-out_infinite] motion-reduce:animate-none" style={{ backgroundImage: `url(${heroImage})` }} />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#dec8ab]/95 via-[#dec8ab]/75 to-[#dec8ab]/10" />
      <div className="relative z-10 max-w-[540px] animate-[fadeIn_.8s_ease-out] text-[#4e2d1e]"><p className="mb-5 text-[10px] uppercase tracking-[.24em] text-[#79503d]">Yamin Glow Lab</p><h1 className="mb-6 text-[clamp(48px,6vw,82px)] font-medium leading-[.95] tracking-[-.03em] text-[#542f1f]">COFFEE<br />SCRUB.</h1><p className="mb-7 max-w-[330px] text-sm leading-7 text-[#765744]">NATURAL · GENTLE · RADIANCE</p><Button to="/products">Shop coffee scrub</Button></div>
      <div className="absolute bottom-6 left-1/2 flex gap-2"><b className="size-2 rounded-full bg-[#785342]" /><b className="size-2 rounded-full border border-[#785342]" /><b className="size-2 rounded-full border border-[#785342]" /><b className="size-2 rounded-full border border-[#785342]" /></div>
    </section>
    <section className="flex justify-around gap-5 overflow-hidden border-y border-[#e1d2c2] px-[5vw] py-[18px] text-sm italic text-[#a56c3f]"><span>Plant-powered</span><i>✦</i><span>Conscious beauty</span><i>✦</i><span>Made in Myanmar</span><i>✦</i><span>Plant-powered</span></section>
    <section className="mx-auto grid max-w-[1180px] items-end gap-10 px-[8vw] py-[90px] md:grid-cols-[1fr_1fr_130px] md:gap-[60px] md:py-[130px]"><div><p className="mb-6 text-[10px] uppercase tracking-[.24em] text-[#a56c3f]">A promise in every jar</p><h2 className="text-[clamp(42px,5vw,68px)] font-medium leading-none tracking-[-.03em] text-[#4b3023]">Know what you<br /><em className="text-[#a56c3f]">put on your skin.</em></h2></div><div className="max-w-[320px]"><p className="mb-7 text-sm leading-7 text-[#8d7565]">Every Yamin Theint product has a story, a source, and a signature. Check your product's authenticity and discover the care behind your ritual.</p><Button to="/contact" light>Verify your product</Button></div><div className="hidden size-[110px] rotate-[10deg] place-content-center rounded-full border border-[#a56c3f] text-center text-3xl leading-none text-[#a56c3f] md:grid">YT<br /><span className="mt-2 font-sans text-[7px] tracking-[.14em]">AUTHENTIC</span></div></section>
    <section className="border-t border-[#e1d2c2] px-[8vw] py-[90px] md:py-[130px]"><div className="mb-9 flex flex-col items-start justify-between gap-6 md:mb-[54px] md:flex-row md:items-end"><div><p className="mb-6 text-[10px] uppercase tracking-[.24em] text-[#a56c3f]">The edit</p><h2 className="text-[clamp(42px,5vw,68px)] font-medium leading-none tracking-[-.03em] text-[#4b3023]">Rituals worth<br /><em className="text-[#a56c3f]">returning to.</em></h2></div><Button to="/products" light>View all products</Button></div><div className="grid gap-6 md:grid-cols-2">{products.slice(0, 2).map((product) => <ProductCard key={product.name} product={product} />)}</div></section>
  </>
}
