import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import "./styles.scss";
import ProtectedRoute from "./protected/PrivateRoute";
import BubblePage from "./components/BubblePage";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={Login} />
				<ProtectedRoute exact path={`/Home`} component={BubblePage} />
			</Switch>
		</div>
	);
}

export default App;

/*
Lambda School
i<3Lambd4
*/
