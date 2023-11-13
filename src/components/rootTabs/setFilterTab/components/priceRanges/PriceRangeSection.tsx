import { PriceInputFieldRanges } from "./PriceInputFieldRanges";
import { PriceInputField } from "./PriceInputField";

export const PriceRangeSection = ({ min, max, setMin, setMax }) => (
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
