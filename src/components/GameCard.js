import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export default function GameCard({ game, deleteGame }) {

    return (
        <div className="ui card">
            <div className="image" >
                <img src={game.cover} alt="game cover" />
            </div>
            <div className="content">
                <div className="header">
                    {game.title}
                </div>
            </div>

            <div className="extra content">
                <div className="ui two button">
                    <Link to={`/games/doc/${game._id}`} className="ui basic button green">Edit</Link>
                    <Link className="ui basic button red" onClick={() => deleteGame(game._id)}>Delete</Link>
                </div>
            </div>
        </div>
    );
}

GameCard.propTypes = {
    game: PropTypes.object.isRequired,
    deleteGame: PropTypes.func.isRequired
}