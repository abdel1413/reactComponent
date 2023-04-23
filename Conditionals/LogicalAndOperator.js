function Parking(props) {
  let cars = props.mycars;
  console.log("cars", cars);

  return (
    <>
      <h1> logic && operator</h1>
      <p> It returns an h1 tag if the length of car is greather than 0</p>
      <h1> In you Garage,</h1>
      {cars.length > 0 && (
        <h1 className="carLength">you have {cars.length} in your parking;</h1>
      )}
    </>
  );
}

export default Parking;
