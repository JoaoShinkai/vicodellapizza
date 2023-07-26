
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import NavBarComponent from './components/NavBar/NavBarComponent'
import RoutesApp from './routes'

function App() {

  return (
    <>
      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>
    </>
  )
}

export default App
