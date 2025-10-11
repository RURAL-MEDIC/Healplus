import React, { useState } from "react";
import "../styles/ShowMore.css";

const ShowMore = ({ items, limit = 4, renderItem, children="Show More"}) => {
  const [showAll, setShowAll] = useState(false);
  const displayedItems = showAll ? items : items.slice(0, limit);

  return (
    <div className="show-more">
      <div className="show-more-grid">
        {displayedItems.map(renderItem)}
      </div>

      {items.length > limit && (
        <button
          className="view-all"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Show Less ⬆" :  `${children} ➡`}
        </button>
      )}
    </div>
  );
};

export default ShowMore;
