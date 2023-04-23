import React from "react";

/**Updata has:
 * 1 getDerivedStateFromProps
 * 2 shouldComponentUpdate
 * 3 render
 * 4 getSnapShotBeforeUpdate
 * 5 ComponentDidUpdate
 *
 */
class Updates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: "blue",
    };
  }

  //2) shouldComponentUpdate()
  // ask whether the React should continue rendering or not
  // if set to fals, this should stop the component from rendering anytime
  // there is an update.;
  shouldComponentUpdate() {
    return true;
  }

  changeColor = () => {
    this.setState({ favoriteColor: "green" });
  };

  //1)getDerivedStateFromProps
  //  get the derived props to replace with current state
  static getDerivedStateFromProps(props, state) {
    return { favoriteColor: props.favcol };
  }

  //3) render()
  render() {
    return (
      <>
        <h1> constructor: my favorite color is {this.state.favoriteColor}</h1>
        <button type="button" onClick={this.changeColor}>
          click to green
        </button>
        <div id="d1"></div>
        <div id="d2"></div>
      </>
    );
  }
}

export default Updates;
