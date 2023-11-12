import React from "react";

export const SearcBar = () => {
	return (
		<div className="flex items-center justify-center col-span-2 row-span-1">
			<input
				className="w-1/2 py-1 outline-none indent-3"
				type="text"
				placeholder="search card . . ."
			/>
		</div>
	);
};

export const CardDropdown = () => {
	return (
		<div className=" col-span-2 row-span-1 gap-1 grid auto-cols-fr grid-flow-col mb-1">
			<div className="bg-white">y</div>
			<div className="bg-slate-400">ds</div>
		</div>
	);
};

const SetCardType = () => {
	return (
		<div className="w-full grid grid-cols-2 grid-rows-5 gap-1 p-1">
			<SearcBar />
			<CardDropdown />
			<CardDropdown />
			<CardDropdown />
			<CardDropdown />
		</div>
	);
};

export default SetCardType;
