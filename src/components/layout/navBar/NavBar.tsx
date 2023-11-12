import React from "react";
import { INavBar, INavEle } from "../types";

export const NavEle = ({ setActiveTab, tabName, active }: INavEle) => {
	return (
		<li
			className={`cursor-pointer h-full flex items-center justify-center  hover:opacity-100 ${
				active
					? "underline underline-offset-8 text-yellow-200 opacity-100"
					: "opacity-80"
			}`}
			onClick={setActiveTab}
		>
			<button className="text-center text-lg text-white outline-none">
				{tabName}
			</button>
		</li>
	);
};

const NavBar = ({ setActiveTab, activeTab, tabContent }: INavBar) => {
	return (
		<nav className="h-full w-full p-3">
			<ul className="h-full w-full flex items-center justify-center gap-5">
				{Object.keys(tabContent).map((key, i) => (
					<NavEle
						setActiveTab={() => setActiveTab(key)}
						tabName={key}
						active={activeTab === key}
					/>
				))}
			</ul>
		</nav>
	);
};

export default NavBar;
