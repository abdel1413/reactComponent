function Goal() {
  return <p>Goaallll!!!!!!</p>;
}

function Missed() {
  return <p>Ops! Your Missed it! </p>;
}

function Shooting(props) {
  let isGoal = props.isGoal;
  console.log(isGoal);
  if (isGoal) {
    return (
      <div className="if-statement">
        <h2>Using if statement condition:</h2>
        <Goal />
      </div>
    );
  }
  return (
    <div className="if-statement">
      <h2>Using if statement condition:</h2>
      <Missed />{" "}
    </div>
  );
}

export default Shooting;
