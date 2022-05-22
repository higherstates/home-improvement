import React, { useState, useContext } from "react";
import { MainContext } from "../Main/Main";
import "./Tag.css";
import { BsXCircleFill } from "react-icons/bs";

const Tag = ({ filter }) => {
	const { filters, setFilters, filteredItems, setFilteredItems } =
		useContext(MainContext);

	const removeTag = (filter) => {
		if (filters.includes(filter)) {
			setFilters(filters.filter((s) => s != filter));
			setFilteredItems(
				filteredItems.filter(
					(item) => !item.metaData.designStyle.includes(filter.id)
				)
			);
		}
	};

	return (
		<div className="tag">
			<p>{filter.label}</p>
			<BsXCircleFill onClick={() => removeTag(filter)} />
		</div>
	);
};

export default Tag;
