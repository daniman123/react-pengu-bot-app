import React from "react";
import { handleAddFilter } from "../../utils";
import { IFilterControlPanel } from "../../types";

const FilterControlPanel = ({
	setSearchFilters,
	filterData,
}: IFilterControlPanel) => {
	return (
		<div className="flex gap-3">
			<button
				onClick={() => handleAddFilter(setSearchFilters, filterData)}
				className="p-3 border"
			>
				Add
			</button>
		</div>
	);
};

export default FilterControlPanel;
