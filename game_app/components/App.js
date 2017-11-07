import React, { Component } from 'react';
import axios from 'axios';
import { Button, Grid, Rating, Segment } from 'semantic-ui-react';
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            games: []
        };
    }

    getAllGames = () => {
        var that = this;
        var url = 'http://localhost:3000/api/getAllGames';
        axios.get(url).then(response => {
            console.log(response.data);
            that.setState({
                games: response.data
            });
        }).catch(error => {
            console.error("Cannot find games:" + error);
        });
    }

    createGameComponent = (data) => {
        return (
            <Segment key={data.uid} >
                <h1>{data.title}</h1>
                <hr />
                <h1>{data.platforms.map((platform, idx) => {
                    return (
                        <span key={idx}>{platform}</span>
                    );
                })}</h1>
                <Rating disabled maxRating='10' rating={data.rating} size='large' />
            </Segment>
        );
    }

    render() {
        var games;
        if (this.state.games.length > 0) {
            games = this.state.games.map(this.createGameComponent);
        }
        return (
            <Grid columns='equal' style={AppStyle.grid}>
                <Grid.Column width={3}>
                    <Button onClick={this.getAllGames}>Get all games</Button>
                </Grid.Column>
                <Grid.Column width={10}>
                    {games ? games : null}
                </Grid.Column>
                <Grid.Column width={3}>
                </Grid.Column>
            </Grid>
        );
    }
}
export default App;

const AppStyle = {
    grid: {
        marginTop: 50
    }
}