import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { assets } from '../assets/assets';
import Navbar from '../components/Navbar';
import Moment from 'moment';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';
import { FiShare2, FiMessageSquare, FiClock, FiUser } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Blog = () => {
  const { id } = useParams();
  const { axios } = useAppContext();
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchBlogData = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`/api/blog/${id}`);
      if (data.success) {
        setData(data.blog);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchComments = async () => {
    try {
      const { data } = await axios.post('/api/blog/comments', { blogId: id });
      if (data.success) {
        setComments(data.comments);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const addComment = async (e) => {
    e.preventDefault();
    if (!name.trim() || !content.trim()) {
      toast.error('Please fill all fields');
      return;
    }
    
    setIsSubmitting(true);
    try {
      const { data } = await axios.post('/api/blog/add-comment', { 
        blog: id, 
        name, 
        content 
      });
      if (data.success) {
        toast.success(data.message);
        setName('');
        setContent('');
        await fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const shareOnSocial = (platform) => {
    const url = window.location.href;
    const title = data?.title || 'Check out this blog post';
    
    switch(platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`, '_blank');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    fetchBlogData();
    fetchComments();
  }, [id]);

  if (isLoading || !data) return <Loader />;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 mt-10">
      <Navbar />

      {/* Added proper spacing below navbar */}
      <main className="flex-grow container mx-auto px-4 pt-24 pb-12 max-w-4xl">
        {/* Blog Header */}
        <article className="mb-16">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center mb-6">
              <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full">
                <FiClock className="mr-2" />
                {Moment(data.createdAt).format('MMMM Do YYYY')}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 max-w-3xl mx-auto">
              {data.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              {data.subTitle}
            </p>
            <div className="flex items-center justify-center space-x-3">
              <div className="flex-shrink-0">
                <img 
                  src={assets.user_icon} 
                  alt="Author" 
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow"
                />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-gray-900">Michael Brown</p>
                <p className="text-xs text-gray-500">Content Writer</p>
              </div>
            </div>
          </div>

          {/* Featured Image with 16:9 aspect ratio */}
          <div className="mb-12 rounded-xl overflow-hidden shadow-lg transform transition duration-500 hover:shadow-xl relative pb-[56.25%] bg-gray-200">
            <img 
              src={data.image} 
              alt={data.title} 
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-3xl mx-auto">
            <div 
              className="rich-text"
              dangerouslySetInnerHTML={{ __html: data.description }} 
            />
          </div>
        </article>

        {/* Divider with decorative element */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-gray-50 text-gray-400">
              <FiMessageSquare className="text-primary" />
            </span>
          </div>
        </div>

        {/* Comments Section */}
        <section className="max-w-3xl mx-auto mb-16">
          <div className="flex items-center mb-8">
            <FiMessageSquare className="text-primary mr-2" size={24} />
            <h2 className="text-2xl font-bold text-gray-900">
              Comments ({comments.length})
            </h2>
          </div>
          
          {comments.length === 0 ? (
            <div className="bg-gray-50 rounded-lg p-8 text-center border border-dashed border-gray-200">
              <FiMessageSquare className="mx-auto text-gray-400 mb-4" size={48} />
              <h3 className="text-lg font-medium text-gray-700 mb-2">No comments yet</h3>
              <p className="text-gray-500">Be the first to share your thoughts!</p>
            </div>
          ) : (
            <div className="space-y-6">
              {comments.map((item) => (
                <div key={item._id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-br from-primary to-primary-dark p-2 rounded-full text-white">
                        <FiUser size={20} />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-gray-900">{item.name}</h3>
                        <span className="text-xs text-gray-500 flex items-center">
                          <FiClock className="mr-1" size={12} />
                          {Moment(item.createdAt).fromNow()}
                        </span>
                      </div>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Add Comment Form */}
        <section className="max-w-3xl mx-auto mb-16 bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Leave a comment</h2>
          <form onSubmit={addComment} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
                Your Comment
              </label>
              <textarea
                id="comment"
                rows="5"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                placeholder="Share your thoughts..."
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Posting...
                </>
              ) : 'Post Comment'}
            </button>
          </form>
        </section>

        {/* Social Sharing */}
        <section className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <FiShare2 className="text-primary mr-2" size={24} />
            <h2 className="text-2xl font-bold text-gray-900">Share this article</h2>
          </div>
          <div className="flex space-x-4">
            <button 
              onClick={() => shareOnSocial('facebook')}
              className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-md hover:shadow-lg"
              aria-label="Share on Facebook"
            >
              <FaFacebook size={20} />
            </button>
            <button 
              onClick={() => shareOnSocial('twitter')}
              className="p-3 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-md hover:shadow-lg"
              aria-label="Share on Twitter"
            >
              <FaTwitter size={20} />
            </button>
            <button 
              onClick={() => shareOnSocial('linkedin')}
              className="p-3 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-md hover:shadow-lg"
              aria-label="Share on LinkedIn"
            >
              <FaLinkedin size={20} />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;