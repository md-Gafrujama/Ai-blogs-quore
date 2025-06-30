import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  const { title, description, category, image, _id } = blog;
  const navigate = useNavigate();

  return (
    <article 
      onClick={() => navigate(`/blog/${_id}`)}
      className="group relative w-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-200 hover:border-blue-300 transition-all duration-500 cursor-pointer transform hover:-translate-y-1"
    >
      {/* Decorative top gradient line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      
      {/* Image Container with Advanced Effects */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <img 
          src={image}
          alt={title}
          className="w-full aspect-[16/9] object-cover transform group-hover:scale-110 transition-all duration-700 group-hover:brightness-110"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Category Badge */}
        <div className="absolute top-6 left-6">
          <span className="inline-flex items-center px-4 py-2 bg-white/90 group-hover:bg-blue-500 backdrop-blur-md rounded-full text-sm font-semibold text-gray-800 group-hover:text-white shadow-lg border border-white/50 group-hover:border-blue-400 transition-all duration-300">
            {category}
          </span>
        </div>

        {/* Read time indicator */}
        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-md rounded-full px-3 py-1.5 text-white text-xs border border-white/20">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span>3 min read</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 space-y-4 group-hover:bg-gradient-to-br group-hover:from-blue-50/50 group-hover:to-purple-50/50 transition-all duration-300">
        {/* Title with working gradient hover effect */}
        <h3 className="text-xl font-bold leading-tight mb-3 line-clamp-2 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <div 
          className="text-gray-600 group-hover:text-gray-700 text-sm leading-relaxed line-clamp-3 transition-colors duration-300"
          dangerouslySetInnerHTML={{ "__html": description.slice(0, 140) + "..." }}
        />

        {/* Enhanced Footer */}
        <div className="flex items-center justify-between pt-6 mt-6 border-t border-gray-100 group-hover:border-blue-200 transition-colors duration-300">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-100 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 rounded-full flex items-center justify-center transition-all duration-300 group-hover:shadow-lg">
              <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
              Read Full Article
            </span>
          </div>
          
          <div className="flex items-center justify-center w-10 h-10 text-gray-400 group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 rounded-full transition-all duration-300 group-hover:shadow-md">
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Glowing border effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-sm"></div>
      
      {/* Sharp border overlay */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-pink-400 opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"></div>

      {/* Animated corner accents */}
      <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-80 transition-all duration-700 transform scale-0 group-hover:scale-100 group-hover:animate-pulse"></div>
      <div className="absolute bottom-6 left-6 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-900 delay-200 transform scale-0 group-hover:scale-150"></div>
      
      {/* Subtle inner glow */}
      <div className="absolute inset-2 rounded-xl bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </article>
  );
};

export default BlogCard;