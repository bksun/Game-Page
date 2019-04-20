export const SET_GAMES = 'SET_GAMES';
export const ADD_GAME  = 'ADD_GAME';
export const GAME_FETCHED = 'GAME_FETCHED';
export const GAME_UPDATED = 'GAME_UPDATED';
export const GAME_DELETED = 'GAME_DELETED';

export function setGames(games){
    console.log(games);

    return {
        type: SET_GAMES,
        games
    }
}

export function addGame(game){
    console.log(game);
    return {
        type: ADD_GAME,
        game
    }
}

export function gameUpdated(game) {
    return {
        type: GAME_UPDATED,
        game
    }
}

export function gameDeleted(game) {
    return {
        type: GAME_DELETED,
        game
    }
}

export function gameFetched(game) {
    console.log('Game selected to take edit action:', game);
    return {
        type: GAME_FETCHED,
        game
    }
}

function handleResponse(response) {
    if (response.ok) {
        alert('handle request from action')
        return response.json();
    } else {
        let error = new Error(response.statusText);
        error.response =  response;
        throw error;
    }
}

export function deleteGame(_id) {

    alert(`action updated from action: ${_id}`);
    return dispatch => {
        return fetch(`http://localhost:3100/api/games/${_id}`, {
            method: 'delete'
            }
        ).then(handleResponse)
         .then(data => dispatch(gameDeleted(data)));
    }
}


export function updateGame(data) {

    alert(`action updated from action: ${data._id}`);
    return dispatch => {
        return fetch(`http://localhost:3100/api/games/${data._id}`, {
            method: 'put',
            body: JSON.stringify(data),
            headers: {
                "content-type": "application/json"
             }
            }
        ).then(handleResponse)
         .then(data => dispatch(gameUpdated(data.game)));
    }
}

export function fetchGame(id) {
    return dispatch => {
        return fetch(`http://localhost:3100/api/games/${id}`)
        .then(res => res.json())
        .then(data => dispatch(gameFetched(data)));
    }
}


export function saveGame(data) {
    return dispatch => {
        return fetch('http://localhost:3100/api/games', {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                "content-type": "application/json"
             }
            }
        ).then(handleResponse)
         .then(data => dispatch(addGame(data.game)));
    }
}

export function fetchGames() {
    return dispatch => { //call a function by passing a dispatch function to it.
        // alert('fetching data from api');
        fetch('http://localhost:3100/api/games')
        .then(res => res.json())
        .then(resGames => dispatch(setGames(resGames)));
    }
}
