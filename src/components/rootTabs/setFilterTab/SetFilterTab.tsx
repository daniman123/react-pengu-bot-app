import { useState } from "react";
import { FilterData } from "./types";
import LeftSegment from "./components/LeftSegment";
import RightSegment from "./components/RightSegment";

const SetFilterTab = () => {
	const [filterData, setFilterData] = useState<FilterData>({
		cardTypes: {
			rarity: "",
			gender: "",
			league: "",
			nationality: "",
			position: "",
			team: "",
		},
		priceRange: { max: 0, min: 0 },
	});

	

	return (
		<div className="h-full w-full grid auto-cols-fr grid-flow-col gap-4">
			<LeftSegment setFilterData={setFilterData} />
			<RightSegment filterData={filterData} />
		</div>
	);
};

export default SetFilterTab;
