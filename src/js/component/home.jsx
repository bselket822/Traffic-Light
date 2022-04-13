import React from "react";
import { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [lightColor, setlightColor] = React.useState("red");
	return (
		<div>
			<div id="trafficTop"></div>
			<div id="container">
				<div
					onClick={() => setlightColor("red")}
					className={`red light ${
						lightColor == "red" ? "selectedRed" : ""
					}`}></div>
				<div
					onClick={() => setlightColor("yellow")}
					className={`yellow light ${
						lightColor == "yellow" ? "selected" : ""
					}`}></div>
				<div
					onClick={() => setlightColor("green")}
					className={`green light ${
						lightColor == "green" ? "selectedGreen" : ""
					}`}></div>
			</div>
		</div>
	);
};
export default Home;
