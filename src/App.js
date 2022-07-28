import React from 'react';
import NavBar from './components/NavBar';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Card from './components/Card';
import {useParams} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <NavBar />
        <Routes>
        <Route exact path='/' element=<Home/> />
        <Route path='/about' element=<About/> />
        <Route path='/contact' element=<Contact/> />
        <Route path='/card/:id' element=<Card params={useParams()}/> />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
