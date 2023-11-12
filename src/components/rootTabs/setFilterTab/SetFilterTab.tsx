import SetCardType from "./components/SetCardType";
import SetPriceRanges from "./components/SetPriceRanges";

const SetFilterTab = () => {
	return (
		<div className="h-full w-full grid auto-cols-auto grid-flow-col gap-4">
			<div className="grid auto-rows-fr grid-row-col gap-1">
				<div className="grid auto-rows-auto grid-flow-row bg-red-700">
					<SetCardType />
					<SetPriceRanges />
				</div>
				<div className="bg-black"></div>
			</div>
			<div className="bg-white"></div>
		</div>
	);
};

export default SetFilterTab;
