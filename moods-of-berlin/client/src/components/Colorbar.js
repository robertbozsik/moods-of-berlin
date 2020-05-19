import React, { Component } from "react";
import "./Colorbar.css";

class Colorbar extends Component {
  state = {
    mood: "",
  };

  sendJoyful = () => {
    this.setState({
      mood: "joyful",
    });
  };

  sendRelaxed = () => {
    this.setState({
      mood: "relaxed",
    });
  };

  sendEnergetic = () => {
    this.setState({
      mood: "energetic",
    });
  };

  sendBored = () => {
    this.setState({
      mood: "bored",
    });
  };

  sendThoughtful = () => {
    this.setState({
      mood: "thoughtful",
    });
  };

  sendMelancholic = () => {
    this.setState({
      mood: "melancholic",
    });
  };

  sendAnxious = () => {
    this.setState({
      mood: "anxious",
    });
  };

  sendAngry = () => {
    this.setState({
      mood: "angry",
    });
  };

  render() {
    return (
      <div className="container">
        <button className="box" onClick={this.sendJoyful}>
          joyful
        </button>
        <button className="box" onClick={this.sendRelaxed}>
          relaxed
        </button>
        <button className="box" onClick={this.sendEnergetic}>
          energetic
        </button>
        <button className="box" onClick={this.sendBored}>
          bored
        </button>
        <button className="box" onClick={this.sendThoughtful}>
          thoughtful
        </button>
        <button className="box" onClick={this.sendMelancholic}>
          melancholic
        </button>
        <button className="box" onClick={this.sendAnxious}>
          anxious
        </button>
        <button className="box" onClick={this.sendAngry}>
          angry
        </button>
      </div>
    );
  }
}

export default Colorbar;
