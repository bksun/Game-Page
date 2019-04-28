import React from 'react';
import GameCard from './GameCard';
import PropTypes from 'prop-types';


export default function GamesList({ games, deleteGame }) {

    const emptyMessage = (
        <p>There is no games available for you.</p>
    );

    const gameList = (
        <div className="card-deck">
            {games.map(game => <GameCard game={game} key={game._id} deleteGame={deleteGame} />)}            
        </div>
    );

    return (
        <div>
            {games.length === 0 ? emptyMessage : gameList}
        </div>
    )
}

GamesList.propTypes = {
    games: PropTypes.array.isRequired,
    deleteGame: PropTypes.func.isRequired
}