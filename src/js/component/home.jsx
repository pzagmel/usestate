import React from "react";
import ContadorHooks from "./contadorhooks.js"; 
import Counter from "./contadorhooks2.js";



//create your first component
const Home = () => {
	return (
		<>
		<div>hello</div>
			<hr/> 
				<ContadorHooks titulo="Clicks"/>
			<hr/>
			    <Counter/>
			<hr/>
		</>
	);
};

export default Home;

