export const CardDropdownRow = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<div className="col-span-2 row-span-1 gap-1 grid auto-cols-fr grid-flow-col mb-1 ">
			{children}
		</div>
	);
};