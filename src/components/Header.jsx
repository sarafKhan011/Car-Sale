import React from 'react'
import { Button } from './ui/button';
import { SignInButton,UserButton,useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom';



function Header() {
  const {user}=useUser();
  const isSignedIn = true; // or true, depending on what you want to simulate
  {
      isSignedIn &&(<div></div>)
  }
    

  return (
    <div className='flex justify-between items-center shadow-sm p-5'>
      
        <img src='/car logo4.webp' width={100} height={200}/>
        <ul className='hidden md:flex gap-16'>
        <Link to={'/'}>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer text-primary hover:text-emerald-600'>Home</li>
        </Link>
        <a href="#Category">
           <li className='font-medium hover:scale-105 transition-all cursor-pointer text-primary hover:text-emerald-600'>Search</li>
          </a>
    
            <Link to={'/About'}> 
            <li className='font-medium hover:scale-105 transition-all cursor-pointer text-primary hover:text-emerald-600'>About</li>
            </Link>

            <Link to={'/contact'}>   
            <li className='font-medium hover:scale-105 transition-all cursor-pointer text-primary hover:text-emerald-600'>Contact</li>
            </Link> 
        </ul>

        {isSignedIn? 
     <div className='flex items-center gap-5'>
           <UserButton />
            <SignInButton mode='modal'>
            <Link className=' hover:text-cyan-600' to={'/profile'}>
         <Button>Submit Listing</Button>
         </Link>
         
            </SignInButton>
     </div>
     :
     <SignInButton mode='modal' forceRedirectUrl='/'>
         <Button>Submit Listing</Button>
            </SignInButton>
     
     }    
    </div>
  )
}

export default Header