import React, {useState} from 'react';
import './App.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Row';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Projects from './components/Projects';
import {capitalizeFirstLetter} from './utils/helpers';

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
    <header>
      <div className="flex-row-header col-12">
        <h1>
          <a href='/'> Collin Hallett </a>
        </h1>
          <ul className="no-style-list flex-row">
            {categories.map((category) => (
              <li className={`${currentCategory.name === category.name && 'navActive'}`}
              key={category.name} 
              >
                <span 
                onClick={() => {setCurrentCategory(category)}}
                >
                  {capitalizeFirstLetter(category.name)}
                </span>
                </li>
            ))}
          </ul>
        </div>
    </header>
      <main>
        <Container fluid>
        <About></About>
        <ContactForm></ContactForm>
        <Projects></Projects>
        </Container>
      </main>
    </div>

  );
}

export default App;
