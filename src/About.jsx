import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function About() {
  return (
    <div>
      <Header />

      <div className="px-6 md:px-20 py-10">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg text-gray-700 mb-6">
          We are a passionate team of developers and car enthusiasts dedicated to building the best car listing
          platform in Sri Lanka. Our goal is to connect buyers and sellers in the most seamless, trustworthy,
          and user-friendly way possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
            <p className="text-gray-600">
              We strive to provide a transparent and effective online marketplace for vehicles. Whether you're
              looking to buy your first car or sell a fleet, we're here to help with modern tools and top-notch
              support.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Why Choose Us?</h2>
            <ul className="list-disc ml-6 text-gray-600">
              <li>Verified listings</li>
              <li>User-friendly platform</li>
              <li>Powerful filters & search</li>
              <li>Reliable support team</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
