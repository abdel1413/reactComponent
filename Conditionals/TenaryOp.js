function Won() {
  return <h2> woow, You won!!!!</h2>;
}

function Lost() {
  return <h2> Ops, you lost !!!</h2>;
}

function Kick(props) {
  let goal = props.isGoal;
  return (
    <>
      <p>Using tenary operator</p>
      {goal ? <Won /> : <Lost />}
    </>
  );
}

export default Kick;
