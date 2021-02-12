import React from 'react';
import { connect } from 'react-redux';
import {selectedSong} from '../actions/index'

const SongList = (props) => {
    const listSongs = props.songs.map((song) => {
        return (
            <div key={song.title}>
                <span>{song.title}</span>
                <button onClick={() => props.selectedSong(song)}>details</button>
            </div>
        )  
      })

      return(
          <div className="list-container">
              <h2>Song List</h2>
              <ul>
                  {listSongs}
              </ul>
          </div>
      )
}

const mapStateToProps = (state) => {
    return {
        songs: state.songs
    }
}

const mapDispatchToProps =  {
    selectedSong: selectedSong
}

export default connect(mapStateToProps, mapDispatchToProps)(SongList);