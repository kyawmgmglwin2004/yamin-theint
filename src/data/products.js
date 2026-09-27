import product1Img from '../assets/yamin-product1.jpeg'
import velvetBodyOil from '../assets/velvet_body_oil.jpg'
import coffeeScrub from '../assets/coffee_scrub.jpg'
import nightCream from '../assets/night_cream.jpg'
import pureBotanicals from '../assets/pure_botanicals.jpg'
import skincare from '../assets/skincare_texture.jpg'
import earthMinerals from '../assets/earth_minerals.jpg'
import p6 from '../assets/p6.jpg'
import p7 from '../assets/p7.jpg'
import heroImg from '../assets/Hero_img.jpg'

export const products = [
  {
    name: 'Organic Coffee Scrub',
    type: 'Exfoliating body treatment',
    price: '$28.00',
    image: product1Img,
    featured: true,
  },
  {
    name: 'Velvet Body Oil',
    type: 'Nourishing botanical oil',
    price: '$34.00',
    image: velvetBodyOil,
  },
  {
    name: 'Cloud Cleanse',
    type: 'Gentle daily wash',
    price: '$22.00',
    image: pureBotanicals,
  },
  {
    name: 'Botanical Toner',
    type: 'Balancing skin prep',
    price: '$24.00',
    image: skincare,
  },

  {
    name: 'Coffee Scrub — Daily',
    type: 'Exfoliating body treatment',
    price: '$28.00',
    image: coffeeScrub,
    featured: true,
  },
  {
    name: 'Hydrating Serum',
    type: 'Hyaluronic acid treatment',
    price: '$42.00',
    image: earthMinerals,
    featured: true,
  },
  {
    name: 'Repair Night Cream',
    type: 'Deep cellular hydration',
    price: '$48.00',
    image: nightCream,
  },
  {
    name: 'Luminous Foundation',
    type: 'Breathable skin tint',
    price: '$38.00',
    image: p6,
  },
  {
    name: 'Rose Lip Tint',
    type: 'Nourishing sheer color',
    price: '$18.00',
    image: p7,
  },
  {
    name: 'Mineral Sunscreen',
    type: 'Broad spectrum SPF 30',
    price: '$32.00',
    image: heroImg,
  },
]


export const navigation = [
  ['/', 'Home'],
  ['/products', 'Products'],
  ['/about', 'About'],
  ['/resellers', 'Resellers'],
  ['/contact', 'Contact'],
]
