import React from "react";

/**
 *
 * 1 constructor(props)
 * 2 getDerivedStateFromProps( props, state)
 * 3 render() : called always
 * 4 componentDidMount
 */

class Header extends React.Component {
  //mounting has:
  //1constructor()
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: "blue",
    };
  }
  // 2 getDerivedStateFromProps(props, state)
  //   static getDerivedStateFromProps(props, state) {
  //     return { favoriteColor: props.favcol };
  //   }

  //4 componentDidMount () get called after the compo is rendered
  // to tell that the compo is already place in the DOM;
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "green" });
    }, 5000);
  }

  //3 render()
  render() {
    return <h1> the {this.state.favoriteColor} is my fovorite color </h1>;
  }
}

export default Header;
