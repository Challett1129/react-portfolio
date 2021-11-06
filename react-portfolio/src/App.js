import React, {useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Row';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume'
import { capitalizeFirstLetter } from './utils/helpers';

function App() {

  const [categories] = useState([
    {
      name: 'about',
      link: '/'
    },
    {
      name: 'projects',
      link: '/projects'
    },
    {
      name: 'contact',
      link: '/contact'
    },
    {
      name: 'resume',
      link: '/resume'
    }
  ])

  const [currentCategory, setCurrentCategory] = useState(categories[0]);



  return (
    <div className='wrap'>
      <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      >
      </Nav>
      <main>
        <Routes>
          <Container fluid>
            <Route path='/' element={<About/>}/>
            <Route path='/contact' element={<ContactForm/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/resume' element={<Resume/>}/>
          </Container>
        </Routes>
      </main>
    </div>
  );
}

export default App;
