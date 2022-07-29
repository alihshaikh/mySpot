import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Home.css'

// var accessToken = '';

// function getKey() {
//     var hash = document.location.hash;
//     hash = hash.replace('#', '?');
//    const urlParams = new URLSearchParams(hash);
//    const myToken = urlParams.get('access_token');
//    accessToken = myToken;
//    sessionStorage.clear();
//    sessionStorage.setItem('access-token', accessToken);
//    console.log(accessToken);
// }

class Artists extends React.Component {

    state = {
        a1: null,
        a1pic: null,
        a2: null,
        a3: null,
        a4: null,
        a5: null,
        a6: null,
        a7: null,
        a8: null,
        a9: null,
        a10: null,
    };

    async componentDidMount() {
        const response = await fetch('https://api.spotify.com/v1/me/top/artists?time_range=short_term', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem('access-token'),
            'Content-Type': 'application/json'
        },
        
    })
    const data = await response.json()
    console.log(data)
    
    this.setState({a1: data.items[0].name, a1pic: data.items[0].images[2].url})
    this.setState({a2: data.items[1].name})
    this.setState({a3: data.items[2].name})
    this.setState({a4: data.items[3].name})
    this.setState({a5: data.items[4].name})
    this.setState({a6: data.items[5].name})
    this.setState({a7: data.items[6].name})
    this.setState({a8: data.items[7].name})
    this.setState({a9: data.items[8].name})
    this.setState({a10: data.items[9].name})
    
    
    
    }


    render() { 
        return <div>
            
            <div className ="middle changeFont">
                <div className="boldFont">
                    Your Favorite Artists: <br></br>
                </div>
                {this.state.a1}<br></br>
                {this.state.a2}<br></br>
                {this.state.a3}<br></br>
                {this.state.a4}<br></br>
                {this.state.a5}<br></br>
                {this.state.a6}<br></br>
                {this.state.a7}<br></br>
                {this.state.a8}<br></br>
                {this.state.a9}<br></br>
                {this.state.a10}<br></br>
        
            </div>            

        </div>;
    }
}
 
export default Artists;