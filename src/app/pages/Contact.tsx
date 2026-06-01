import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Globe, User, CheckCircle2 } from "lucide-react";
import contact from "../../assets/contact.jpg";

export function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error while typing
    setErrors({ ...errors, [name]: "" });
  };

  // Validation function
  const validateForm = () => {
    let tempErrors = { ...errors };
    let isValid = true;

    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;

    if (!formData.name || !nameRegex.test(formData.name)) {
      tempErrors.name = "Please enter a valid name (letters and spaces only).";
      isValid = false;
    }

    if (!formData.email || !emailRegex.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      tempErrors.phone = "Please enter a valid UK phone number.";
      isValid = false;
    }

    if (!formData.message || formData.message.trim().length < 5) {
      tempErrors.message = "Please enter a message (at least 5 characters).";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xvzbkoje", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setErrors({ name: "", email: "", phone: "", message: "" });

        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        const data = await response.json();
        alert(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Phone, title: "Phone", content: "01753 67 46 49", link: "tel:01753674649" },
    { icon: Globe, title: "Website", content: "www.a2zautozone.com", link: "https://www.a2zautozone.com" },
    { icon: Mail, title: "Email", content: "a2zautozoneltd@gmail.com", link: "mailto:a2zautozoneltd@gmail.com" },
    { icon: MapPin, title: "Address", content: "16A, Canada Road, Slough, Berks, SL1 1SE", link: "https://maps.google.com/?q=16A+Canada+Road+Slough+SL1+1SE" },
  ];

  const teamContacts = [
    { name: "Mudassir", phone: "07921 709905" },
    { name: "Usman", phone: "07873 717879" },
    { name: "Waize", phone: "07429 188158" },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section
        className="relative h-[280px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${contact})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-80"></div>
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-white"
            >
              Get in touch with our team
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {isSubmitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-green-50 border-2 border-green-500 rounded-lg p-8 sm:p-12 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <CheckCircle2 className="w-16 sm:w-20 h-16 sm:h-20 text-green-500 mx-auto mb-4 sm:mb-6" />
              </motion.div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">Message Sent!</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Thank you for contacting us. We'll get back to you shortly.
              </p>
            </motion.div>
          ) : (
            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm sm:text-base ${errors.name ? "border-red-500" : "border-gray-300"}`}
                  placeholder="Enter your name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm sm:text-base ${errors.email ? "border-red-500" : "border-gray-300"}`}
                  placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                  Your Phone *
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm sm:text-base ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                  placeholder="Enter your phone"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none text-sm sm:text-base ${errors.message ? "border-red-500" : "border-gray-300"}`}
                  placeholder="Tell us how we can help you"
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-700 transition-all font-semibold text-lg sm:text-xl ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
