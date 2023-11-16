import React from "react";
import { FilterListElement } from "./FilterListElement";
import { setStateType } from "../types";

const RenderFilterListElements = ({
	items,
	stateSetter,
}: {
	items: string[];
	stateSetter: setStateType;
}) => {
	return (
		<>
			{items.map((value: any) => (
				<FilterListElement
					key={value}
					value={value}
					stateSetter={stateSetter}
				/>
			))}
		</>
	);
};

export default RenderFilterListElements;
