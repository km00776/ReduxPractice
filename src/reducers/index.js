import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title: '', releaseDate: '05-03-2017', rating: 7.4},
        {title: '', releaseDate: '05-03-2017', rating: 7.4},
        {title: '', releaseDate: '05-03-2017', rating: 7.4},
        {title: '', releaseDate: '05-03-2017', rating: 7.4},
        {title: '', releaseDate: '05-03-2017', rating: 7.4}
    ]
}

const selectedSongReducer = (state = null, action) => {
    switch (action.type) {
        case 'MOVIE_SELECTED':
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
  songs: songsReducer, selectedSong: selectedSongReducer
})



// combined reducers, which will take only all the reducers and then pass it store. 
