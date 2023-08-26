import Image from 'next/image';
import paimonImg from '../../../public/paimon.png';
import "../../app/styles/publication.scss";
import {Nav} from "@/app/components/Nav";
import { Footer } from "@/app/components/Footer";
import Link from "next/link";

export default function Slug(){

    return (
        <div className="publication">
            <Nav />
            <div>
                <div>
                <div>
                    <h2>Nuni Lab</h2>
                    <p>
                    <Link href="https://nuni-lab.gitbook.io/nunilab/">GitBook do Nuni Lab</Link><br/>
                    Nuni lab é um repositório que criei e o mantenho atualizado conforme meus diversos estudos sobre tecnologias, na data atual não há muita coisa, porém você pode ver um pouco sobre álgebra booleana e algoritmos =)) acesse <Link href="https://nuni-lab.gitbook.io/nunilab/">aqui</Link> a página.
                    </p>
                </div>
                </div>
            </div>
            <Footer />
            <Image className='paimonImg' src={paimonImg} alt="Paimon" />
        </div>
    )

}

