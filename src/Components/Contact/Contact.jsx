import React from 'react'

const Contact = () => {
  return (
    <section id="contact" class="py-16 bg-gray-200">
    <div class="max-w-4xl  w-full mx-auto bg-purple-100 p-8 rounded-xl shadow-lg">
      <h2 class="text-3xl font-semibold text-gray-800 text-center">Get in Touch</h2>
      <p class="text-lg text-gray-600 text-center mt-4">Feel free to reach out for collaborations, inquiries, or just to say hello!</p>
      
     
      <form id="contact-form" class="mt-8  space-y-6">
        <div class="space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" name="message" rows="4" placeholder="Your Message" required class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
        </div>
        
        <div class="text-center">
          <button type="submit" class="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Send Message</button>
        </div>
      </form>
      

      <div class="mt-8 text-center">
        <a href="https://github.com/your-profile" target="_blank" class="mx-4 text-blue-600 hover:text-blue-800">GitHub</a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" class="mx-4 text-blue-600 hover:text-blue-800">LinkedIn</a>
        <a href="https://twitter.com/your-profile" target="_blank" class="mx-4 text-blue-600 hover:text-blue-800">Twitter</a>
      </div>
      
   
      <div class="mt-8 text-center text-gray-600">
        <p>Email: prashantpal2026@gmail.com | Phone: +91-XXXXXXXXXX</p>
        <p>Location: Jaspur, Uttarakhand, India</p>
      </div>
    </div>
  </section>
  
  

  )
}

export default Contact

