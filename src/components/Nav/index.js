import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import { Link } from 'react-router-dom'


function Nav(props) {

  const {
    categories = [],
    currentCategory, 
    setCurrentCategory, 
  } = props

  return (
    <header>
      <div className="flex-row-header col-12">
        <h1>
          <a href='/about'> Collin Hallett </a>
        </h1>
          <ul className="no-style-list flex-row">
            {categories.map((category) => (
              <li className={`${currentCategory.name === category.name && 'navActive'}`}
              key={category.name} 
              >
                <Link to={category.link} 
                onClick={() => {setCurrentCategory(category)}}
                >
                  {capitalizeFirstLetter(category.name)}
                </Link>
                </li>
            ))}
          </ul>
        </div>
    </header>
  )
};

export default Nav;