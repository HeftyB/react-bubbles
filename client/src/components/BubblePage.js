import React, { useState, useEffect } from "react";
import {fetchData} from "../protected/fetchData";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
	const [colorList, setColorList] = useState([]);

	useEffect(() => {
		fetchData()
			.then(res => {
				setColorList(res.data);
			})
			.catch(error => {
				console.log(error);
				debugger;
			});
	}, []);

	return (
		<>
			<ColorList colors={colorList} updateColors={setColorList} />
			<Bubbles colors={colorList} updateColors={setColorList} />
		</>
	);
};

export default BubblePage;
