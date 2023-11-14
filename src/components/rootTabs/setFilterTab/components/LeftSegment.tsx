import React from "react";
import SetCardType from "./cardTypes/SetCardType";
import SetPriceRanges from "./priceRanges/SetPriceRanges";
import BotRuntime from "./BotRuntime";
import { ILeftSegment } from "../types";

const LeftSegment = ({ setFilterData }: ILeftSegment) => {
	return (
		<div className="grid auto-rows-auto grid-row-col gap-1 rounded bg-blue-700">
			<div className="grid auto-rows-auto grid-flow-row ">
				<SetCardType setFilterData={setFilterData} />
				<SetPriceRanges setFilterData={setFilterData} />
			</div>
			<div>
				<BotRuntime />
			</div>
		</div>
	);
};

export default LeftSegment;
