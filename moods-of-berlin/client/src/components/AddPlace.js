import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

class AddPlace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      mood: "",
      imgPath: "",
      street: "",
      zip: "",
      city: "",
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    const mood = this.state.mood;
    const imgPath = this.state.imgPath;
    const street = this.state.street;
    const zip = this.state.zip;
    const city = this.state.city;
    axios
      .post("/api/places", {
        title,
        description,
        mood,
        imgPath,
        street,
        zip,
        city,
      })
      .then(() => {
        // this.props.getData();
        this.setState({
          title: "",
          description: "",
          mood: "",
          imgPath: "",
          street: "",
          zip: "",
          city: "",
        });
      })
      .catch((error) => console.log(error));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  fileSelectHandler = (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "moods-of-berlin");

    fetch("https://api.cloudinary.com/v1_1/benchberlin/image/upload ", {
      method: "POST",
      body: data,
    }).then((res) => {
      res.json().then((file) => {
        console.log(this);
        console.log(file.secure_url);
        this.setState({
          imgPath: file.secure_url,
        });
      });
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea
              type="text"
              name="description"
              value={this.state.description}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Mood:</label>
            <input
              type="text"
              name="mood"
              value={this.state.mood}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Image:</label>
            <input
              type="file"
              name="imgPath"
              onChange={this.fileSelectHandler}
            />
          </div>
          <div className="form-group">
            <label>Street:</label>
            <input
              type="text"
              name="street"
              value={this.state.street}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Zip:</label>
            <textarea
              type="text"
              name="zip"
              value={this.state.zip}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label>City:</label>
            <input
              type="text"
              name="city"
              value={this.state.city}
              onChange={(e) => this.handleChange(e)}
            />
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddPlace;
