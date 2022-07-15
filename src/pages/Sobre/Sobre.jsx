import images from '../../assets/eu.jpeg'
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

            <div className='redes'>
                <a className='rede' href='https://www.linkedin.com/in/coelholetticia/'>⭐Linkedin</a>
                <a className='rede' href='https://github.com/coelholeticia'>⭐ GitHub</a>
            </div>
      
        </>

    )
}

export default Sobre