import React, { useState, useEffect } from "react";
import Board from "./Board";
import { updateURLParameter } from "./helpers";
import "./index.css";

function App() {
	const [imgUrl, setImgUrl] = useState(
		"https://viajes.nationalgeographic.com.es/medio/2023/02/10/roma-imperial_c9b931db_230210130409_800x800.jpg"
	); // URL fija

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		if (urlParams.has("img")) {
			setImgUrl(urlParams.get("img"));
		}
	}, []);

	const handleImageChange = (e) => {
		setImgUrl(e.target.value);
		window.history.replaceState(
			"",
			"",
			updateURLParameter(window.location.href, "img", e.target.value)
		);
	};

	return (
		<div>
			{/* <h1>React sliding puzzle</h1> */}
			<Board imgUrl={imgUrl} />
			{/* <input value={imgUrl} onChange={handleImageChange} /> */}
		</div>
	);
}

export default App;
