import React from "react";
import { IFilterControlPanel } from "../../types";

const FilterControlPanel = ({
	onAddClick,
	buttonText,
}: IFilterControlPanel) => {
	return (
		<div className="flex gap-3 w-full">
			<button onClick={onAddClick} className="p-3 border text-lg text-cyan-600">
				{buttonText}
			</button>
		</div>
	);
};

export default FilterControlPanel;
