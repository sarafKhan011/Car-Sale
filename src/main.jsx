import { StrictMode } from 'react';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Home from './home';
import AddListing from './add-listing';
import Profile from './Profile/index';
import Contact from './Contact';
import About from './About';
import { ClerkProvider } from '@clerk/clerk-react';
import { Buffer } from 'buffer';
import FilteredListings from './components/FilteredListings'; // ✅ Import here
import MostSearchedCar from './components/MostSearchedCar';
import SearchByCatogory from './search/[category]';

window.Buffer = Buffer;

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/add-listing', element: <AddListing /> },
  { path: '/contact', element: <Contact /> },
  { path: '/about', element: <About /> },
  { path: '/profile', element: <Profile /> },
  {path:'/search/:type', element:<SearchByCatogory/>},
]);

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
