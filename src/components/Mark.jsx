const paths = {
  arrow: 'M5 12h14M13 6l6 6-6 6',
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6 6 18',
  instagram: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm5.5-.5h.01',
}

export default function Mark({ name = 'arrow' }) {
  return <svg className="size-4 fill-none stroke-current stroke-[1.5] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24" aria-hidden="true"><path d={paths[name]} /></svg>
}
