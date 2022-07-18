import images from '../../assets/eu.jpeg'
import { AiFillGithub } from "react-icons/ai";
import Diario from '../Meu-diario/Diario';
import './sobre.css'

function Sobre() {
    return(
        <>
                  
            <div className="apresentacao">
                <img className="Minha-foto" src={images}  alt="Leticia-coelho-foto"/>
                <p className="text-Intro"> Olá!✌️ Bem-vindos ao meu Portfólio da Reprograma
                com ele você pode acessar todos meus projetos feitos lá e ainda outros projetos. 
                Espero que gostem! </p>
            </div>

            <Diario />

            <div className='redes'>
                <a className='rede' href='https://github.com/coelholeticia'><AiFillGithub /></a>
            </div>
      
        </>

    )
}

export default Sobre