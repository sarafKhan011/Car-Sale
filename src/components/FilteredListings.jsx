import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const FilteredListings = () => {
  const { type } = useParams();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/listings/type/${type}`);
        setCars(res.data);
      } catch (err) {
        console.error("Error fetching listings:", err);
      }
    };

    fetchListings();
  }, [type]);

  return (
    <div className="filtered-listings">
      <h2>{type} Listings</h2>
      {cars.length === 0 ? (
        <p>No {type} cars found.</p>
      ) : (
        <div className="listing-grid">
          {cars.map((car) => (
            <div key={car._id} className="car-card">
              <img src={car.imageUrl || "/placeholder.jpg"} alt={car.make} />
              <h3>{car.make} {car.model}</h3>
              <p>Price: ${car.price}</p>
              <p>Year: {car.year}</p>
              <p>Type: {car.type}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilteredListings;
