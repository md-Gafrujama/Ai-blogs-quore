import React, { useRef, useState } from 'react';
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';

const Header = () => {
  const { setInput, input } = useAppContext();
  const inputRef = useRef();
  const [isHovering, setIsHovering] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setInput(inputRef.current.value);
  };

  const onClear = () => {
    setInput('');
    inputRef.current.value = '';
  };

  return (
    <div className='relative overflow-hidden'>
      {/* Background elements */}
      <div className='absolute inset-0 -z-10'>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent opacity-30'></div>
        <div className='absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent opacity-20'></div>
      </div>

      <div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative pt-32 pb-24'>
        <div className='text-center'>
          {/* New feature badge with animation */}
          <div 
            className='inline-flex items-center justify-center gap-2 px-4 py-1 mb-6 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary shadow-sm hover:shadow-primary/20 transition-all duration-300 cursor-default animate-pulse'
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <p>New: AI-powered blogging assistant</p>
            <img 
              src={assets.star_icon} 
              className={`w-3 h-3 transition-transform duration-300 ${isHovering ? 'rotate-180 scale-110' : ''}`} 
              alt="Star icon" 
            />
          </div>

          {/* Main heading with gradient text */}
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-800 mb-6'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark'>Elevate Your Voice</span>
            <br />
            With Our Blogging Platform
          </h1>

          {/* Subheading */}
          <p className='my-6 max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed'>
            Your space to think freely, share authentically, and connect deeply. 
            Whether it's a quick thought or an in-depth exploration, your ideas matter here.
          </p>

          {/* Search form with focus effects */}
          <form 
            onSubmit={onSubmitHandler} 
            className='flex justify-between max-w-xl mx-auto border border-gray-200 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 focus-within:shadow-lg focus-within:border-primary/50'
          >
            <input 
              ref={inputRef} 
              type="text" 
              placeholder='Discover inspiring blogs...' 
              required 
              className='w-full px-5 py-3 outline-none placeholder-gray-400 text-gray-700'
            />
            <button 
              type="submit" 
              className='bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 font-medium hover:opacity-90 transition-opacity duration-200 flex items-center'
            >
              Search
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>

          {/* Clear button with smooth appearance */}
          {input && (
            <div className='mt-4 animate-fade-in'>
              <button 
                onClick={onClear} 
                className='inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors duration-200'
              >
                Clear search
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Decorative elements */}
        <div className='absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-primary/10 blur-xl'></div>
        <div className='absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/10 blur-xl'></div>
      </div>
    </div>
  );
};

export default Header;