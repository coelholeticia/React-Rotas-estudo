# ⭐ React - Router 

* O principal objetivo neste repositório e trabalhar com rotas. 
Sabe o menu de navegação que te direciona para paginas web diferentes, então é isso.
Usaremos as rotas em React. 

1. Instalamos o react-hook-dom para ajudar nesse processo.
```npm install react-router-dom@6```

2. Criar arquivo para gerenciar esse endereço.
```
import {  
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Home from '../Pages/Home'
import Sobre from '../Pages/Sobre'
import Portfolio from '../Pages/Portfolio'
import Contato from '../Pages/Contato'

function ApplicationRoutes(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="expenses" element={<Sobre />} />
        <Route path="invoices" element={<Portfolio />} />
         <Route path="invoices" element={<Contato />} />
      </Routes>
  </BrowserRouter>
  )
}
export default ApplicationRoutes
```
3. Criar um menu para aplicar essa rotas e ver funcionando no navegador 
```
import { Link } from 'react-router-dom'

const Menu = () =>{
  return(
    <ul className="menu">
      <li>
        <Link className="link" to="/">Home</Link>
      </li>
      <li>
        <Link  className="link" to="/sobre">Sobre</Link>
      </li>
      <li>
        <Link  className="link" to="/portfolio">Portfólio</Link>
      </li>
      <li>
        <Link className="link" to="/contato">Contato</Link>
      </li>
    </ul>
  )

}

export default Menu
```
4. E no nosso arquivo principal que o App.jsx chamamos a nossa rota
```
import ApplicationRoutes from './ApplicationRoutes'

function App() {
  return (
    <div>      
      <ApplicationRoutes/>    
    </div>   
  )
}

export default App;
```
Documentação: [React-Router](https://reactrouter.com/docs/en/v6)
Link Repositorio da aula: [Link-Repositorio](https://github.com/coelholeticia/On17-TodasEmTech-ReactIII)
