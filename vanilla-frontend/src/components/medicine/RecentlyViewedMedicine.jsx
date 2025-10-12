import React from "react";
import { useSearch } from "../../contexts/SearchContext";
import Card from "../Common/Card";
import { MEDICINE_DATA } from "../../data/medicineData";
import "../../styles/RecentlyViewedMedicine.css";

export default function RecentlyViewedMedicine() {
  const { searchTerm } = useSearch();

  // If there's a search term, don't show recently viewed
  if (searchTerm) {
    return null;
  }

  return (
    <div className="RecentlyViewedMedicine">
      <h2>Recently Viewed</h2>
      <div className="RecentMedicinecard-container">
        {MEDICINE_DATA.slice(-5).map((medicine) => (
          <Card
            variant="medium"
            key={medicine.id}
            img={medicine.image}
            title={medicine.name}
            path="#"
          >
            <p id="price1">Price: ₹{medicine.price}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
