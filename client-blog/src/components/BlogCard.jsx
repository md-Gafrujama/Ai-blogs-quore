import React from 'react';
import { useNavigate } from 'react-router-dom';


function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^a-z0-9\-]/g, '')    // Remove all non-alphanumeric chars except -
    .replace(/\-+/g, '-')           // Replace multiple - with single -
    .replace(/^-+/, '')              // Trim - from start of text
    .replace(/-+$/, '');             // Trim - from end of text
}

const BlogCard = ({ blog }) => {
  const { title, description, category, image, _id } = blog;
  const navigate = useNavigate();

  return (
    <article 
      onClick={() => navigate(`/blog/${slugify(title)}`)}
      className="group relative w-full bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl border border-gray-100 hover:border-transparent transition-all duration-700 cursor-pointer transform hover:-translate-y-2 hover:rotate-1"
      style={{ 
        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        backdropFilter: 'blur(10px)'
      }}
    >
      {/* Premium gradient border */}
      <div className="absolute inset-0 rounded-3xl p-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="w-full h-full bg-white rounded-3xl"></div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 bg-white rounded-3xl">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl transform -translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-br from-pink-500/10 to-blue-500/10 rounded-full blur-xl transform translate-x-8 translate-y-8 group-hover:scale-150 transition-transform duration-700"></div>
        
        {/* Image Container with Modern Effects */}
        <div className="relative overflow-hidden rounded-t-3xl bg-gradient-to-br from-gray-50 to-gray-100">
          {/* Image */}
          <div className="relative overflow-hidden">
            <img 
              src={image}
              alt={title}
              className="w-full h-52 object-cover transform group-hover:scale-105 transition-all duration-700 group-hover:brightness-105"
            />
            
            {/* Premium overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          {/* Floating Category Badge */}
          <div className="absolute top-4 left-4 z-20">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
              <span className="relative inline-flex items-center px-4 py-2 bg-white/95 backdrop-blur-md rounded-full text-xs font-bold text-gray-800 shadow-lg border border-white/50 transition-all duration-300 group-hover:text-blue-600 group-hover:shadow-xl">
                {category}
              </span>
            </div>
          </div>

          {/* Premium read indicator */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            <div className="flex items-center space-x-2 bg-black/70 backdrop-blur-md rounded-full px-3 py-1.5 text-white text-xs border border-white/20 shadow-lg">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-medium">3 min read</span>
            </div>
          </div>

          {/* Corner accent */}
          <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100">
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-sm opacity-50"></div>
          </div>
        </div>

        {/* Enhanced Content Section */}
        <div className="p-6 space-y-4 relative">
          {/* Title with premium typography */}
          <h3 className="text-lg font-bold leading-tight text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 line-clamp-2">
            {title}
          </h3>

          {/* Description with better spacing */}
          <div 
            className="text-gray-600 group-hover:text-gray-700 text-sm leading-relaxed line-clamp-3 transition-colors duration-300"
            dangerouslySetInnerHTML={{ "__html": description.slice(0, 120) + "..." }}
          />

          {/* Professional Footer */}
          <div className="flex items-center justify-between pt-4 mt-4">
            {/* Author/Read section */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>
              <span className="text-xs font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                Read Article
              </span>
            </div>
            
            {/* Premium arrow */}
            <div className="relative">
              <div className="flex items-center justify-center w-8 h-8 text-gray-400 group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 rounded-full transition-all duration-300 group-hover:shadow-lg">
                <svg 
                  className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium glow effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-xl"></div>
      
      {/* Subtle animated dots */}
      <div className="absolute top-8 right-8 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-1000 transform scale-0 group-hover:scale-100 group-hover:animate-ping"></div>
      <div className="absolute bottom-8 left-8 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-1200 delay-300 transform scale-0 group-hover:scale-100 group-hover:animate-pulse"></div>
    </article>
  );
};

export default BlogCard;