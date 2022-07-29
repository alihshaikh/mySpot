import React, { Component } from 'react';
import './Welcome.css';
import {Button, Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom'



var accessToken = '';

function getKey() {
    var hash = document.location.hash;
    hash = hash.replace('#', '?');
   const urlParams = new URLSearchParams(hash);
   const myToken = urlParams.get('access_token');
   accessToken = myToken;
   sessionStorage.clear();
   sessionStorage.setItem('access-token', accessToken);
   console.log(accessToken);
}



class Welcome extends React.Component {

    state = {
        userID: null,
        imageURL: null,
        followers: null,
        id: null,
    };



    async componentDidMount() {
        getKey();
        console.log(accessToken);
        let response = await fetch('https://api.spotify.com/v1/me', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('access-token'),
                'Content-Type': 'application/json'
            },
        })
        const data = await response.json()
        console.log(data);

        this.setState({userID: data.display_name, imageURL: data.images[0].url, followers: data.followers.total, id: data.id}, () => {
            sessionStorage.setItem('userID', this.state.id)
        })
        
    }



    render() { 
        return <div>

            <Container fluid>
                <Row>
                    <Col></Col>
                    <Col>
                        <div className="titleCover">
                            Welcome {this.state.userID}!
                        </div>
                    </Col>
                    <Col></Col>
                </Row>

                <Row>
                    <Col></Col>
                    <Col>
                    <div className="picCenter user">
                        <img src={this.state.imageURL}></img>
                    </div>
                    </Col>
                    <Col></Col>
                </Row>

                <Row>
                    <div className="titleCover">
                        Followers: {this.state.followers}
                    </div>
                </Row>

                <Row>
                    <Col></Col>
                    <Col>
                        <div className="titleCover">
                        <Link to="/artists">
                            <Button variant="secondary" size="lg">
                                    Get Top Artists
                            </Button>
                        </Link>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>

                <Row>
                    <Col></Col>
                    <Col>
                        <div className="titleCover">
                            <Link to="/songs">
                                <Button variant="secondary" size="lg">
                                        Get Favorite Songs
                                </Button>
                            </Link>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>

                <Row>
                    <Col></Col>
                    <Col>
                        <div className="titleCover">
                            <Link to="/playlist">
                                <Button variant="secondary" size="lg">
                                        Create a playlist with your favorite songs.
                                </Button>
                            </Link>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>

                
            </Container>

        </div>;
    }
}
 
export default Welcome;


