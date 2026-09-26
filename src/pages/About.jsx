import PageIntro from "../components/PageIntro";

export default function About() {
  return (
    <PageIntro
      eyebrow="Our story"
      title={
        <>
          Beauty with a<br />
          <em className="italic text-[var(--color-accent)]">point of view.</em>
        </>
      }
    >
      <div className="mx-auto grid max-w-[1000px] gap-16 md:grid-cols-[minmax(280px,460px)_1fr] md:gap-[12vw]">
        <div className="relative group">
          <img
            className="aspect-[4/5] w-full max-w-[400px] object-cover grayscale-[30%] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.02]"
            src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1000&q=85"
            alt="Founder of Yamin Theint"
          />
          <div className="absolute inset-0 border border-[var(--color-border-subtle)] translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
        </div>
        <div className="max-w-[420px] pt-4">
          <p className="mb-12 font-serif text-3xl font-normal italic leading-snug text-[var(--color-text-primary)]">
            “The most beautiful rituals are the ones that bring us back to
            ourselves.”
          </p>
          <div className="space-y-6 text-sm font-light leading-relaxed text-[var(--color-text-muted)]">
            <p>
              Yamin Theint began with a simple belief: care should never feel
              complicated. Founded in Yangon, our studio creates tactile,
              effective body care inspired by the plants, textures, and unhurried
              rhythms of home.
            </p>
            <p>
              Each formula is an invitation to pause. To choose a little more
              intention in the everyday.
            </p>
          </div>
          <div className="mt-16 pt-8 border-t border-[var(--color-border-subtle)] block text-2xl font-serif italic text-[var(--color-text-primary)]">
            Yamin Theint
            <br />
            <small className="font-sans text-xs not-italic uppercase tracking-[.2em] text-[var(--color-text-muted)] mt-2 block">
              Founder and Formulator
            </small>
          </div>
        </div>
      </div>
    </PageIntro>
  );
}
