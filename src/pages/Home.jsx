import { useState, useEffect } from 'react'
import Button from '../components/Button'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import heroImage from '../assets/yamin-hero1.jpeg'
import productImg from '../assets/hero_img_2.jpg'
import product1Img from '../assets/yamin-product1.jpeg'
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p5.jpg'
import p3 from '../assets/p3.jpg'
import p4 from '../assets/p4.jpg'
import p5 from '../assets/p5.jpg'
import p6 from '../assets/p6.jpg'
import p7 from '../assets/p7.jpg'

const HERO_SLIDES = [
  {
    tagline: 'Luxury Rituals',
    title: 'Glow',
    titleAccent: 'Ritual.',
    subtitle: 'Deep Radiance Restorative Body Care',
    desc: 'A velvety blend of cold-pressed oils engineered to lock in moisture and leave a subtle, sun-kissed golden shimmer on your skin.',
    image: productImg,
  },
  {
    tagline: 'Yamin Glow Lab ',
    title: 'Coffee',
    titleAccent: 'Scrub.',
    subtitle: 'Exfoliating & Nourishing Body Treatment',
    desc: 'Infused with organic Arabica coffee grounds, golden jojoba oil, and antioxidant-rich botanical extracts for silky smooth radiance.',
    image: heroImage,
  },
]

const SHOWCASE_PRODUCTS = [
  { img: p1, name: 'Coffee Scrub — Glow Skin', price: '25,000 Ks' },
  { img: p2, name: 'Coffee Scrub — Daily Use', price: '25,000 Ks' },
  { img: p3, name: 'Coffee Scrub — Natural Blend', price: '25,000 Ks' },
  { img: p4, name: 'Coffee Scrub — Dead Skin Care', price: '25,000 Ks' },
]

