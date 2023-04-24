function Parking(props) {
  let cars = props.mycars;
  console.log("cars", cars);

  return (
    <div className="log-op">
      <h2> Using logic && operator</h2>
      <h3>
        {" "}
        It returns a p tag if the length of car is greather than 0 otherwis
        nothing will display on the screen
      </h3>
      {cars.length > 0 && (
        <p className="carLength">you have {cars.length} in your parking;</p>
      )}
    </div>
  );
}

export default Parking;
