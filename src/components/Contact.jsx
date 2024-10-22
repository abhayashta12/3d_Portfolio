import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import emailjs from 'emailjs-com'; // Import emailjs-com

// Modal Component for displaying success message
const SuccessModal = ({ show, onClose }) => {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  return (
    show && (
      <motion.div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={modalVariants}
      >
        <motion.div className="bg-[#111827] p-8 rounded-lg shadow-lg w-full max-w-md text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Thank You!</h2>
          <p className="text-gray-300 mb-4">
            Thank you for sending me a message! I'll get back to you shortly.
          </p>
          <button
            onClick={onClose}
            className="mt-6 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition duration-300"
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    )
  );
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false); // Modal state

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_1kl589k', // Replace with your EmailJS Service ID
        'template_fi2pisg', // Replace with your EmailJS Template ID
        {
          from_name: form.name,
          to_name: 'Abhay', // Your own name or recipient's name
          from_email: form.email,
          message: form.message,
        },
        'yNE59xEz-YSskCVeE' // Replace with your EmailJS User (Public) Key
      )
      .then(
        () => {
          setLoading(false);
          setShowModal(true); // Show the modal on success
          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error('EmailJS Error:', error);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-[600px] lg:h-[500px] md:h-[450px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>

      {/* Success Modal */}
      <SuccessModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');