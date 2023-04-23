import React from "react";

class SnapShot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoricolor: "blue",
    };
  }

  //componentDimount() will us to check whether the component
  //has been mount. if so the time will change the color to yellow
  //after a 5 second;
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoricolor: "yellow" });
    }, 5000);
  }

  //1)getDerivedStateFromProps
  //  get the derived props to replace with current state
  static getDerivedStateFromProps(props, state) {
    return { favoriteColor: props.favcol };
  }

  // 4) getSnapshotBeforeUpdate
  //you've access to props and state meaning that
  //even after the update you can still check what were
  //the value of state or props before the update
  getSnapshotBeforeUpdate(prevprops, prevstate) {
    document.getElementById(
      "div1"
    ).innerHTML = `4) Snap: the previous props color was:${prevprops.favcol}`;
    document.getElementById(
      "div2"
    ).innerHTML = `4)Snap: the previous state was : ${prevstate.favoricolor}`;
  }

  componentDidUpdate() {
    document.getElementById(
      "div3"
    ).innerHTML = `5) compoditUpdate:the updated color is: ${this.state.favoricolor}`;
  }

  render() {
    return (
      <>
        <h1> compoDidMount: my favorite color is {this.state.favoricolor}</h1>
        <div id="div1"> </div>
        <div id="div2"> </div>
        <div id="div3"> </div>
      </>
    );
  }
}
export default SnapShot;
