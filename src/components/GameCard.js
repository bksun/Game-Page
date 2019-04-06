import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function GameCard({ game }) {

    return (
        <div class="ui card">
            <div class="image" >
                <img src={game.cover} alt="game cover" />
            </div>
                <div class="content">
                    <div class="header">
                        {game.title}
                    </div>
                </div>
            </div>
            );
  }

  GameCard.propTypes = {
      game: PropTypes.object.isRequired
  }