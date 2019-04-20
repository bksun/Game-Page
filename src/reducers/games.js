import {SET_GAMES, ADD_GAME, GAME_FETCHED, GAME_UPDATED} from '../actions/fetchGames';
export default function games(state = [], action = {}) {
    
    switch(action.type) {
        case ADD_GAME:
            return [
                ...state,
                action.game
            ];
        case SET_GAMES:
            return action.games;

        case GAME_UPDATED:
            alert('reducer called');
            return state.map(item => {
                if (item._id === action.game._id) {
                    return action.game;
                }
                else {
                    return item;
                }
            });
        
        case GAME_FETCHED:
            const index = state.findIndex(item => item._id === action.game._id);
            if (index > -1) {
                return state.map(item => {
                    if (item._id === action.game._id) {
                        return action.game;
                    } else {
                        return item
                    }
                });
            } else {
                return [
                    ...state,
                    action.game
                ];
            }

        default: return state;
    }
}