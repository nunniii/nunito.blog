import Image from 'next/image';

import paimonImg from '../../public/paimon.png';
import theGirlImg from '../../public/ann.png';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import  Publications  from './components/Publications';
import { Nav } from './components/Nav';

export default function Home() {
  return (
    <>
        <div className="myPage">
          <a href="https://nunniii.github.io/mateus">../</a>
        </div>
        <Header />
        <Publications />
        <Footer />
        <div className='theGirlImgContainer'>
          <Image className='theGirlImg' src={theGirlImg} alt="Girl" />
        </div>
        <Image className='paimonImg' src={paimonImg} alt="Paimon" />
    </>
  )
}
