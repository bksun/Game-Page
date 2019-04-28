import React, {Component} from 'react';
import {connect} from 'react-redux';
import GamesList from './GamesList';
import PropTypes from 'prop-types';
import {fetchGames, deleteGame} from '../actions/fetchGames';

class GamesPage extends Component {

constructor(props) {
    super(props)
  }

componentDidMount(){
  this.props.fetchGames();
}

handlePageChange(pageNumber) {
  console.log(`active page is ${pageNumber}`);
  this.setState({activePage: pageNumber});
}

render() {
  
    return (
        <div>
            <h2>Games List</h2>
            <GamesList games = {this.props.games} deleteGame = {this.props.deleteGame}/>
        </div>
    )
  }
}

GamesPage.propTypes = {
  games: PropTypes.array.isRequired,
  fetchGames: PropTypes.func.isRequired,
  deleteGame: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    games: state.games
  }
}

export default connect(mapStateToProps, {fetchGames, deleteGame})(GamesPage);