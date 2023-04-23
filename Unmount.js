import React from "react";

class Unmount extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  deleteUmountClass = () => {
    this.setState({ show: false });
  };
  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    }
    return (
      <>
        <p> {myheader}</p>

        <button type="button" onClick={this.deleteUmountClass}>
          delete header
        </button>
      </>
    );
  }
}
export default Unmount;

class Child extends React.Component {
  componentWillUnmount() {
    alert("hee! the component name Header is about to umount");
  }
  render() {
    return <h1> Hello world! I'll be removed from DOM</h1>;
  }
}
