import React from 'react';
import Container from '../components/Container/Container';
import Hero from '../components/Hero/Hero';
import Row from '../components/Row/Row';
import Col from '../components/Col/Col';

export default function About() {
    return (
        <div>
            <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
                <h1>Pupper</h1>
                <h2>A home for all the Good Boys and Girls</h2>
            </Hero>
            <Container style={{ marginTop:30}}>
                <Row>
                    <Col size="mid-12">
                        <h1>Welcome to Pupper!</h1>
                    </Col>
                </Row>
                <Row>
                    <Col size="mid-12">
                        <p> The perfect place to find the perfect match.</p>
                        <p> Search for your favorite breeds</p>
                        <p> Select the dogs you like and if they like you back... it's a match!</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}