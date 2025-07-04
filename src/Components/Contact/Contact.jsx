import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [snackbar, setSnackbar] = useState({ open: false, message: '', type: 'success' });
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) newErrors.email = 'Enter a valid email address.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters.';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSnackbar({ open: true, message: 'Please fill all fields correctly.', type: 'error' });
      return;
    }
    setLoading(true);
    emailjs.send(
      'service_r4du7iv',
      'template_nyb0m72',
      formData,
      'gA3_QrBhDsLgX4N5j'
    )
      .then(() => {
        setSnackbar({ open: true, message: 'Message sent successfully!', type: 'success' });
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      })
      .catch((error) => {
        console.error('Email error:', error);
        setSnackbar({ open: true, message: 'Failed to send message. Try again later.', type: 'error' });
      })
      .finally(() => setLoading(false));
  };

  React.useEffect(() => {
    if (snackbar.open) {
      const timer = setTimeout(() => setSnackbar({ ...snackbar, open: false }), 3000);
      return () => clearTimeout(timer);
    }
  }, [snackbar.open]);

  return (
    <div id="contact" className="min-h-screen bg-gray-100 flex items-center justify-center p-4 relative">
      {/* Snackbar */}
      {snackbar.open && (
        <div className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded shadow-lg text-white font-semibold transition-all duration-300 ${snackbar.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>
          {snackbar.message}
        </div>
      )}
      <div className="w-full max-w-4xl bg-white shadow-md rounded-2xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info Section */}
        <div className=''>
          <h2 className="text-3xl font-bold mb-4 text-gray-800 flex items-center gap-2">
            <i className="fas fa-address-book text-blue-600"></i> Get in Touch
          </h2>
          <p className="text-gray-600 mb-6">
            Feel free to reach out for collaborations, inquiries, or just to say hello!
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-center gap-2">
              <i className="fas fa-envelope text-blue-600"></i>
              <span className="text-gray-600 "><strong className="text-blue-600">Email:</strong> prashantpal2026@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <i className="fas fa-phone-alt text-blue-600"></i>
              <span className="text-gray-600 "><strong className="text-blue-600">Phone:</strong> +91-9389888747</span>
            </li>
            <li className="flex items-center gap-2">
              <i className="fas fa-map-marker-alt text-blue-600"></i>
              <span className="text-gray-600 "><strong className="text-blue-600">Location:</strong> Jaspur, Uttarakhand, India</span>
            </li>
          </ul>

          {/* Social Links with Icons */}
          <div className="mt-6 flex flex-wrap gap-4 ">
            <a
              href="https://github.com/Prashantpal123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-800 font-bold transition-colors flex items-center gap-2 cursor-pointer"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/prashantpal01/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-bold transition-colors flex items-center gap-2 cursor-pointer"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-bold transition-colors flex items-center gap-2 cursor-pointer"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </div>
          <div>
            <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=prashantpal2026@gmail.com&su=Contact%20from%20Portfolio&body=Hi%20Prashant%2C%0AI%20would%20like%20to%20connect%20regarding%20a%20project."
  target="_blank"
  rel="noopener noreferrer"
  className="w-5/6 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition font-semibold flex items-center justify-center gap-2 mt-4"
>
  <i className="fas fa-envelope"></i> Mail via Gmail
</a>
          </div>
        </div>

         



        {/* Contact Form Section */}
        <form className="space-y-4 bg-gray-50 rounded-xl p-6 shadow-sm" onSubmit={handleSubmit} noValidate>
          <div className="flex flex-col gap-1">
            <input
              type="text"
              name='name'
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              disabled={loading}
            />
            {errors.name && <span className="text-red-600 text-sm font-medium ml-1">{errors.name}</span>}
          </div>
          <div className="flex flex-col gap-1">
            <input
              type="email"
              name='email'
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              disabled={loading}
            />
            {errors.email && <span className="text-red-600 text-sm font-medium ml-1">{errors.email}</span>}
          </div>
          <div className="flex flex-col gap-1">
            <textarea
              rows="4"
              name='message'
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
              disabled={loading}
            />
            {errors.message && <span className="text-red-600 text-sm font-medium ml-1">{errors.message}</span>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                <i className="fas fa-paper-plane"></i> Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
