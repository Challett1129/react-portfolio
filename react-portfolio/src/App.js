import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';

function App() {

  const [categories] = useState([
    {
      name: 'about'
    },
    {
      name: 'projects'
    },
    {
      name: 'contact'
    },
    {
      name: 'resume'
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
        <About></About>
      </main>
    </div>

  );
}

export default App;
