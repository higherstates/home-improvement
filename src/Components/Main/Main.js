import React, { useState, useEffect, createContext } from "react";
import "./Main.css";
import Filter from "../Filter/Filter";
import Slider from "../Slider/Slider";
import { data } from "../../data.json";

export const MainContext = createContext();

export const Main = () => {
	const [filters, setFilters] = useState([]);
	const [active, setActive] = useState(false);
	const [filteredItems, setFilteredItems] = useState([]);
	// console.log(filters);
	console.log(filteredItems);

	useEffect(() => {
		console.log("remove filter");
	}, [filters, filteredItems]);

	return (
		<div id="main">
			<MainContext.Provider
				value={{
					filters,
					setFilters,
					active,
					setActive,
					filteredItems,
					setFilteredItems,
					data,
				}}
			>
				<Filter />
				<Slider />
			</MainContext.Provider>
		</div>
	);
};
