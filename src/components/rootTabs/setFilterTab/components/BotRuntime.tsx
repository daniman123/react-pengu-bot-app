import React from "react";

const BotRuntime = () => {
	return (
		<div className="w-full grid auto-cols-fr grid-flow-col gap-3 px-3">
			<button className="border rounded text-lg font-semibold bg-orange-400">Reset</button>
			<button className="border rounded text-lg font-semibold bg-green-600">Search</button>
		</div>
	);
};

export default BotRuntime;
