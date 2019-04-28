import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function GameCard({ game, deleteGame }) {
    const defaultPic = "https://m.media-amazon.com/images/M/MV5BYTRhZWVkNTctMzRmYy00MDk1LWIzNDYtMjA1ZGE5YWJkYjU0XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY268_CR4,0,182,268_AL__QL50.jpg";
    let styleCard = {
        width: '250px',
        height: 'auto',
        margin: '10px'
    }

    let linkStyle = {
        margin: '5px'
    }

    let imgStyle = {
        height: '350px'
    }

    return (
        <div>
            <div className="card" style={styleCard}>
                <div className="image" >
                    <img style={imgStyle} src={game.cover || defaultPic} className="card-img-top" alt={game.title} />
                </div>
                <div className="card-body text-center">
                    <div className="card-title">
                        {game.title}
                    </div>
                    <Link to={`/games/doc/${game._id}`} className="btn btn-success" style={linkStyle} >Edit</Link>
                    <Link  className="btn btn-danger" style={linkStyle}  onClick={() => deleteGame(game._id)}>Delete</Link>
                </div>
            </div>
        </div>
    );
}

GameCard.propTypes = {
    game: PropTypes.object.isRequired,
    deleteGame: PropTypes.func.isRequired
}