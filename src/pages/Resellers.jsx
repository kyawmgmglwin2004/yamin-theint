import PageIntro from '../components/PageIntro'
import Mark from '../components/Mark'

const resellers = [['01', 'The Ritual Room', 'Yangon, Bahan', '@theritualroom'], ['02', 'Maison Botanique', 'Mandalay, Chanayethazan', '@maisonbotanique'], ['03', 'Common Ground', 'Yangon, Dagon', '@commonground.mm'], ['04', 'Nourish Studio', 'Naypyidaw, Zabuthiri', '@nourishstudio']]

export default function Resellers() {
  return (
    <PageIntro eyebrow="Find us" title={<>Shop the ritual<br /><em className="italic text-[var(--color-accent)]">in person.</em></>}>
      <p className="mb-16 ml-0 max-w-[400px] text-base font-light leading-relaxed text-[var(--color-text-muted)] md:mb-24 md:ml-[25%]">
        Our authorized stockists share our belief in slower, more considered beauty. Find your nearest space below.
      </p>
      
      <div className="border-t border-[var(--color-border-subtle)]">
        {resellers.map(([number, name, location, handle]) => (
          <a href="#contact" className="group grid grid-cols-[40px_1fr_20px] items-center gap-6 border-b border-[var(--color-border-subtle)] py-8 transition-colors duration-300 hover:bg-[var(--color-border-subtle)]/20 md:grid-cols-[80px_1fr_200px_20px] md:px-8" key={name}>
            <span className="text-xs tracking-widest text-[var(--color-accent)]">{number}</span>
            <div>
              <h3 className="mb-2 font-serif text-2xl font-normal text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-accent)]">{name}</h3>
              <p className="m-0 text-xs tracking-widest uppercase text-[var(--color-text-muted)]">{location}</p>
            </div>
            <span className="hidden text-xs tracking-widest text-[var(--color-text-muted)] transition-colors group-hover:text-[var(--color-text-primary)] md:block">{handle}</span>
            <span className="text-[var(--color-text-primary)] transform transition-transform duration-500 group-hover:translate-x-2">
              <Mark name="arrow" />
            </span>
          </a>
        ))}
      </div>
    </PageIntro>
  )
}
