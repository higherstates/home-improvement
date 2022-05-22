import React, { useState, useContext } from "react";
import { MainContext } from "../Main/Main";

import "./Filter.css";
import { BiSlider } from "react-icons/bi";
import Tag from "../Tag/Tag";
import FilterBox from "../FilterBox/FilterBox";

const Filter = () => {
	const { filters, setFilters, filteredItems, setFilteredItems } =
		useContext(MainContext);

	const [filterBox, setFilterBox] = useState(false);

	const handleClearAll = () => {
		setFilters([]);
		setFilteredItems([]);
	};

	return (
		<div id="filter">
			<span className="filter__text">Filter by:</span>
			<BiSlider
				className="filter__icon"
				onClick={() => setFilterBox((prev) => !prev)}
			/>
			{filterBox && <FilterBox />}
			<div className="filter__tags">
				{filters.length > 0 &&
					filters.map((filter, i) => <Tag key={i} filter={filter} />)}
			</div>
			{filters.length > 0 && (
				<button className="filter__btn" onClick={() => handleClearAll()}>
					Clear all
				</button>
			)}
		</div>
	);
};

export default Filter;
