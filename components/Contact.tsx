import { useState } from 'react';

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
          <div>
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
            </div>
            <p className="text-gray-600 mt-8">
              It is a long established fact that a reader be by the readable distracted layout.
            </p>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700">Your Name:</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="John Trangely" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700">Your Email:</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="hello@gmail.com" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700">Your Subject:</label>
                <input 
                  type="text" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  placeholder="I want to hire you quickly" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700">Message:</label>
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Write here your message" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md h-32"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;