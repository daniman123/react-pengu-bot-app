import { setStateType } from "../types";
import { onItemRemove } from "../utils";

export const FilterListElement = ({
	value,
	stateSetter,
}: {
	value: string;
	stateSetter: setStateType;
}) => {
	return (
		<li
			className="cursor-pointer opacity-80 hover:opacity-100 border rounded-md p-5"
			onClick={() => onItemRemove(stateSetter, value)}
			role="button"
			aria-label={`Remove filter ${value}`}
		>
			{value}
		</li>
	);
};
