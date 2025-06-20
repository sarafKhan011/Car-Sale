import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MyListing from './components/MyListing';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Profile() {
  const { user } = useUser();
  const [listings, setListings] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:3000/api/listings`)
        .then(res => res.json())
        .then(data => setListings(data))
        .catch(err => console.error('Failed to fetch user listings', err));
    }
  }, [user]);

  return (
    <div>
      <Header />
      <div className='px-10 md:px-20 my-10'>
        <Tabs defaultValue="my-listing" className="w-full">
          <TabsList className="w-full flex justify-start">
            <TabsTrigger value="my-listing">My Listing</TabsTrigger>
            <TabsTrigger value="inbox">Inbox</TabsTrigger>
          </TabsList>
          <TabsContent value="my-listing" className="mt-6">
            <MyListing listings={listings} />
          </TabsContent>
          <TabsContent value="inbox">Inbox Tab</TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
