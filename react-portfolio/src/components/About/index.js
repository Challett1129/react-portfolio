import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import photo from '../../assets/portfolio-picture.jpg';

function About() {

    return (
        <div className='flex-row-center'>
            <Container fluid className='paper'>
                <Row>
                    <div className='flex-row-center'>
                    <img src={photo} className='aboutPicture' alt='Me'/>
                    </div>
                    <Col>
                    <p>
                        Hello! I'm a full-stack web developer currently based in Austin, Tx. I have always had a passion
                    for problem solving and technology -- which thankfully web development combines both of those things! 
                    I wake up everyday excited for the possibilities computer languages bring us!
                    </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <p>
                    I enjoy spending my free time with my friends playing video games, DnD, and other nerdy hobbies, or
                    with my girlfriend and our zoo of animals (Clancy our cat, Avocado our dog, and Bongo our bearded dragon).
                    </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}

export default About;