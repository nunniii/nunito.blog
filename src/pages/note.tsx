import Image from 'next/image';
import paimonImg from '../../public/paimon.png';


import "../app/styles/publication.scss";

import {Nav} from "@/app/components/Nav";
import { Footer } from "@/app/components/Footer";
import {Publication} from "@/app/components/Publication";

export default function Note(){
    return (
        <>
            <Nav />
            <main>
                <Publication />
            </main>
            <Footer />
            <Image className='paimonImg' src={paimonImg} alt="Paimon" />

        </>
        
    )
}