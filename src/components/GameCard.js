import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export default function GameCard({ game }) {

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
                    <Link to={`/games/${game._id}`} className="ui basic button green">Edit</Link>
                    <Link to={`/games/${game._id}`} className="ui basic button red">Delete</Link>
                </div>
            </div>
        </div>
    );
}

GameCard.propTypes = {
    game: PropTypes.object.isRequired
}