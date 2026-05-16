import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

const ContactMain = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs.send(
      "service_2iaxkq9",
      "template_zpmms5i",
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "tirthdabgar9@gmail.com"
      },
      "8S91YdPd2_j5XOssb"
    )
    .then(() => {
      toast.success("Message sent successfully 🚀");
      setFormData({ name: '', email: '', message: '' });
    })
    .catch(() => {
      toast.error("Failed to send message ❌");
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <section className="py-16 bg-white">
      <Toaster position="top-right" />

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">

        {/* LEFT */}
        <div className="space-y-8">

          <div>
            <p className="text-xs text-neutral-500">Office</p>
            <p className="text-lg font-semibold text-neutral-900">
              409, Silicon Sponta, Mehsana
            </p>
          </div>

          <div>
            <p className="text-xs text-neutral-500">Phone</p>
            <a 
              href="tel:+919328343385" 
              className="text-lg font-semibold hover:text-amber-500 transition"
            >
              +91 93283 43385
            </a>
          </div>

          <div>
            <p className="text-xs text-neutral-500">Email</p>
            <a 
              href="mailto:sunrayenergymeh@gmail.com" 
              className="text-lg font-semibold hover:text-amber-500 transition"
            >
              sunrayenergymeh@gmail.com
            </a>
          </div>

        </div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-5 border border-neutral-200 p-6 md:p-8 rounded-2xl shadow-sm"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-neutral-200 px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-neutral-200 px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            required
          />

          <textarea
            name="message"
            placeholder="Your requirement..."
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full border border-neutral-200 px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold text-sm transition ${
              loading
                ? "bg-amber-300 cursor-not-allowed"
                : "bg-amber-400 hover:bg-amber-500 text-white"
            }`}
          >
            {loading ? "Sending..." : "Send Inquiry"}
          </button>

        </motion.form>

      </div>
    </section>
  );
};

export default ContactMain;