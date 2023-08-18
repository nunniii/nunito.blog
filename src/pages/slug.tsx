import Image from 'next/image';
import paimonImg from '../../public/paimon.png';


import "../app/styles/publication.scss";

import {Nav} from "@/app/components/Nav";
import { Footer } from "@/app/components/Footer";



export default function Slug(){
    return (
        <div className="publication">
            <Nav />
            <h1>Sluuuuuug uwu</h1>  
            <Footer />
            <Image className='paimonImg' src={paimonImg} alt="Paimon" />
        </div>
    )

}