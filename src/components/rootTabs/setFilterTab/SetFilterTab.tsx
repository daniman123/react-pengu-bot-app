import { useEffect, useState } from "react";
import BotRuntime from "./components/BotRuntime";
import SetCardType from "./components/SetCardType";
import SetPriceRanges from "./components/SetPriceRanges";

const SetFilterTab = () => {
	const [filterData, setFilterData] = useState({});
	
	useEffect(() => {
		console.log(filterData);
	}, [filterData]);

	return (
		<div className="h-full w-full grid auto-cols-fr grid-flow-col gap-4">
			<div className="grid auto-rows-auto grid-row-col gap-1 rounded bg-blue-700">
				<div className="grid auto-rows-auto grid-flow-row ">
					<SetCardType />
					<SetPriceRanges setFilterData={setFilterData} />
				</div>
				<div className="">
					<BotRuntime />
				</div>
			</div>
			<div className="bg-white"></div>
		</div>
	);
};

export default SetFilterTab;
