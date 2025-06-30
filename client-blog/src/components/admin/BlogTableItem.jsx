import React, { useState, useCallback } from 'react';
import { assets } from '../../assets/assets';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';
import { FiEdit, FiTrash2, FiEye, FiEyeOff, FiClock, FiMoreVertical } from 'react-icons/fi';
import { motion } from 'framer-motion';

const BlogTableItem = React.memo(({ blog, fetchBlogs, index }) => {
  const { title, createdAt, _id } = blog;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isToggling, setIsToggling] = useState(false);
  
  const { axios } = useAppContext();

  const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const deleteBlog = useCallback(async () => {
    const confirm = window.confirm('Are you sure you want to delete this blog?');
    if (!confirm) return;
    
    setIsDeleting(true);
    try {
      const { data } = await axios.post('/api/blog/delete', { id: _id });
      if (data.success) {
        toast.success(data.message);
        await fetchBlogs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsDeleting(false);
    }
  }, [_id, axios, fetchBlogs]);

  const togglePublish = useCallback(async () => {
    setIsToggling(true);
    try {
      const { data } = await axios.post('/api/blog/toggle-publish', { id: _id });
      if (data.success) {
        toast.success(data.message);
        await fetchBlogs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsToggling(false);
    }
  }, [_id, axios, fetchBlogs]);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <motion.tr 
      className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 font-medium">
            {index}
          </span>
        </div>
      </td>
      
      <td className="px-6 py-4">
        <div className="flex items-center">
          <div>
            <h4 className="text-sm font-semibold text-gray-900 line-clamp-1">{title}</h4>
            <div className="flex items-center mt-1 text-xs text-gray-500 md:hidden">
              <FiClock className="mr-1" size={12} />
              {formattedDate}
            </div>
          </div>
        </div>
      </td>
      
      <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
        <div className="flex items-center text-sm text-gray-500">
          <FiClock className="mr-2 text-gray-400" size={14} />
          {formattedDate}
        </div>
      </td>
      
      <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
        <span className={`px-3 py-1 inline-flex items-center text-xs leading-4 font-medium rounded-full 
          ${blog.isPublished 
            ? 'bg-green-50 text-green-700' 
            : 'bg-amber-50 text-amber-700'}`}>
          {blog.isPublished ? 'Published' : 'Draft'}
        </span>
      </td>
      
      <td className="px-6 py-4 whitespace-nowrap text-right">
        <div className="flex justify-end items-center space-x-2 relative">
          <div className="hidden md:flex space-x-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={togglePublish}
              disabled={isToggling}
              className={`flex items-center px-3 py-1.5 rounded-md text-xs font-medium transition-all
                ${blog.isPublished 
                  ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                  : 'bg-blue-50 text-blue-700 hover:bg-blue-100'}
                ${isToggling ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isToggling ? (
                <span className="animate-pulse">Processing...</span>
              ) : (
                <>
                  {blog.isPublished ? <FiEyeOff className="mr-1.5" size={14} /> : <FiEye className="mr-1.5" size={14} />}
                  {blog.isPublished ? 'Unpublish' : 'Publish'}
                </>
              )}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={deleteBlog}
              disabled={isDeleting}
              className={`flex items-center px-3 py-1.5 rounded-md text-xs font-medium transition-all
                bg-red-50 text-red-600 hover:bg-red-100
                ${isDeleting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isDeleting ? 'Deleting...' : (
                <>
                  <FiTrash2 className="mr-1.5" size={14} />
                  Delete
                </>
              )}
            </motion.button>
          </div>
          
          {/* Mobile dropdown menu */}
          <div className="md:hidden relative">
            <button 
              onClick={toggleMenu}
              className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
            >
              <FiMoreVertical size={18} />
            </button>
            
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div className="py-1">
                  <button
                    onClick={() => {
                      togglePublish();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    {blog.isPublished ? <FiEyeOff className="mr-2" /> : <FiEye className="mr-2" />}
                    {blog.isPublished ? 'Unpublish' : 'Publish'}
                  </button>
                  <button
                    onClick={() => {
                      deleteBlog();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
                  >
                    <FiTrash2 className="mr-2" />
                    Delete
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </td>
    </motion.tr>
  );
});

export default BlogTableItem;