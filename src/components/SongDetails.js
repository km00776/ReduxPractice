import React from 'react';
import { connect } from 'react-redux';

const SongDetails = (props) => {
    if(!props.selectedSong) {
        return(
            <div className="details-container" style={{width: '50%'}}>
                <h2>
                    Song
                </h2>
                <div className="properties"> 
                    <p>Seleted Song</p>
                </div>
            </div>
        )
    }
    else {
        return(
            <div className="details-container" style={{width: '70%'}}>
                <h2>Song</h2>
                <div className="properties">
                    <p>
                        Title: {props.selectedSong.title}
                    </p>
                    <p>
                        Release Date: {props.selectedSong.releaseDate}
                    </p>
                    <p>
                        Rating: {props.selectedSong.rating}
                    </p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedSong: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetails);