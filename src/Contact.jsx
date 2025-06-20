import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      console.error('Error sending contact message:', error);
      setStatus('Something went wrong.');
    }
  };

  return (
    <div>
      <Header />

      <div className="px-6 md:px-20 py-10">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="mb-8 text-gray-600">We'd love to hear from you! Please fill out the form below.</p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-3 rounded w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-3 rounded w-full"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="md:col-span-2 border p-3 rounded w-full"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="md:col-span-2 border p-3 rounded w-full"
            required
          ></textarea>
          <Button type="submit" className="md:col-span-2 w-fit">Send Message</Button>
        </form>

        {status && <p className="text-green-600 font-medium">{status}</p>}
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
