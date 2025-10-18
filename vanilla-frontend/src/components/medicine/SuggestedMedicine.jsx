import React from "react";
import { useSearch } from "../../contexts/SearchContext";
import Card from "../Common/Card";
import { MEDICINE_DATA } from "../../data/medicineData";
import "../../styles/SuggestedMedicine.css";

export default function SuggestedMedicine() {
  const { searchTerm, searchResults } = useSearch();

  // If there's a search term, don't show suggested medicines
  if (searchTerm) {
    return null;
  }

  // Get common medicines (first 6 from the data)
  const commonMedicines = MEDICINE_DATA.slice(0, 6);

  return (
    <div className="SuggestedMedicine">
      <h2>Common Medicines</h2>
      <div className="SuggestedMedicineCardContainer">
        {commonMedicines.map((medicine) => (
          <Card
            key={medicine.id}
            variant="small"
            img={medicine.image}
            title={medicine.name}
            path={`/medicine/${medicine.id}`}
          />
        ))}
      </div>
    </div>
  );
}
