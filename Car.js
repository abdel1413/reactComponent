import React from "react";
// import ReactDOM from "react-dom/client";
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Jeep",
      make: "Wrangler",
      year: 2020,
      color: "green",
    };
  }

  changeColor = () => {
    this.setState({ color: "black" });
  };

  render() {
    return (
      <>
        <h1>
          {" "}
          my {this.state.year}car color is {this.state.color}{" "}
        </h1>
        <p> Its name is {this.state.name}</p>
        <p> I really love {this.state.make} brand</p>
        <button type="button" onClick={this.changeColor}>
          change color
        </button>
      </>
    );
  }
}

export default Car;
