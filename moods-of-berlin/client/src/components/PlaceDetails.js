import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import EditPlace from "./EditPlace";

class PlaceDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getSinglePlace = () => {
    const { params } = this.props.match;
    axios
      .get(`/api/places/${params.id}`)
      .then((responseFromApi) => {
        console.log(responseFromApi);
        const thePlace = responseFromApi.data;
        this.setState(thePlace);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getSinglePlace();
  }

  // DELETE PLACE:
  deletePlace = () => {
    const { params } = this.props.match;
    axios
      .delete(`/api/places/${params.id}`)
      .then(() => {
        this.props.history.push("/places"); // !!!
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    console.log("<Places/> RENDER");

    return (
      <div>
        <div
          className="card"
          style={{ margin: "1em auto", width: "50%" }}
          key={this.state._id}
        >
          <img
            className="img-fluid"
            src={this.state.imgPath}
            alt={this.state.title}
          ></img>
          <div className="card-body">
            <h5 className="card-title">{this.state.title} </h5>
            <br></br>
            <p>
              <b>Mood: </b> {this.state.mood}
            </p>

            <p className="card-text">{this.state.description}</p>
            <p>
              <b>Address: </b>
              {this.state.street} {this.state.zip} {this.state.city}
            </p>
          </div>
          <div className="card-footer">
            <button type="button" className="btn btn-info mx-1">
              Edit
            </button>

            <button
              type="button"
              className="btn btn-danger mx-1"
              onClick={() => this.deletePlace()}
            >
              Delete
            </button>
            <br></br>

            <EditPlace
              thePlace={this.state}
              getThePlace={this.getSinglePlace}
              {...this.props}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PlaceDetails;
