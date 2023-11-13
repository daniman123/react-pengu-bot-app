import { IFilterListElement } from "../types";

export const FilterListElement = ({
	value,
	setSearchFilters,
}: IFilterListElement) => {
	const handleClick = () => {
		setSearchFilters((prev) => prev.filter((item) => item !== value));
	};

	return (
		<li
			className="cursor-pointer opacity-80 hover:opacity-100 border rounded-md p-5"
			onClick={handleClick}
			role="button"
			aria-label={`Remove filter ${value}`}
		>
			{value}
		</li>
	);
};
