import React from 'react';
import ghIcon from '../../assets/icons8-github-100.png';
import inIcon from '../../assets/icons8-linkedin.svg';
import stackIcon from '../../assets/icons8-stack-overflow-100.png';

function Footer() {

    return (
        <footer className='footer flex-row'>
                <ul className='no-style-list'>
                    <li>
                        <a 
                            href='https://github.com/Challett1129'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img src={ghIcon} alt='GitHub Icon'/>
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://www.linkedin.com/feed/?trk=homepage-basic_google-one-tap-submit'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img src={inIcon} alt='LinkedIn Icon'/>
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://stackoverflow.com/users/16179843/xenas'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img src={stackIcon} alt='LinkedIn Icon'/>
                        </a>
                    </li>
                </ul>
        </footer>
    )
}


export default Footer;