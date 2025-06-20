import { useEffect, useState } from 'react';
import Caritem from '@/components/Caritem';

function listType() {

    const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/all-listings')
      .then((res) => res.json())
      .then((data) => setListings(data))
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  const newListings = listings.slice(0, 3);
  const oldListings = listings.slice(-3);

  return (
    <div className="p-6">
      <h2 className="text-center text-3xl font-bold mb-4">Newest Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {newListings.map((car) => <Caritem key={car._id} car={car} />)}
      </div>

      <h2 className="text-center text-3xl font-bold mb-4">Older Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {oldListings.map((car) => <Caritem key={car._id} car={car} />)}
      </div>
    </div>
  )
}

export default listType