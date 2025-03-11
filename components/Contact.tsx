import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="py-20 bg-gradient-to-r from-orange-100 to-blue-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-8">
              Let's Work Together!
            </h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-orange-500 text-white rounded-full p-3 mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884l8 4.8a1 1 0 001.002 0l8-4.8A1 1 0 0018 5H2a1 1 0 00-.997.884zM18 8.118l-8 4.8-8-4.8V14a1 1 0 001 1h14a1 1 0 001-1V8.118z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1A1A1A]">PHONE</h3>
                  <p className="text-gray-600">+8801744515670</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-500 text-white rounded-full p-3 mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884l8 4.8a1 1 0 001.002 0l8-4.8A1 1 0 0018 5H2a1 1 0 00-.997.884zM18 8.118l-8 4.8-8-4.8V14a1 1 0 001 1h14a1 1 0 001-1V8.118z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1A1A1A]">GMAIL</h3>
                  <p className="text-gray-600">mosharafhussain.manu@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-500 text-white rounded-full p-3 mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1A1A1A]">LOCATION</h3>
                  <p className="text-gray-600">Jamalpur Sadar, Jamalpur Bangladesh</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-500 text-white rounded-full p-3 mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.486 2 2 6.486 2 12c0 1.657.417 3.22 1.151 4.604L2 22l5.396-1.151C8.78 21.583 10.343 22 12 22c5.514 0 10-4.486 10-10S17.514 2 12 2zm-.25 15.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5zm2.25-4.5h-1.5v-3h-1v4h2.5v-1z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1A1A1A]">WHATSAPP</h3>
                  <p className="text-gray-600">
                    <a href="https://wa.me/8801744515670" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">
                      +8801744515670
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mt-8">
              It is a long established fact that a reader be by the readable distracted layout.
            </p>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
              <div>
                <label className="block text-gray-700 font-medium">Your Name:</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="John Trangely" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Your Email:</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="hello@gmail.com" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Your Subject:</label>
                <input 
                  type="text" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  placeholder="I want to hire you quickly" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Message:</label>
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Write here your message" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <button 
                type="submit" 
                className="px-4 py-2 bg-orange-500 text-white rounded-md font-medium transition-all hover:bg-orange-600 flex items-center"
              >
                GET IN TOUCH
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884l8 4.8a1 1 0 001.002 0l8-4.8A1 1 0 0018 5H2a1 1 0 00-.997.884zM18 8.118l-8 4.8-8-4.8V14a1 1 0 001 1h14a1 1 0 001-1V8.118z" />
                </svg>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;