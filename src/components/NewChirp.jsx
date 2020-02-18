import React from "react";

let NewChirp = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.chirp.userName}</h5>
        <p> {props.chirp.message} </p>
      </div>
    </div>
  );
};

export default NewChirp;
