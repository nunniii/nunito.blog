import postsData from "../../app/data/1.json"; 
import Image from 'next/image';
import paimonImg from '../../../public/paimon.png';
import "../../app/styles/publication.scss";
import {Nav} from "@/app/components/Nav";
import { Footer } from "@/app/components/Footer";
import  Note  from "@/app/components/Note";


export default function Slug(){

    return (
        <div className="publication">
            <Nav />
            <div>
                {postsData.map((post, index) => (
                    <Note key={index} titles={post.titles} texts={post.texts} />
                ))}
            </div>
            <Footer />
            <Image className='paimonImg' src={paimonImg} alt="Paimon" />
        </div>
    )

}

