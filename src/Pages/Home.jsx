import React, { Component } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Typewriter from 'typewriter-effect'
import './Home.css'

class Home extends React.Component {
    render() { 
        return <div>
        
            <Container fluid>
                <Row>
                    <Col></Col>
                    <Col>
                        <div className="titleCover">
                            mySpot
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>

            <div className ="middle ">
                <h1>
                <Typewriter
                    options={{
                        strings: ['Find your favorite artists.'],
                        autoStart: true,
                        loop: true
                    }}
                />
                </h1>
            </div>
            <div className="buttonformat">
                    //ENTER YOUR CLIENT ID
                    <Button href="https://accounts.spotify.com/authorize?client_id={ENTER YOUR CLIENT ID HERE}&response_type=code&redirect_uri=http%3A%2F%2Flocalhost:3000/welcome&scope=user-top-read%20user-read-currently-playing%20user-read-playback-state%20playlist-modify-public%20playlist-modify-private&amp;response_type=token&amp;show_dialog=true" variant="secondary" size="lg">
                        Login to Spotify
                    </Button>
                
            </div>

        </div>;
    }
}
 
export default Home;
