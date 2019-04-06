export const SET_GAMES = 'SET_GAMES';
export const ADD_GAME  = 'ADD_GAME';

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

function handleResponse(response) {
    if (response.ok) {
        return response.json();
    } else {
        let error = new Error(response.statusText);
        error.response =  response;
        throw error;
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



// [
//     {"title": "cricket", "cover": ""},
//     {"title": "hockey", "cover": ""},
//     {"title": "football", "cover": ""},
//     {"title": "badminton", "cover": ""},
//     {"title": "snookers", "cover": ""},
//     {"title": "table tennis", "cover": ""},
//     {"title": "kabaddi", "cover": ""}
// ]