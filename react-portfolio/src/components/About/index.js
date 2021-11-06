import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Paper from '@mui/material/Paper';
import photo from '../../assets/portfolio-picture.jpg';

function About() {

    return (
        <Container>
            <Row>
                <img src={photo} className='aboutPicture' alt='Me'/>
                <Col>Hello! I'm a full-stack web developer currently based in Austin, Tx.</Col>
            </Row>
        </Container>
    )

}

export default About;