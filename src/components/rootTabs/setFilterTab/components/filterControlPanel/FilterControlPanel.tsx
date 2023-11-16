import React from "react";
import { IFilterControlPanel } from "../../types";
import { onItemAdd } from "../../utils";

const FilterControlPanel = ({
	stateSetter,
	value,
	buttonText,
}: IFilterControlPanel) => {
	return (
		<div className="flex gap-3 w-full">
			<button
				onClick={() => onItemAdd(stateSetter, value)}
				className="p-3 border text-lg text-cyan-600"
			>
				{buttonText}
			</button>
		</div>
	);
};

export default FilterControlPanel;
