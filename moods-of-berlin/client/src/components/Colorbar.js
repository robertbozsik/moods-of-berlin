import React, { Component } from "react";

class InputTagCollection extends Component {
  render() {
    console.log(this.props.tags);
    const {
      search,
      price,
      color,
      gender,
      material,
      category,
    } = this.props.tags;
    return (
      <div id="chosen-tags">
        {search.inputTerm.length ? (
          <div className="collection" onClick={this.props.cancelSearchTag}>
            <h6 onClick={this.props.cancelSearchTag}>{search.inputTerm}</h6>
          </div>
        ) : null}

        {color.white ? (
          <div
            className="collection white"
            data-name="white"
            onClick={(e) => this.props.allFilterClickListener(e, "color")}
          >
            <h6 data-name="white">WHITE</h6>
          </div>
        ) : null}
      </div>
    );
  }
}

export default InputTagCollection;
