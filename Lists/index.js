import React from "react";
import Garag from "./Garag";

function GarageCars() {
  let cars = ["toyota", "Mazda", "Ford", "Jeep"];
  let carsInd = [
    { id: 1, brand: "Toyota" },
    { id: 2, brand: "Mazda" },
    { id: 3, brand: "Ford" },
    { id: 4, brand: "Jeep" },
    { id: 5, brand: "Hyndai" },
  ];

  return (
    <div className="lists">
      <h2> Render list elements using map loop</h2>
      <ul>
        {cars.map((car) => (
          <Garag brand={car} />
        ))}
      </ul>
      <ul>
        {carsInd.map((car) => (
          <Garag key={car.id} brand={car.brand} />
        ))}
      </ul>
    </div>
  );
}

export default GarageCars;
