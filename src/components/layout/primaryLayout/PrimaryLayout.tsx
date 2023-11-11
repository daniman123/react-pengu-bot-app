import React from "react";
import { useState } from "react";

const PrimaryLayout = () => {
	const [first, setfirst] = useState(0);

	return (
		<>
			<header className="w-full flex">
				<div>yoooo</div>
				<div>{first}</div>
			</header>
			<div className="flex">
				<button
					className="mr-7 bg-slate-700"
					onClick={() => setfirst((prevState) => prevState - 1)}
				>
					down
				</button>
				<button
					className="mr-7 bg-red-600"
					onClick={() => setfirst((prevState) => prevState + 1)}
				>
					up
				</button>
			</div>
		</>
	);
};

export default PrimaryLayout;
