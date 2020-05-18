import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

class EditPlace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.thePlace.title,
      description: this.props.thePlace.description,
      mood: this.props.thePlace.mood,
      imgPath: this.props.thePlace.imgPath,
      street: this.props.thePlace.street,
      zip: this.props.thePlace.zip,
      city: this.props.thePlace.city,
    };
  }

  handleFormSubmit = (event) => {
    const title = this.state.title;
    const description = this.state.description;
    const mood = this.state.mood;
    const imgPath = this.state.imgPath;
    const street = this.state.street;
    const zip = this.state.zip;
    const city = this.state.city;

    event.preventDefault();

    axios
      .put(`/api/places/${this.props.thePlace._id}`, {
        title,
        description,
        mood,
        imgPath,
        street,
        zip,
        city,
      })
      .then(() => {
        this.props.getThePlace();
        // after submitting the form, redirect to '/projects'
        this.props.history.push("/places");
      })
      .catch((error) => console.log(error));
  };

  handleChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleChangeDesc = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  handleChangeMood = (event) => {
    this.setState({
      mood: event.target.value,
    });
  };

  handleChangeImgPath = (event) => {
    this.setState({
      imgPath: event.target.value,
    });
  };

  handleChangeStreet = (event) => {
    this.setState({
      street: event.target.value,
    });
  };

  handleChangeZip = (event) => {
    this.setState({
      zip: event.target.value,
    });
  };

  handleChangeCity = (event) => {
    this.setState({
      city: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <hr />
        <h3>Edit form</h3>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={(e) => this.handleChangeTitle(e)}
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea
              type="text"
              name="description"
              value={this.state.description}
              onChange={(e) => this.handleChangeDesc(e)}
            />
          </div>
          <div className="form-group">
            <label>Mood:</label>
            <input
              type="text"
              name="mood"
              value={this.state.mood}
              onChange={(e) => this.handleChangeMood(e)}
            />
          </div>
          <div className="form-group">
            <label>Image:</label>
            <textarea
              type="text"
              name="imgPath"
              value={this.state.imgPath}
              onChange={(e) => this.handleChangeImgPath(e)}
            />
          </div>
          <div className="form-group">
            <label>Street:</label>
            <input
              type="text"
              name="street"
              value={this.state.street}
              onChange={(e) => this.handleChangeStreet(e)}
            />
          </div>
          <div className="form-group">
            <label>Zip:</label>
            <textarea
              type="text"
              name="zip"
              value={this.state.zip}
              onChange={(e) => this.handleChangeZip(e)}
            />
          </div>
          <div className="form-group">
            <label>City:</label>
            <input
              type="text"
              name="city"
              value={this.state.city}
              onChange={(e) => this.handleChangeCity(e)}
            />
          </div>

          <input
            className="btn btn-success btn-lg mx-1"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}

export default EditPlace;
