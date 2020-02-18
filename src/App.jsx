import React, { Component } from "react";
// import NewChirp from "./components/NewChirp";
import "./App.css";
import Timeline from "./components/Timeline";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      message: "",
      chirpArray: [
        { userName: "Thom Y.", message: "I'm a creep haha" },
        { userName: "Richard James", message: "Beep beep boop beep lol" },
        { userName: "Jahseh", message: ".........." }
      ]
    };
  }
  handleName(e) {
    this.setState({ userName: e.target.value });
  }
  handleMsg(e) {
    this.setState({ message: e.target.value });
  }
  // submitClicked() {

  // }

  submitClicked() {

    const newChirp = {
      userName: this.state.userName,
      message: this.state.message
    }

    this.setState({ chirpArray: [...this.state.chirpArray, newChirp]})
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Chirpr</h1>
        <div className="container">
          <div className="row-lg" id="chirp-input">
            <input
              className="name-input"
              placeholder="Your name"
              onChange={e => {
                this.handleName(e);
              }}
              value={this.state.userName}
            />
            <input
              className="msg-input"
              placeholder="What's on your mind?"
              onChange={e => {
                this.handleMsg(e);
              }}
              value={this.state.message}
            />
            <button
              type="button"
              className="submit-btn btn btn-primary btn-sm"
              onClick={() => this.submitClicked()}
            >
              Chirp
            </button>
          </div>
          <Timeline chirps={this.state.chirpArray} />
        </div>
      </div>
    );
  }
}

export default App;
