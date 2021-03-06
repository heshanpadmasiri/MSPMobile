import {
    FETCHING_ALBUMS,
    INITIAL_ALBUMS_FETCH_SUCCESS,
    ALBUMS_FETCH_SUCCESS,
    FETCHING_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    albums: [],
    refreshing: false,
    nextURL: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCHING_ALBUMS:
            return { ...state, refreshing: true }
        case INITIAL_ALBUMS_FETCH_SUCCESS:
            return { albums: action.payload.albums, nextURL: action.payload.nextURL, refreshing: false };
        case ALBUMS_FETCH_SUCCESS:
            if (action.payload && action.payload.nextURL === state.nextURL) {
                console.log('Douplicate fetch detected !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
                return state;
            }
            return { albums: [...state.albums, ...action.payload.albums], nextURL: action.payload.nextURL, refreshing: false };
        case FETCHING_ERROR:
            return { ...state, refreshing: false }
        default:
            return state;
    }
};