const TICKER = [
  'Plant-Powered',
  'Conscious Beauty',
  'Made in Myanmar',
  'Dermatologically Tested',
  '100% Vegan & Cruelty-Free',
  'Organic Ingredients',
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [verifyCode, setVerifyCode] = useState('')
  const [verificationResult, setVerificationResult] = useState(null)
  const [isVerifying, setIsVerifying] = useState(false)

  // Auto-slide hero
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const handleVerify = (e) => {
    e.preventDefault()
    if (!verifyCode.trim()) return
    setIsVerifying(true)
    setVerificationResult(null)

    setTimeout(() => {
      setIsVerifying(false)
      if (verifyCode.toLowerCase().includes('yt') || verifyCode.length >= 5) {
        setVerificationResult({
          valid: true,
          batch: 'YT-2026-088B',
          product: 'Coffee Scrub Body Treatment (320g)',
          mfgDate: 'August 2026',
          location: 'Yangon Glow Lab Studio',
        })
      } else {
        setVerificationResult({
          valid: false,
          message: 'Code not recognized. Please check your jar serial number.',
        })
      }
    }, 1200)
  }

  const slide = HERO_SLIDES[currentSlide]

  return (
    <>
      {/* ── HERO CAROUSEL ── */}
      <section className="relative isolate flex min-h-[90vh] items-center overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center transition-all duration-1000"
          style={{ backgroundImage: `url(${slide.image})` }}
        />
        {/* Gradients */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1a1412]/85 via-[#1a1412]/50 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#1a1412]/60 via-transparent to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-[8vw] py-28">
          <div className="max-w-[540px] space-y-6" style={{ animation: 'fadeIn .9s ease-out both' }}>
            {/* Tagline badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] uppercase tracking-[.25em] font-semibold text-[#e5c5b5] backdrop-blur-md"
              style={{ animation: 'fadeIn .9s .1s ease-out both' }}
            >
              <span className="text-[#d3ac9b]">✦</span>
              <span>{slide.tagline}</span>
            </div>

            {/* Title */}
            <div style={{ animation: 'slideUp .9s .2s ease-out both' }}>
              <h1 className="font-serif text-[clamp(52px,7.5vw,96px)] font-light leading-[.92] tracking-tight text-white drop-shadow-sm">
                {slide.title}<br />
                <em className="italic text-[#e5c5b5]">{slide.titleAccent}</em>
              </h1>
              <p className="mt-2 font-serif text-lg italic text-[#e5c5b5] font-light sm:text-xl">
                {slide.subtitle}
              </p>
            </div>

            {/* Description */}
            <p
              className="max-w-[440px] text-sm leading-relaxed text-[#e2d4cd] font-light"
              style={{ animation: 'fadeIn .9s .35s ease-out both' }}
            >
              {slide.desc}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2" style={{ animation: 'fadeIn .9s .5s ease-out both' }}>
              <Button to="/products">Shop Coffee Scrub</Button>
              <Button to="/about" light>
                <span className="!text-white group-hover:!text-[var(--color-text-primary)]">Discover Formula</span>
              </Button>
            </div>

            {/* Highlights */}
            <div
              className="flex items-center gap-6 border-t border-white/15 pt-6 text-[10px] uppercase tracking-[.18em] text-[#e5c5b5] font-light"
              style={{ animation: 'fadeIn .9s .6s ease-out both' }}
            >
              <span className="flex items-center gap-1.5">
                <span className="text-[#d3ac9b]">✓</span> Organic Coffee
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#d3ac9b]">✓</span> Silk Finish
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#d3ac9b]">✓</span> Zero Microbeads
              </span>
            </div>
          </div>
        </div>

        {/* Carousel pagination */}
        <div className="absolute bottom-8 right-8 z-20 flex items-center gap-3 rounded-full border border-white/10 bg-[#1a1412]/40 px-4 py-2.5 backdrop-blur-md">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-500 ${currentSlide === idx ? 'w-8 bg-[#d3ac9b]' : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ── TICKER STRIP ── */}
      <div className="overflow-hidden border-y border-[#332620] bg-[#1a1412] py-4 select-none">
        <div
          className="flex whitespace-nowrap gap-12 text-[11px] uppercase tracking-[.25em] text-[#d3ac9b] font-medium"
          style={{ animation: 'marquee 25s linear infinite', width: 'max-content' }}
        >
          {[...TICKER, ...TICKER, ...TICKER].map((item, i) => (
            <span key={i} className="flex items-center gap-12">
              <span>{item}</span>
              <span className="text-[#8c6d5d]">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── STORY / ABOUT SPLIT ── */}
      <section className="mx-auto max-w-7xl px-[8vw] py-24 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Text */}
          <div className="space-y-6 lg:col-span-5" style={{ animation: 'fadeIn .9s ease-out both' }}>
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[.25em] text-[#9b6d42] font-semibold">
              <span>🌿</span>
              <span>Plant-Powered Craftsmanship</span>
            </div>
            <h2 className="font-serif text-[clamp(36px,4.5vw,56px)] font-normal leading-[1.1] tracking-[-0.03em] text-[#3b2010]">
              Pure botanical formulas born from{' '}
              <em className="italic text-[#9b6d42]">Myanmar's rich soil.</em>
            </h2>
            <p className="text-sm leading-relaxed text-[var(--color-text-muted)] font-light sm:text-base">
              At Yamin Glow Lab, we believe that luxury skincare should be a grounded, sensorial ritual.
              Our coffee body scrub pairs hand-selected, freshly roasted coffee grounds with nutrient-rich
              plant botanicals to revitalize texture and reveal your natural radiant glow.
            </p>
            <div className="grid grid-cols-2 gap-6 border-t border-[#e1d2c2] pt-6">
              <div>
                <span className="block font-serif text-3xl text-[#3b2010]">100%</span>
                <span className="text-[10px] uppercase tracking-[.15em] text-[var(--color-text-muted)]">Ethically Sourced</span>
              </div>
              <div>
                <span className="block font-serif text-3xl text-[#3b2010]">0%</span>
                <span className="text-[10px] uppercase tracking-[.15em] text-[var(--color-text-muted)]">Synthetic Fillers</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:col-span-7" style={{ animation: 'scaleIn .8s .1s ease-out both' }}>
            <div className="relative overflow-hidden rounded-2xl border border-[#e1d2c2] bg-[#e5c5b5]/30 p-3 shadow-2xl">
              <img
                src="/images/coffee-scrub-flatlay.jpg"
                alt="Coffee scrub ingredients flat lay"
                className="h-[450px] w-full rounded-xl object-cover"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-[#1a1412]/70 via-transparent to-transparent" />
              {/* Floating info */}
              <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between text-white">
                <div>
                  <p className="text-[10px] uppercase tracking-[.25em] text-[#e5c5b5] font-mono">Signature Formula</p>
                  <p className="font-serif text-xl">Roasted Espresso & Botanical Oils</p>
                </div>
                <div
                  className="hidden size-20 shrink-0 items-center justify-center rounded-full border border-white/30 p-2 text-center text-[9px] uppercase tracking-[.15em] text-[#e5c5b5] backdrop-blur-md font-mono md:flex"
                  style={{ animation: 'spin 22s linear infinite' }}
                >
                  100% Pure Blend
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT BENEFITS (BURMESE) ── */}
      <section className="border-t border-[#e1d2c2] bg-[#1a1412] px-[8vw] py-20 md:py-28 overflow-hidden relative">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#9b6d42]/10 rounded-full blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-[1200px]">
          {/* Section heading */}
          <div className="mb-16 text-center">
            <p className="mb-4 text-[10px] uppercase tracking-[.3em] text-[#d3ac9b] font-semibold">
              Yamin Glow Lab · Coffee Scrub
            </p>
            <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-normal leading-[1.15] text-white mb-4">
              Dead Cells များကို ဖယ်ရှားပေးပြီး
            </h2>
            <p className="font-serif text-[clamp(24px,3.5vw,40px)] italic text-[#d3ac9b] leading-[1.2]">
              နူးညံ့ချောမွေ့တဲ့ Glow Skin ကို ရယူပါ
            </p>
            <p className="mt-6 mx-auto max-w-lg text-sm text-[#a89286] font-light leading-relaxed">
              ကော်ဖီမှုန့်၏ သဘာဝအင်းအားက အသားအရေကို နက်ရှိုင်းစွာ သန့်စင်ပေးပြီး ကျန်းမာတောက်ပသော အသားအရေကို ရရှိစေပါသည်။
            </p>
          </div>

          {/* Three feature badges */}
          <div className="grid gap-6 sm:grid-cols-3 mb-16">
            {[
              {
                label: 'Exfoliates',
                icon: '✦',
                mm: 'Dead Skin ကို ဖယ်ရှားပြီး ခြောက်သွေ့မှုကို လျှော့ကျစေသည်။',
              },
              {
                label: 'Smoothes',
                icon: '◈',
                mm: 'အသားအရေကို နူးညံ့ ချောမွေ့စေသည်။',
              },
              {
                label: 'Brightens',
                icon: '✧',
                mm: 'အသားအရေကို တောက်ပ ဝင်းလက်စေသည်။',
              },
            ].map(({ label, icon, mm }) => (
              <div
                key={label}
                className="group relative rounded-2xl border border-[#332620] bg-[#231a15] p-6 transition-all duration-500 hover:border-[#d3ac9b]/50 hover:bg-[#2b201b]"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full border border-[#d3ac9b]/30 text-[#d3ac9b] text-sm backdrop-blur-sm">
                    {icon}
                  </span>
                  <span className="text-xs uppercase tracking-[.2em] font-semibold text-white">{label}</span>
                </div>
                <p className="text-sm leading-relaxed text-[#a89286] font-light">{mm}</p>
              </div>
            ))}
          </div>

          {/* Benefits grid with product images */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#332620] bg-[#231a15]">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p1}
                  alt="Coffee Scrub Glow Skin"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5 space-y-3">
                <h3 className="font-serif text-lg text-white">Glow Skin ကို ရယူပါ</h3>
                <ul className="space-y-2">
                  {[
                    'အမည်းစက်နှင့် အသားရောင် မညီညာခြင်းကို လျှော့ချပေးခြင်း',
                    'အသားအရေကို တင်းရင်းစိုပြေစေခြင်း',
                    'ကြည်လင်ဝင်းပမှုကို နှိုးထစေခြင်း',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#a89286] font-light leading-relaxed">
                      <span className="mt-1 text-[#d3ac9b] shrink-0">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#332620] bg-[#231a15]">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p2}
                  alt="Coffee Scrub Daily Use"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5 space-y-3">
                <h3 className="font-serif text-lg text-white">နေ့စဉ် ဂရုစိုက်မှု</h3>
                <ul className="space-y-2">
                  {[
                    'နေလောင်ရာများ သက်သာစေခြင်း',
                    'ဆဲလ်သေများကို ညီညာစွာ ဖယ်ရှားပေးခြင်း',
                    'အသားအရေ ဝင်းဝါစိုပြေစေခြင်း',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#a89286] font-light leading-relaxed">
                      <span className="mt-1 text-[#d3ac9b] shrink-0">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#332620] bg-[#231a15]">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p3}
                  alt="Coffee Scrub Natural Blend"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5 space-y-3">
                <h3 className="font-serif text-lg text-white">သဘာဝ ကော်ဖီစွမ်းအား</h3>
                <ul className="space-y-2">
                  {[
                    'သဘာဝအတိုင်း နူးညံ့ချောမွေ့စေခြင်း',
                    'အရေပြားအပေါက်များ ကျုံ့စေခြင်း',
                    'သွေးလှည့်ပတ်မှု ကောင်းစေခြင်း',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#a89286] font-light leading-relaxed">
                      <span className="mt-1 text-[#d3ac9b] shrink-0">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#332620] bg-[#231a15]">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p4}
                  alt="Coffee Scrub Dead Skin Care"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5 space-y-3">
                <h3 className="font-serif text-lg text-white">ရရှိမည့် ရလဒ်များ</h3>
                <ul className="space-y-2">
                  {[
                    'ခြောက်သွေ့မှုကို လျှော့ကျစေခြင်း',
                    'အသားအရေ တောက်ပ ဝင်းလက်စေခြင်း',
                    'ကော်လာဂျင် ထုတ်လုပ်မှု မြှင့်တင်ပေးခြင်း',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#a89286] font-light leading-relaxed">
                      <span className="mt-1 text-[#d3ac9b] shrink-0">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom packaging banner */}
          <div className="mt-12 rounded-2xl border border-[#332620] bg-[#231a15] p-8 text-center">
            <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] uppercase tracking-[.2em] text-[#d3ac9b] font-medium">
              <span>Yamin Glow Lab</span>
              <span className="text-[#8c6d5d]">·</span>
              <span>Coffee Scrub</span>
              <span className="text-[#8c6d5d]">·</span>
              <span>Natural . Gentle . Radiance</span>
              <span className="text-[#8c6d5d]">·</span>
              <span>320g</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── COFFEE SCRUB FEATURE ── */}
      <section className="border-t border-[#e1d2c2] bg-[#f7f0e8] px-[8vw] py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <p className="mb-5 text-[10px] uppercase tracking-[.28em] text-[#9b6d42]">Our Hero Product</p>
          <div className="grid items-start gap-16 md:grid-cols-2 md:gap-24">

            {/* Product image + details */}
            <div className="group relative" style={{ animation: 'scaleIn .8s ease-out both' }}>
              <div className="aspect-square overflow-hidden rounded-2xl border border-[#e1d2c2] bg-[#ede4d8]">
                <img
                  src={product1Img}
                  alt="Yamin Coffee Scrub"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
              </div>
              {/* Product info card */}
              <div className="mt-8 flex items-end justify-between border-t border-[#e1d2c2] pt-6">
                <div>
                  <p className="mb-1 text-[10px] uppercase tracking-[.2em] text-[#9b6d42]">Exfoliating Body Treatment</p>
                  <h3 className="font-serif text-2xl text-[#3b2010]">Organic Coffee Scrub</h3>
                </div>
                <div className="text-right">
                  <p className="font-serif text-2xl text-[#3b2010]">15,000 Ks</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[.1em] text-[#9b6d42]">320g · Fresh Batch</p>
                </div>
              </div>
            </div>

            {/* Ingredients */}
            <div style={{ animation: 'fadeIn .9s .15s ease-out both' }}>
              <h2 className="mb-10 font-serif text-[clamp(32px,4vw,52px)] font-normal leading-[1.1] tracking-[-0.03em] text-[#3b2010]">
                What&apos;s inside<br />
                <em className="italic text-[#9b6d42]">every jar.</em>
              </h2>

              <div className="space-y-8">
                {[
                  {
                    number: '01',
                    name: 'Arabica Coffee Grounds',
                    desc: 'Cold-pressed Arabica coffee that gently buffs away dead skin, boosts circulation and leaves skin visibly smoother.',
                  },
                  {
                    number: '02',
                    name: 'Virgin Coconut Oil',
                    desc: 'Deep-hydrating oil that restores the skin barrier and locks in moisture long after rinsing.',
                  },
                  {
                    number: '03',
                    name: 'Sweet Almond Oil',
                    desc: 'Rich in Vitamin E, it softens and nourishes even the driest skin without feeling greasy.',
                  },
                  {
                    number: '04',
                    name: 'Natural Vanilla Extract',
                    desc: 'Soothes irritation, neutralises free radicals and leaves a subtle, warm scent on the skin.',
                  },
                ].map(({ number, name, desc }) => (
                  <div key={number} className="group flex gap-6 border-t border-[#e1d2c2] pt-6 transition-colors hover:border-[#9b6d42]">
                    <span className="font-serif text-[11px] text-[#9b6d42] tracking-[.1em] mt-1 shrink-0">{number}</span>
                    <div>
                      <h4 className="mb-2 text-sm font-medium uppercase tracking-[.12em] text-[#3b2010] group-hover:text-[#9b6d42] transition-colors">{name}</h4>
                      <p className="text-sm font-light leading-relaxed text-[var(--color-text-muted)]">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── AUTHENTICITY VERIFICATION ── */}
      <section className="relative overflow-hidden border-y border-[#e1d2c2] bg-[#faf3ee] py-24">
        {/* Decorative bg circles */}
        <div className="pointer-events-none absolute -top-32 -right-32 size-[400px] rounded-full border border-[#e1d2c2]/30 opacity-30" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 size-[300px] rounded-full border border-[#e1d2c2]/20 opacity-20" />

        <div className="relative z-10 mx-auto max-w-7xl px-[8vw]">
          <div className="mx-auto max-w-3xl space-y-4 text-center mb-12">
            <span className="text-[10px] uppercase tracking-[.25em] text-[#9b6d42] font-semibold">
              A Promise in Every Jar
            </span>
            <h2 className="font-serif text-[clamp(30px,4vw,44px)] font-normal text-[#3b2010]">
              Verify Product Authenticity & Batch Origin
            </h2>
            <p className="mx-auto max-w-lg text-sm text-[var(--color-text-muted)]">
              Every Yamin Glow Lab jar features an embossed batch code on its base. Enter your code below to verify purity, batch date, and studio origin.
            </p>
          </div>

          <div className="mx-auto max-w-xl rounded-2xl border border-[#e1d2c2] bg-white p-6 shadow-xl sm:p-8">
            <form onSubmit={handleVerify} className="space-y-4">
              <label className="block text-[10px] uppercase tracking-[.2em] text-[#3b2010] font-medium">
                Enter Batch / Security Code
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="e.g., YT-2026-088B"
                  value={verifyCode}
                  onChange={(e) => setVerifyCode(e.target.value)}
                  className="flex-1 rounded-xl border border-[#e1d2c2] bg-[#FAF9F6] px-4 py-3.5 text-sm font-mono uppercase tracking-wider placeholder:text-[var(--color-text-muted)]/50 focus:border-[#9b6d42] focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  disabled={isVerifying}
                  className="flex items-center gap-2 rounded-xl bg-[#3b2010] px-6 py-3.5 text-[10px] uppercase tracking-[.2em] font-medium text-white transition-colors hover:bg-[#9b6d42] disabled:opacity-50"
                >
                  {isVerifying ? (
                    <span style={{ animation: 'spin 1s linear infinite', display: 'inline-block' }}>✦</span>
                  ) : (
                    <>
                      <span>🛡</span>
                      <span>Verify</span>
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Result */}
            {verificationResult && (
              <div className="mt-6 border-t border-[#e1d2c2] pt-6" style={{ animation: 'fadeIn .5s ease-out both' }}>
                {verificationResult.valid ? (
                  <div className="space-y-3 rounded-xl border border-[#d3ac9b] bg-[#f5efe8] p-4">
                    <div className="flex items-center gap-2 text-[#9b6d42]">
                      <span>✓</span>
                      <span className="text-[10px] uppercase tracking-[.2em] font-bold">100% Authentic Yamin Glow Lab Product</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 border-t border-[#e1d2c2]/80 pt-3 text-xs text-[#3b2010] font-mono">
                      <div>
                        <span className="block text-[10px] text-[var(--color-text-muted)] uppercase">Product:</span>
                        <span className="font-semibold">{verificationResult.product}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] text-[var(--color-text-muted)] uppercase">Batch Code:</span>
                        <span className="font-semibold">{verificationResult.batch}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] text-[var(--color-text-muted)] uppercase">Manufacture Date:</span>
                        <span>{verificationResult.mfgDate}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] text-[var(--color-text-muted)] uppercase">Studio Origin:</span>
                        <span>{verificationResult.location}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-xs text-red-700">
                    <p className="font-medium">{verificationResult.message}</p>
                    <p className="mt-1 text-[11px] opacity-80">Tip: Try code "YT-2026-088B" for a verified demo.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── INGREDIENTS BAND ── */}
      <section className="bg-[#1a1412] px-[8vw] py-20 md:py-24">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-14 text-center">
            <p className="mb-5 text-[10px] uppercase tracking-[.3em] text-[#d3ac9b]">Why Yamin</p>
            <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-normal leading-[1.1] text-[#FAF9F6]">
              Sourced with intention,<br />
              <em className="italic text-[#d3ac9b]">crafted with care.</em>
            </h2>
          </div>
          <div className="grid gap-10 sm:grid-cols-3">
            {[
              { icon: '☕', title: 'Pure Coffee', body: 'Cold-pressed Arabica coffee grounds that gently exfoliate, stimulate circulation and reveal brighter skin.' },
              { icon: '🌿', title: 'Botanical Oils', body: 'A blend of coconut, jojoba and rosehip oils that deeply nourish and lock in moisture after every scrub.' },
              { icon: '✦', title: 'Zero Nasties', body: 'No parabens, no sulphates, no synthetic fragrance — ever. Just clean ingredients you can trust.' },
            ].map(({ icon, title, body }) => (
              <div key={title} className="group border-t border-[#d3ac9b]/30 pt-8 transition-all duration-500 hover:border-[#d3ac9b]">
                <span className="mb-5 block text-3xl">{icon}</span>
                <h3 className="mb-3 font-serif text-xl text-[#FAF9F6] group-hover:text-[#d3ac9b] transition-colors">{title}</h3>
                <p className="text-sm font-light leading-relaxed text-[#d3ac9b]/70">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT SHOWCASE ── */}
      <section className="relative overflow-hidden border-t border-[#e1d2c2] bg-[#FAF9F6] px-[8vw] py-20 md:py-28">
        {/* Subtle decorative circles */}
        <div className="pointer-events-none absolute -top-40 -right-40 size-[500px] rounded-full border border-[#e1d2c2]/40 opacity-40" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 size-[380px] rounded-full border border-[#e1d2c2]/30 opacity-30" />

        <div className="mx-auto max-w-[1200px]">
          {/* Section header */}
          <div className="mb-14 text-center">
            <p className="mb-5 text-[10px] uppercase tracking-[.3em] text-[#9b6d42]">Our Collection</p>
            <h2 className="font-serif text-[clamp(36px,4.5vw,56px)] font-normal leading-[1.1] tracking-[-0.03em] text-[#3b2010]">
              Explore the<br />
              <em className="italic text-[#9b6d42]">Coffee Scrub range.</em>
            </h2>
          </div>

          {/* Product grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {SHOWCASE_PRODUCTS.map(({ img, name, price }, i) => (
              <div
                key={i}
                className="group cursor-default"
                style={{ animation: `fadeIn .7s ${i * 0.08}s ease-out both` }}
              >
                {/* Image card */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[#e1d2c2] bg-[#ede4d8]">
                  <img
                    src={img}
                    alt={name}
                    className="h-full w-full object-cover transition-all duration-[1s] ease-out group-hover:scale-105"
                  />
                  {/* Warm bottom gradient on hover */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1a1412]/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                {/* Label */}
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-[13px] font-medium uppercase tracking-[.08em] text-[#3b2010] transition-colors duration-300 group-hover:text-[#9b6d42]">
                      {name}
                    </h3>
                    <p className="mt-1 text-[11px] tracking-[.1em] text-[var(--color-text-muted)]">320g · Natural</p>
                  </div>
                  <p className="shrink-0 font-serif text-lg text-[#3b2010]">{price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative overflow-hidden border-t border-[#e1d2c2] bg-[#FAF9F6] px-[8vw] py-24 text-center md:py-32">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.06]">
          <div className="size-[600px] rounded-full border border-[#9b6d42]" />
          <div className="absolute size-[420px] rounded-full border border-[#9b6d42]" />
          <div className="absolute size-[260px] rounded-full border border-[#9b6d42]" />
        </div>
        <p className="mb-5 text-[10px] uppercase tracking-[.3em] text-[#9b6d42]">Begin your ritual</p>
        <h2 className="mb-8 font-serif text-[clamp(40px,5.5vw,72px)] font-normal leading-[1.05] tracking-[-0.03em] text-[#3b2010]">
          Your skin deserves<br />
          <em className="italic text-[#9b6d42]">the very best.</em>
        </h2>
        <p className="mx-auto mb-12 max-w-[420px] text-sm font-light leading-relaxed text-[var(--color-text-muted)]">
          Join thousands of customers who have transformed their skincare ritual
          with Yamin Glow Lab. Free shipping on orders over 50,000 Ks.
        </p>
        <Button to="/products">Shop the Collection</Button>
      </section>
    </>
  )
}