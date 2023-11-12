import React from "react";
import { useState } from "react";
import NavBar from "../navBar/NavBar";
import { ItabContent } from "../types";
import SetFilterTab from "../../rootTabs/setFilterTab/SetFilterTab";

const PrimaryLayout = () => {
	const [activeTab, setActiveTab] = useState("Set Filter");

	const tabContent: ItabContent = {
		"Set Filter": <SetFilterTab />,
		Players: "",
		Settings: "",
		"Discord Web Hook": "",
	};

	return (
		<main className="h-screen w-screen">
			<section className="relative h-[7%] w-full bg-blue-950">
				<NavBar
					setActiveTab={setActiveTab}
					activeTab={activeTab}
					tabContent={tabContent}
				/>
			</section>
			<section className="h-[93%] px-16 pb-16 pt-5 bg-black/80">
				<div className="h-full rounded-lg p-5 bg-blue-800">
					{tabContent[activeTab]}
				</div>
			</section>
		</main>
	);
};

export default PrimaryLayout;
