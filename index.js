import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Car from "./Car";
import Mounting from "./Mounting";
import Updates from "./Updates";
import ShoudUpdates from "./ShouldUpdates";
import SnapShot from "./getsnapshotbeforeUpdate";
import Unmount from "./Unmount";
import Vehicule from "./Props/passPropAsArgument";

import Garage2 from "./Props/propsFromCompToAnother";
import Football from "./Events/onClickEvent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App color="red" />
    <Car make="Jeep" year="2020" color="blue" brand="wrangler" />
    <Mounting favcol="yellow" />
    <Updates favcol="yellow" />
    <ShoudUpdates favcol="orange" />
    <SnapShot favcol="lightblue" />

    <Unmount />
    <Vehicule brand="Ford" />
    <Garage2 />
    <Football />
  </React.StrictMode>
);
