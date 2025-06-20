import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SearchByCategory = () => {
  const { type } = useParams();
  const [carItems, setCarItems] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await axios.get(`/api/listing/category/${type}`);
        setCarItems(res.data);
      } catch (err) {
        console.error("Error fetching car listings by category", err);
      }
    };

    fetchListings();
  }, [type]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {carItems.length > 0 ? (
        carItems.map((listing) => (
          <div key={listing._id} className="border rounded-xl p-4 shadow">
            <h2 className="text-xl font-bold">{listing.listingTitle}</h2>
            <p>{listing.category}</p>
            <p>{listing.price} LKR</p>
          </div>
        ))
      ) : (
        <p>No listings found for this category.</p>
      )}
    </div>
  );
};

export default SearchByCategory;
