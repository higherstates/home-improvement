import React, { Fragment, useContext } from "react";
import { MainContext } from "../Main/Main";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const StarsItem = ({ star }) => {
	const {
		filters,
		setFilters,
		setActive,
		filteredItems,
		setFilteredItems,
		data,
	} = useContext(MainContext);

	const handleStar = (star) => {
		if (!filters.includes(star)) {
			setFilters([...filters, star]);
			let newItem = data.filter((d) =>
				d.metaData.qualityStandard.includes(star.id)
			);
			setFilteredItems([...filteredItems, ...newItem]);
			console.log(filteredItems);
			// setActive(true);
		} else {
			setFilters(filters.filter((s) => s != star));
			// setActive(false);
		}
	};

	const renderStars = (id) => {
		switch (id) {
			case 5:
				return (
					<Fragment>
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
					</Fragment>
				);
			case 4:
				return (
					<Fragment>
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiOutlineStar />
					</Fragment>
				);
			case 3:
				return (
					<Fragment>
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiOutlineStar />
						<AiOutlineStar />
					</Fragment>
				);
			case 2:
				return (
					<Fragment>
						<AiFillStar />
						<AiFillStar />
						<AiOutlineStar />
						<AiOutlineStar />
						<AiOutlineStar />
					</Fragment>
				);
			default:
				return (
					<Fragment>
						<AiFillStar />
						<AiOutlineStar />
						<AiOutlineStar />
						<AiOutlineStar />
						<AiOutlineStar />
					</Fragment>
				);
		}
	};

	return (
		<li
			className={
				filters.includes(star.id)
					? "filter-box__item active"
					: "filter-box__item"
			}
			onClick={() => handleStar(star)}
		>
			{renderStars(star.id)}
		</li>
	);
};

export default StarsItem;
