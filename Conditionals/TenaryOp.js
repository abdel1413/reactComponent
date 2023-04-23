function Won() {
  return <h1> woow, You won!!!!</h1>;
}

function Lost() {
  return <h1> Ops, you lost !!!</h1>;
}

function Kick(props) {
  let goal = props.isGoal;
  return (
    <>
      <h1>Using tenary operator</h1>
      {goal ? <Won /> : <Lost />}
    </>
  );
}

export default Kick;
