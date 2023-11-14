import { IFilterListElement } from "../types";

export const FilterListElement = ({ value, handleClick }: any) => {
	return (
		<li
			className="cursor-pointer opacity-80 hover:opacity-100 border rounded-md p-5"
			onClick={() => handleClick(value)}
			role="button"
			aria-label={`Remove filter ${value}`}
		>
			{value}
		</li>
	);
};
