import React, { Component } from 'react';
import Search from './search'
import Gamelist from './gameList'

class App extends Component {

    state = {

        games: [
            {
                "id": 1,
                "name": "The Flash",
                "rating": 8.3,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://dummyimage.com/240x340/616161/000000"
            },
    
            {
                "id": 2,
                "name": "Interstellar",
                "rating": 6.8,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://dummyimage.com/240x340/616161/000000"
            },
    
            {
                "id": 3,
                "name": "Arrow",
                "rating": 7.9,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://dummyimage.com/240x340/616161/000000"
            }
        ]
    }

    deletegame = (game) => {
        const newGamelist = this.state.games.filter(
            w => w.id !== game.id
        );

        this.setState({
            games: newGamelist
        })
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <Search/>
                    </div>
                </div>
                
                <Gamelist
                games={this.state.games}
                deletegameProps={this.deletegame}/>
            </div>
        );
    }
}

export default App;