import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <h2>hi there</h2>
//     </div>
//   );
// }

// function Car() {
//   return <h2> this is a function component</h2>;
// }

function Car(props) {
  return <h2> the color of my car is {props.color}</h2>;
}
function Garage() {
  return (
    <>
      <h1> What do we park in the garage?</h1>
      <Car />
    </>
  );
}

export default Garage;
