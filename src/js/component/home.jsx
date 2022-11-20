import React from "react";
import Bar from "./navbar.jsx";
import Text from "./card.jsx"
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbo from "./jumbotron.jsx";
import Foot from "./footer.jsx";

//create your first component
const Home = () => {
	let bounce = [1,2,3,4]
	return (
		<div className="text-center">
			<Bar></Bar>
			<Jumbo></Jumbo>
			<div className="row">	
			{bounce.map(e=><Text></Text>)}
			</div>
			
			<Foot></Foot>
			
		</div>
	);
};

export default Home;
