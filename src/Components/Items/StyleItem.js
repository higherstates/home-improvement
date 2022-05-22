import React, { useContext } from "react";
import { MainContext } from "../Main/Main";

const StyleItem = ({ style }) => {
	const {
		filters,
		setFilters,
		active,
		setActive,
		filteredItems,
		setFilteredItems,
		data,
	} = useContext(MainContext);

	const handleStyle = (style) => {
		if (!filters.includes(style)) {
			setFilters([...filters, style]);
			// setActive(true)
			let newItem = data.filter((d) =>
				d.metaData.designStyle.includes(style.id)
			);
			setFilteredItems([...filteredItems, ...newItem]);
		} else {
			console.log("blarghhh");
			setFilters(filters.filter((s) => s != style));
			setFilteredItems(
				filteredItems.filter(
					(item) => !item.metaData.designStyle.includes(style.id)
				)
			);
			// setActive(false)
		}
	};

	return (
		<li className="filter-box__item" onClick={() => handleStyle(style)}>
			{style.label}
		</li>
	);
};

export default StyleItem;
