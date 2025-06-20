import { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

function MyListing() {
  const { user } = useUser();
  const [listings, setListings] = useState([]);

  useEffect(() => {
    if (user) fetchUserListings();
  }, [user]);

  async function fetchUserListings() {
    try {
      const res = await fetch(
        `http://localhost:3000/api/listing`
      );
      const data = await res.json();
      setListings(data);
    } catch (error) {
      console.error('Failed to fetch user listings', error);
    }
    
    
  }

  return (
    <div className="p-6 md:p-10">
    <div className="flex justify-between items-center mb-8">
      <h2 className="font-bold text-3xl md:text-4xl">My Listings</h2>
      <Link to="/add-listing">
        <Button className="bg-cyan-700 hover:bg-cyan-950">+ Add New Listing</Button>
      </Link>
    </div>

    {listings.length === 0 ? (
      <p className="text-gray-600">No listings found.</p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <div
            key={listing._id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
          >
            <div className="h-48 overflow-hidden bg-gray-100">
              {listing.images && listing.images.length > 0 ? (
                <img
                  src={listing.images[0]}
                  alt={`${listing.make} ${listing.model}`}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                  No Image
                </div>
              )}
            </div>

            <div className="p-4 space-y-2">
              <h3 className="text-xl font-semibold">
                {listing.make} {listing.model}
              </h3>
              <p className="text-gray-600 text-sm">Listing Title: {listing.listingTitle || 'N/A'}</p>
              <p className="text-gray-600 text-sm">Year: {listing.year || 'N/A'}</p>
              <p className="text-gray-600 text-sm">Price: Rs. {listing.price?.toLocaleString() || 'N/A'}</p>
              <p className="text-gray-600 text-sm">Drive Type: {listing.driveType || 'N/A'} </p>
              <p className="text-gray-600 text-sm">Type: {listing.type || 'N/A'}</p>
              <p className="text-gray-600 text-sm">Listing Discription: {listing.listingDescription || 'N/A'}</p>
            </div>
          </div>
        ))}
      </div>
    )}
   </div>
)}
    
  
export default MyListing;
