import Header from '../../components/Header/Header'
import image from '../../assets/project.gif'
import Repositorios from '../Projetos/Repositorios'

function Portfolio() {
  return(
    <>
    <Header 
       image={image} 
       description="ilustracao mulher com site"
     >
       Meus Projetos
     </Header>
 
     <Repositorios />
    </>
  )
 }
 
 export default Portfolio