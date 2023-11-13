import { PriceInputFieldRanges } from "./PriceInputFieldRanges";
import { PriceInputField } from "./PriceInputField";
import { IPriceRangeSection } from "../../types";

export const PriceRangeSection = ({
	min,
	max,
	setMin,
	setMax,
}: IPriceRangeSection) => (
	<div className="flex justify-between">
		<PriceInputFieldRanges>
			<PriceInputField
				inputLabel="Min"
				onChange={(value) => setMin(value)}
				value={min}
			/>
			<PriceInputField
				inputLabel="Max"
				onChange={(value) => setMax(value)}
				value={max}
			/>
		</PriceInputFieldRanges>
	</div>
);
