import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/homepage';
import Empresa from './pages/empresa';
import Industrias from './pages/industrias';
import Tutoriales from './pages/tutoriales';
import Contactos from './pages/contactos';

function App() {
  return (
    <BrowserRouter>
      <Route path='/'>
        <Navbar />
      </Route>

      <Route exact path='/'>
        <Homepage />
      </Route>

      <Route exact path='/empresa'>
        <Empresa />
      </Route>

      <Route exact path='/industrias'>
        <Industrias />
      </Route>

      <Route exact path='/tutoriales'>
        <Tutoriales />
      </Route>

      <Route exact path='/contactos'>
        <Contactos />
      </Route>
    </BrowserRouter>
  );
}

export default App;
