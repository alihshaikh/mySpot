import React, { Component } from 'react';

class Playlist extends React.Component {

    state = {
        playlistCreated: false,
        songURI: [],
        playlistID: null,
    };


    async getFavSongURIS() {
        const response = await fetch('https://api.spotify.com/v1/me/top/tracks?time_range=short_term', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem('access-token'),
            'Content-Type': 'application/json'
        },
        
    })
        const data = await response.json()

        for(let i = 0; i < data.items.length; ++i) {
            this.state.songURI[i] = data.items[i].uri;
        }
        this.addFavSongsToPlaylists(data);
        console.log(this.state.songURI)
    }

    async addFavSongsToPlaylists(data) {
            console.log("in addFavSongstoPlaylist")
            const response = await fetch('https://api.spotify.com/v1/users/' + sessionStorage.getItem('userID') +'/playlists/' + sessionStorage.getItem('playlistID') + '/tracks', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + sessionStorage.getItem('access-token'),
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "uris":  [data.items[0].uri, data.items[2].uri, data.items[3].uri, data.items[4].uri, data.items[5].uri, data.items[6].uri, data.items[7].uri, data.items[8].uri, data.items[9].uri, data.items[10].uri, data.items[11].uri, data.items[12].uri, data.items[13].uri, data.items[14].uri
                ],
                
                }),

            })

        
    }


    async componentDidMount() {

        if(this.state.playlistCreated == false) {
                const response = await fetch('https://api.spotify.com/v1/users/' + sessionStorage.getItem('userID') + '/playlists ', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + sessionStorage.getItem('access-token'),
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: "My Favorite Songs",
                    description: "playlist created by mySpot",
                    public: true,
                }),
                
            })
            const data = await response.json()
            this.setState({playlistID: data.id}, () => {
                sessionStorage.setItem('playlistID', this.state.playlistID)
            })
            // console.log(this.state.playlistID)
            this.state.playlistCreated = true
            this.getFavSongURIS();
            // this.addFavSongsToPlaylists();
        }
        else {
            
        }
    
    }

    //'https://api.spotify.com/v1/users/' + sessionStorage.getItem('userID') + '/playlists '

    render() { 

        return <div>

            <div className ="middle changeFont">
                <div className="boldFont">
                    Playlist Created <br></br>
                </div>
            </div>

        </div>;
    }
}
 




export default Playlist;