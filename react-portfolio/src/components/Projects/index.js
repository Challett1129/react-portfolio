import React, { useState } from 'react';
import photo from '../../assets/projects/Note-Taker.PNG'
import ghIcon from '../../assets/GitHub-Mark-Light-64px.png';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Projects() {

    const [portfolioProjects] = useState([
        {
            name: 'note-taker',
            ghLink: 'https://github.com/Challett1129/note-taker',
            liveLink: 'https://boiling-fjord-04679.herokuapp.com/',
            img: 'Note-Taker.PNG'
        }, 
        {
            name: 'Personal-Blog',
            ghLink: 'https://github.com/Challett1129/just-tech-news',
            liveLink: 'https://tech-blog-ng.herokuapp.com',
            img: 'Tech-Blog.PNG'
        }
    ])

    return (
        <section className='flex-row flex-around'> 
        {portfolioProjects.map(( project ) => (
            <div className='image-container'>
                <img className='project-img'src={require(`../../assets/projects/${project.img}`).default} alt={capitalizeFirstLetter(project.name)}></img>
                <div className='image-overlay image-overlay-blur'>
                    <div className='image-title'><a href={project.liveLink} rel='noreferrer' target='_blank'>{capitalizeFirstLetter(project.name)}</a></div>
                    <a href={project.ghLink} rel='noreferrer' target='_blank'><img className='ghIcon' src={ghIcon}/></a>
                </div>
            </div>
        ))}
        </section>

    )
};


export default Projects;
