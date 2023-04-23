import React from "react";

class ShoudUpdates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritColor: "green",
    };
  }

  shouldComponentUpdate() {
    return true;
  }

  colorChanger = () => {
    return this.setState({ favoritColor: "magenta" });
  };

  render() {
    return (
      <>
        <h1> my favorite color is {this.state.favoritColor}</h1>
        <button type="button" onClick={this.colorChanger}>
          change color
        </button>
      </>
    );
  }
}
export default ShoudUpdates;
