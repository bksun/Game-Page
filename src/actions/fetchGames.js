export const SET_GAMES = 'SET_GAMES';

export function setGames(games){
    // console.log(games);

    return {
        type: SET_GAMES,
        games
    }
}

export function fetchGames() {
    return dispatch => { //call a function by passing a dispatch function to it.
        // alert('fetching data from api');
        fetch('http://www.mocky.io/v2/5ca587d0330000f1372ea780')
        .then(res => res.json())
        // .then(res => {console.log(res)})
        .then(data => dispatch(setGames(data)));
    }
}