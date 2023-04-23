function Goal() {
  return <h1>Goaallll!!!!!!</h1>;
}

function Missed() {
  return <h1>Ops! Your Missed it! </h1>;
}

function Shooting(props) {
  let isGoal = props.isGoal;
  console.log(isGoal);
  if (isGoal) {
    return <Goal />;
  }
  return <Missed />;
}

export default Shooting;
