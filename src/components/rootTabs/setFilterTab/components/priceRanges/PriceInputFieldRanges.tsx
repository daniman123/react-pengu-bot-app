import { IPriceInputFieldRanges } from "../../types";

export const PriceInputFieldRanges = ({ children }: IPriceInputFieldRanges) => {
	return (
		<div
			id="bin-price"
			className="relative w-full grid auto-cols-fr grid-flow-col"
		>
			{children}
		</div>
	);
};
