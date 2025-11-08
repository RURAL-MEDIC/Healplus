import React from "react";
import { MEDICINE_DATA } from "../../data/medicineData";
import Card from "../Common/Card";
import "../../styles/Medicine/AllMedicine.css";
import ShowMore from "../Common/ShowMore";
import { useTranslation } from "react-i18next";

const AllMedicine = () => {
  const { t } = useTranslation();
  
  return (
    <div className="AllMedicine">
      <h2>
        {t("medicine.essential")} ({MEDICINE_DATA.length})
      </h2>

      <ShowMore
        items={MEDICINE_DATA}
        limit={10}
        renderItem={(medicine) => (
          <Card
            key={medicine.id}
            variant="large"
            img={medicine.image}
            title={medicine.name}
            path={`/medicine/${medicine.id}`}
          >
            <p className="compound">{medicine.compound}</p>
            <p className="company">{medicine.company}</p>
            <p className="price">₹{medicine.price}</p>
            <p className="category">{medicine.category}</p>
            <p
              className={`stock-status ${
                medicine.inStock ? "in-stock" : "out-of-stock"
              }`}
            >
              {medicine.inStock ? "✓ In Stock" : "✗ Out of Stock"}
            </p>
            <p className="description">{medicine.description}</p>
          </Card>
        )}
      />
    </div>
  );
};

export default AllMedicine;
