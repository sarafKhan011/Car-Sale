import React, { useState, useEffect } from 'react';
import Caritem from './Caritem';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function MostSearchedCar() {
console.log(Caritem);


  const [carList, setCarList] = useState([]); // ✅ fixed typo

  useEffect(() => {
    fetchUserListings();
  }, []);

  async function fetchUserListings() {
    try {
      const res = await fetch(`http://localhost:3000/api/listing`);
      const data = await res.json();
      setCarList(data); // ✅ fixed wrong setter
    } catch (error) {
      console.error('Failed to fetch user listings', error);
    }
  }

  return (
    <div className='mx-24'>
      <h2 className='font-bold text-3xl text-center my-16'>Most Searched Cars</h2>

      <Carousel>
        <CarouselContent>
          {carList.map((car, index) => (
            <CarouselItem key={car._id || index} className="basis-1/4">
              <Caritem car={car} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default MostSearchedCar;
