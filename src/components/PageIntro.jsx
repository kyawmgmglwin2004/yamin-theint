export default function PageIntro({ eyebrow, title, children }) {
  return (
    <section className="mx-auto min-h-[70vh] max-w-[1200px] px-[6vw] py-24 md:py-32 flex flex-col justify-center">
      <div className="mb-16 border-b border-[var(--color-border-subtle)] pb-16 md:mb-24 md:pb-20">
        <p className="mb-8 text-xs uppercase tracking-[.2em] text-[var(--color-text-muted)] animate-[fadeIn_0.8s_ease-out]">
          {eyebrow}
        </p>
        <h1 className="font-serif text-[clamp(48px,7vw,100px)] font-normal leading-[1.1] tracking-[-.02em] text-[var(--color-text-primary)] animate-[fadeIn_1s_ease-out]">
          {title}
        </h1>
      </div>
      <div className="animate-[fadeIn_1.2s_ease-out]">
        {children}
      </div>
    </section>
  )
}
