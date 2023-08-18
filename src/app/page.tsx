import Image from 'next/image';

import paimonImg from '../../public/paimon.png';
import theGirlImg from '../../public/ann.png';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Publications } from './components/Publications';

export default function Home() {
  return (
    <>
        <Header />
        <Publications />
        <Footer />
        <Image className='theGirlImg' src={theGirlImg} alt="Girl" />
        <Image className='paimonImg' src={paimonImg} alt="Paimon" />
    </>
  )
}
