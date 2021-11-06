import React, { useState } from 'react';
import photo from '../../assets/projects/Note-Taker.PNG'
import ghIcon from '../../assets/GitHub-Mark-Light-64px.png';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Projects() {

    const [portfolioProjects] = useState([
        {
            name: 'Note-Taker',
            ghLink: 'https://github.com/Challett1129/note-taker',
            liveLink: 'https://boiling-fjord-04679.herokuapp.com/',
            img: 'Note-Taker.PNG'
        }, 
        {
            name: 'Personal-Blog',
            ghLink: 'https://github.com/Challett1129/just-tech-news',
            liveLink: 'https://tech-blog-ng.herokuapp.com',
            img: 'Tech-Blog.PNG'
        },
        {
            name: 'JavaScript-Quiz',
            ghLink: 'https://github.com/Challett1129/bootcamp-quiz',
            liveLink: 'https://challett1129.github.io/bootcamp-quiz/',
            img: 'JavaScript-Quiz.PNG'
        },
        {
            name: 'Hike-With-Me', 
            ghLink: 'https://github.com/Challett1129/Group1-Project',
            liveLink: 'https://challett1129.github.io/Group1-Project/',
            img: 'hike_with_me.PNG'
        },
        {
            name: 'Weather-Dashboard', 
            ghLink: 'https://github.com/Challett1129/weather-app',
            liveLink: 'https://challett1129.github.io/weather-app/',
            img: 'weather-dashboard.PNG'
        },
        {
            name: 'Restaurant-Renaissance',
            ghLink: 'https://github.com/Challett1129/renaissance-restaurant',
            liveLink: 'https://renaissance-restaurant.herokuapp.com',
            img: 'Restaurant-Renaissance.PNG'

        }
    ])

    return (
        <section className='flex-row space-between'> 
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
