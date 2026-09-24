import PageIntro from '../components/PageIntro'

export default function About() {
  return <PageIntro eyebrow="Our story" title={<>Beauty with a<br /><em>point of view.</em></>}>
    <div className="mx-auto grid max-w-[900px] gap-11 md:grid-cols-[minmax(250px,430px)_1fr] md:gap-[11vw]"><img className="aspect-[.8] w-full max-w-[340px] object-cover saturate-[.45]" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1000&q=85" alt="Founder of Yamin Theint" /><div className="max-w-[380px] pt-1"><p className="mb-10 text-3xl italic leading-tight text-[#a56c3f]">“The most beautiful rituals are the ones that bring us back to ourselves.”</p><p className="mb-5 text-sm leading-7 text-[#8d7565]">Yamin Theint began with a simple belief: care should never feel complicated. Founded in Yangon, our studio creates tactile, effective body care inspired by the plants, textures, and unhurried rhythms of home.</p><p className="mb-5 text-sm leading-7 text-[#8d7565]">Each formula is an invitation to pause. To choose a little more intention in the everyday.</p><span className="mt-11 block text-2xl italic text-[#a56c3f]">Yamin Theint<br /><small className="font-sans text-[10px] not-italic tracking-[.1em] text-[#8d7565]">Founder and Formulator</small></span></div></div>
  </PageIntro>
}
