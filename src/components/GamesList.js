import React from 'react';
import PropTypes from 'prop-types';

const emptyMessage = (
    <p>There is no games available for you.</p>
);

const gameList = (
    <p>Following Games List are available for you.</p>
);

export default function GamesList({games}) {
    return (
        <div>
            {games.length === 0 ? emptyMessage : gameList }
        </div>
    )
}

GamesList.propTypes = {
    games: PropTypes.array.isRequired
}