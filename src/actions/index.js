export const selectedSong= function(Songs)  {
    return {
        type: 'MUSIC_SELECTED',
        payload: Songs
    }
}