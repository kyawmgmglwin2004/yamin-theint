export default function PageIntro({ eyebrow, title, children }) {
  return <section className="mx-auto min-h-[650px] max-w-[1180px] px-[5vw] py-[80px] md:py-[130px]">
    <div className="mb-12 border-b border-[#e1d2c2] pb-12 md:mb-[76px] md:pb-[70px]"><p className="mb-6 text-[10px] uppercase tracking-[.24em] text-[#a56c3f]">{eyebrow}</p><h1 className="font-sans text-[clamp(52px,6vw,88px)] font-medium leading-[.98] tracking-[-.03em] text-[#4b3023]">{title}</h1></div>
    {children}
  </section>
}
