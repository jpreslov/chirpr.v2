import React from 'react'
import NewChirp from "./NewChirp";

let Timeline = (props) => {
    return props.chirps.map((chirp, id) => <NewChirp chirp={chirp} key={id} /> )
}

export default Timeline