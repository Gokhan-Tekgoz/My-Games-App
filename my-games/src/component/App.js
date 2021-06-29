import React, { Component } from 'react';
import Search from './search'
import Gamelist from './gameList'

class App extends Component {

    state = {

        games: [
            {
                "id": 1,
                "name": "Game 1",
                "rating": 8.3,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://2game.com/wp/wp-content/uploads/2020/12/Untitled.jpg"
            },
    
            {
                "id": 2,
                "name": "Game 2",
                "rating": 6.8,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://digideutsche.com/wp-content/uploads/2020/12/wolcen-best-new-pc-games.jpg"
            },
    
            {
                "id": 3,
                "name": "Game 3",
                "rating": 7.9,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://www.pcgamesn.com/wp-content/uploads/2020/10/genshin-impact-free-pc-games.jpg"
            },
            {
                "id": 4,
                "name": "Game 4",
                "rating": 7.3,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://www.techspot.com/articles-info/1973/images/2020-01-19-image-4.jpg"
            },
            {
                "id": 5,
                "name": "Game 5",
                "rating": 4.8,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://www.pcgamesn.com/wp-content/uploads/2020/10/genshin-impact-free-pc-games.jpg"
            },
            {
                "id": 6,
                "name": "Game 6",
                "rating": 5.4,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://www.pcgames.de/screenshots/960x/2020/06/-Demon-s-Souls-Remake-pc-games.png"
            },
            {
                "id": 7,
                "name": "Game 7",
                "rating": 8.4,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://2game.com/wp/wp-content/uploads/2020/12/Untitled.jpg"
            },
        ],

        search: ''
    }

    deletegame = (game) => {
        const newGamelist = this.state.games.filter(
            w => w.id !== game.id
        );

        this.setState({
            games: newGamelist
        })
    }

    gameSearch = (event) => {
        this.setState({search: event.target.value})
    }

    render() {

        let gamesfilter = this.state.games.filter(
            (game) => {
                return game.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            }
        )
        return (    
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <Search propSearch={this.gameSearch}/>
                    </div>
                </div>
                
                <Gamelist
                games={gamesfilter}
                deletegameProps={this.deletegame}/>
            </div>
        );
    }
}

export default App;