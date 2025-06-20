import React from 'react';
import { Button } from './components/ui/button';
import { SignInButton } from '@clerk/clerk-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Category from './components/Category';
import MostSearchedCar from './components/MostSearchedCar';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';
import ListType from './components/listType'; 
import FloatingChatBotButton from './components/FloatingChatBotButton';

function Home() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* Category */}
      <div id="Category">
      <Category />
      </div>

      {/* ListType */}
       

      {/* Most Searched Cars */}
    

      {/* InfoSection */}
      <InfoSection />

      {/* Floating Chatbot (always visible) */}
      <FloatingChatBotButton />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
