import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { contactDetails, socialLinks } from "../constants";
import * as FaIcons from "react-icons/fa6";
import { motion } from "framer-motion";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [status, setStatus] = useState("");

  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_API_SERVICE_ID,
        import.meta.env.VITE_API_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_API_PUBLIC_API_KEY }
      );

      console.log("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log("Failed", error);
    } finally {
      setStatus("");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Invalid email format";
    if (!formData.message.trim())
      tempErrors.message = "Message cannot be empty";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  return (
    <section id="experience" className="pb-16 pt-16">
      <motion.h2
        className="text-4xl text-center my-20"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get in Touch
      </motion.h2>
      <div className="flex flex-wrap justify-center items-center lg:items-start">
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <form onSubmit={handleSubmit} className="m-4" ref={formRef}>
            <div className="mb-6">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email address"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                rows={3}
                id="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <button
              className="w-full bg-stone-300 text-stone-700 rounded px-4 py-2 font-semibold"
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col items-center lg:items-start m-4">
            <div className="flex flex-col mb-4 items-center lg:items-start">
              <h3 className="mb-2 font-semibold flex items-center">
                <FaLocationDot className="mr-2" />
                Location
              </h3>
              <p className="text-sm text-stone-400">
                {contactDetails.location}
              </p>
            </div>

            <div className="flex flex-col mb-4 items-center lg:items-start">
              <h3 className="mb-2 font-semibold flex items-center">
                <MdEmail className="mr-2" />
                Email
              </h3>
              <p className="text-sm text-stone-400">{contactDetails.email}</p>
            </div>

            <div className="flex flex-col mb-4 items-center">
              <h3 className="mb-2 font-semibold">Follow Me</h3>
              <div className="flex items-center mx-4">
                {socialLinks.map((socialLink) => {
                  const Icon = FaIcons[socialLink.icon];
                  return (
                    <a
                      href={socialLink.url}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="mx-1"
                      aria-label={socialLink.name}
                      key={socialLink.name}
                    >
                      {Icon && <Icon size={20} />}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMe;
