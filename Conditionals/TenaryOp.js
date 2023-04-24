function Won() {
  return <p> woow, You won!!!!</p>;
}

function Lost() {
  return <p> Ops, you lost !!!</p>;
}

function Kick(props) {
  let goal = props.isGoal;
  return (
    <div className="tenary-op">
      <h2>Using tenary operator</h2>
      {goal ? <Won /> : <Lost />}
    </div>
  );
}

export default Kick;
