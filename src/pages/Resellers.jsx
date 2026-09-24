import PageIntro from '../components/PageIntro'
import Mark from '../components/Mark'

const resellers = [['01', 'The Ritual Room', 'Yangon, Bahan', '@theritualroom'], ['02', 'Maison Botanique', 'Mandalay, Chanayethazan', '@maisonbotanique'], ['03', 'Common Ground', 'Yangon, Dagon', '@commonground.mm'], ['04', 'Nourish Studio', 'Naypyidaw, Zabuthiri', '@nourishstudio']]

export default function Resellers() {
  return <PageIntro eyebrow="Find us" title={<>Shop the ritual<br /><em>in person.</em></>}><p className="mb-12 ml-0 max-w-[360px] text-sm leading-7 text-[#8d7565] md:mb-[70px] md:ml-[25%]">Our authorized stockists share our belief in slower, more considered beauty. Find your nearest space below.</p><div className="border-t border-[#e1d2c2]">{resellers.map(([number, name, location, handle]) => <a href="#contact" className="group grid grid-cols-[35px_1fr_20px] items-center gap-5 border-b border-[#e1d2c2] py-7 md:grid-cols-[60px_1fr_180px_20px]" key={name}><span className="text-[11px] text-[#a56c3f]">{number}</span><div><h3 className="mb-1.5 text-xl font-medium text-[#4b3023] group-hover:text-[#a56c3f]">{name}</h3><p className="m-0 text-[11px] text-[#8d7565]">{location}</p></div><span className="hidden text-[11px] text-[#8d7565] md:block">{handle}</span><Mark name="arrow" /></a>)}</div></PageIntro>
}
