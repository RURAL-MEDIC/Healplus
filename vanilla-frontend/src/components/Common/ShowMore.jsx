import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../styles/Common/ShowMore.css";

const ShowMore = ({ items, limit = 4, renderItem, children = "Show More" }) => {
  const [showAll, setShowAll] = useState(false);
  const displayedItems = showAll ? items : items.slice(0, limit);

  return (
    <div className="show-more">
      <div className="show-more-grid">{displayedItems.map(renderItem)}</div>

      {items.length > limit && (
        <button
          className="view-all"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Show Less ⬆" : `${children} ➡`}
        </button>
      )}
    </div>
  );
};

ShowMore.PropTypes = {
  items: PropTypes.array.isRequired,
  limit: PropTypes.number,
  renderItem: PropTypes.func.isRequired,
  children: PropTypes.string,
};

export default ShowMore;
