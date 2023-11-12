import React from "react";

const SetPriceRanges = () => {
	return (
		<div className="w-full grid auto-rows-fr grid-flow-row gap-1 p-1">
			<div id="bid-price" className="grid auto-cols-fr grid-flow-col">
				<div>min</div>
				<div>high</div>
			</div>
			<div id="bin-price" className="grid auto-cols-fr grid-flow-col">
				<div>min</div>
				<div>high</div>
			</div>
		</div>
	);
};

export default SetPriceRanges;
