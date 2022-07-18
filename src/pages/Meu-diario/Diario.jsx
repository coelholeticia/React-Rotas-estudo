import Image from "../../components/Conteudo/Image"
import Titulo from "../../components/Conteudo/Titulo"
import Paragrafo from '../../components/Conteudo/Paragrafo';
import './diario.css'

function Diario() {


    return (
      <>
      <div className="card-1">

        <div className="cont-1">
          <Titulo Titulo="UX-UI"/>
          <Image  Image="https://c.tenor.com/Oy2Ua2XFvhoAAAAM/japa-fofinha-com-rosa.gif"/>
          <Paragrafo Paragrafo="Design de interface de utilizador ou engenharia de interface de utilizador é o desenvolvimento de computadores, aplicações,  máquinas, dispositivos de comunicação móveis, softwares e sítios web com o foco na experiência do utilizadores e interação" />
        </div>

        <div className="cont-2">
          <Titulo Titulo="GIT"/>
          <Image  Image="https://c.tenor.com/CNNtIUVE8OsAAAAC/buburohee-rohee.gif"/>
          <Paragrafo Paragrafo="É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo." /> 
        </div>

      </div>

      <div className="card-2">

        <div className="cont-1">
          <Titulo Titulo="HTML" />
          <Image Image="https://i.pinimg.com/originals/f8/8f/5e/f88f5e81e8911f39fa22311c8ee8fc0a.gif" />
          <Paragrafo Paragrafo="HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML. HyTime é um padrão para a representação estruturada de hipermídia e conteúdo baseado em tempo" />
        </div>

        <div className="cont-2">
          <Titulo Titulo="CSS" />
          <Image Image="https://i.pinimg.com/originals/bb/6e/9e/bb6e9e73cab4391f300abf560cb3a8ad.gif" />
          <Paragrafo Paragrafo="Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags <style>. Também é possível, em vez de colocar a formatação dentro do documento, criar um link para um arquivo CSS que contém os estilos." />
        </div>

      </div>

      <div className="card-3">
        
        <div className="cont-1">
          <Titulo Titulo="JavaScript" />
          <Image Image="https://c.tenor.com/w1qqgJvbOVsAAAAM/coreaninhas.gif" />
          <Paragrafo Paragrafo="JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web." />
        </div>

        <div className="cont-2">
          <Titulo Titulo="REACT" />
          <Image Image="https://i.pinimg.com/originals/38/21/0c/38210ce61e384fabb86fa7e86b1517ea.gif" />
          <Paragrafo Paragrafo="O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros." />
        </div>

      </div>

    
 
  
      </>
   
    )
  }
  
  export default Diario