import { ITabSegment } from "../types";

const TabSegment = ({ children, styling }: ITabSegment) => {
	return (
		<div className={`${styling} rounded bg-blue-700`}>{children}</div>
	);
};

export default TabSegment;
