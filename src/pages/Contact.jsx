import PageIntro from '../components/PageIntro'
import Mark from '../components/Mark'

export default function Contact() {
  return (
    <PageIntro eyebrow="Get in touch" title={<>Let's make space<br /><em className="italic text-[var(--color-accent)]">for good care.</em></>}>
      <div className="mx-auto grid max-w-[1000px] gap-16 md:grid-cols-[minmax(280px,460px)_1fr] md:gap-[12vw]">
        <div>
          <p className="mb-12 max-w-[380px] text-sm font-light leading-relaxed text-[var(--color-text-muted)]">
            Questions about a product, a partnership, or your next ritual? We would love to hear from you.
          </p>
          <div className="grid grid-cols-2 gap-8 border-t border-[var(--color-border-subtle)] pt-8 text-xs">
            <div>
              <span className="mb-4 block text-[10px] uppercase tracking-[.2em] text-[var(--color-text-muted)]">Write to us</span>
              <a className="text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors" href="mailto:hello@yamintheint.com">hello@yamintheint.com</a>
            </div>
            <div>
              <span className="mb-4 block text-[10px] uppercase tracking-[.2em] text-[var(--color-text-muted)]">Visit our studio</span>
              <p className="leading-relaxed text-[var(--color-text-primary)]">Yangon, Myanmar<br />Mon - Sat, 9am - 5pm</p>
            </div>
          </div>
        </div>
        <form className="border-t border-[var(--color-border-subtle)] pt-8" onSubmit={(event) => event.preventDefault()}>
          <label className="mb-8 block group">
            <span className="mb-3 block text-[10px] uppercase tracking-[.2em] text-[var(--color-text-muted)] transition-colors group-focus-within:text-[var(--color-text-primary)]">Name</span>
            <input className="block w-full border-0 border-b border-[var(--color-border-subtle)] bg-transparent py-3 text-sm text-[var(--color-text-primary)] outline-none placeholder:text-[var(--color-border-subtle)] focus:border-[var(--color-text-primary)] transition-colors" type="text" placeholder="Your name" required />
          </label>
          <label className="mb-8 block group">
            <span className="mb-3 block text-[10px] uppercase tracking-[.2em] text-[var(--color-text-muted)] transition-colors group-focus-within:text-[var(--color-text-primary)]">Email</span>
            <input className="block w-full border-0 border-b border-[var(--color-border-subtle)] bg-transparent py-3 text-sm text-[var(--color-text-primary)] outline-none placeholder:text-[var(--color-border-subtle)] focus:border-[var(--color-text-primary)] transition-colors" type="email" placeholder="you@email.com" required />
          </label>
          <label className="mb-10 block group">
            <span className="mb-3 block text-[10px] uppercase tracking-[.2em] text-[var(--color-text-muted)] transition-colors group-focus-within:text-[var(--color-text-primary)]">How can we help?</span>
            <textarea className="block w-full resize-y border-0 border-b border-[var(--color-border-subtle)] bg-transparent py-3 text-sm text-[var(--color-text-primary)] outline-none placeholder:text-[var(--color-border-subtle)] focus:border-[var(--color-text-primary)] transition-colors" rows="4" placeholder="Tell us a little more..." required />
          </label>
          <button className="group inline-flex min-w-[180px] items-center justify-between gap-6 border border-[var(--color-text-primary)] bg-[var(--color-text-primary)] px-6 py-4 text-[10px] uppercase tracking-widest text-white transition-all duration-500 hover:bg-transparent hover:text-[var(--color-text-primary)]" type="submit">
            <span className="font-medium">Send inquiry</span> 
            <span className="transform transition-transform duration-500 group-hover:translate-x-2">
              <Mark name="arrow" />
            </span>
          </button>
        </form>
      </div>
    </PageIntro>
  )
}
