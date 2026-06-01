import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Calendar, CheckCircle2 } from "lucide-react";
import book_appointment from "../../assets/book_appointment.jpg";

export function BookAppointment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicleType: "",
    serviceType: "",
    registrationNumber: "",
    preferredDate: "",
    preferredTime: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    vehicleType: "",
    serviceType: "",
    registrationNumber: "",
    preferredDate: "",
    preferredTime: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the error as user types
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const nameRegex = /^[a-zA-Z\s]+$/;
    const phoneRegex = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regNumRegex = /^[A-Z0-9]{1,8}$/i;

    let tempErrors = { ...errors };
    let isValid = true;

    if (!formData.name || !nameRegex.test(formData.name)) {
      tempErrors.name = "Please enter a valid name (letters and spaces only).";
      isValid = false;
    }
    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      tempErrors.phone = "Please enter a valid UK phone number.";
      isValid = false;
    }
    if (!formData.email || !emailRegex.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
      isValid = false;
    }
    if (!formData.registrationNumber || !regNumRegex.test(formData.registrationNumber)) {
      tempErrors.registrationNumber =
        "Please enter a valid registration number (1-8 alphanumeric characters).";
      isValid = false;
    }
    if (!formData.vehicleType) {
      tempErrors.vehicleType = "Please select a vehicle type.";
      isValid = false;
    }
    if (!formData.serviceType) {
      tempErrors.serviceType = "Please select a service type.";
      isValid = false;
    }
    if (!formData.preferredDate) {
      tempErrors.preferredDate = "Please select a preferred date.";
      isValid = false;
    } else {
      const today = new Date();
      const selectedDate = new Date(formData.preferredDate);

      if (selectedDate.getTime() < today.setHours(0, 0, 0, 0)) {
        tempErrors.preferredDate = "Preferred date cannot be in the past.";
        isValid = false;
      }

    }
    if (!formData.preferredTime) {
      tempErrors.preferredTime = "Please select a preferred time.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    fetch("https://formspree.io/f/xlgwjevw", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          setShowToast(true);
          setIsSubmitted(true);

          setTimeout(() => {
            setShowToast(false);
            setIsSubmitted(false);
            setFormData({
              name: "",
              phone: "",
              email: "",
              vehicleType: "",
              serviceType: "",
              registrationNumber: "",
              preferredDate: "",
              preferredTime: "",
            });
            setErrors({
              name: "",
              phone: "",
              email: "",
              vehicleType: "",
              serviceType: "",
              registrationNumber: "",
              preferredDate: "",
              preferredTime: "",
            });
          }, 3000);
        } else {
          alert("Something went wrong. Please try again.");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to submit. Please try again.");
      });
  };

  return (
    <div className="pt-20 relative">
      {/* Toast Notification */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-5 right-5 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50"
        >
          Booking Submitted Successfully!
        </motion.div>
      )}

      {/* Hero Section */}
      <section
        className="relative h-[280px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${book_appointment})` }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
          <div className="text-center">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4"
            >
              Book an Appointment
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-white"
            >
              Fast & Reliable MOT Booking
            </motion.p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {!isSubmitted ? (
            <motion.form
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
              className="bg-white shadow-xl rounded-lg p-6 sm:p-8 border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Fill in Your Details
                </h2>
              </div>

              <div className="space-y-5 sm:space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm sm:text-base ${errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm sm:text-base ${errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm sm:text-base ${errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Registration Number */}
                <div>
                  <label htmlFor="registrationNumber" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                    Registration Number *
                  </label>
                  <input
                    type="text"
                    id="registrationNumber"
                    name="registrationNumber"
                    value={formData.registrationNumber}
                    onChange={handleChange}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm sm:text-base ${errors.registrationNumber ? "border-red-500" : "border-gray-300"
                      }`}
                    placeholder="Enter your vehicle registration number"
                  />
                  {errors.registrationNumber && (
                    <p className="text-red-500 text-sm mt-1">{errors.registrationNumber}</p>
                  )}
                </div>

                {/* Vehicle Type */}
                <div>
                  <label htmlFor="vehicleType" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                    Vehicle Type *
                  </label>
                  <select
                    id="vehicleType"
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleChange}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm sm:text-base ${errors.vehicleType ? "border-red-500" : "border-gray-300"
                      }`}
                  >
                    <option value="">Select vehicle type</option>
                    <option value="car">Car</option>
                    <option value="van">Van (up to 3.5 tonnes)</option>
                    <option value="minibus">Minibus (up to 16 seats)</option>
                    <option value="motorcycle">Motorcycle</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.vehicleType && <p className="text-red-500 text-sm mt-1">{errors.vehicleType}</p>}
                </div>

                {/* Service Type */}
                <div>
                  <label htmlFor="serviceType" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                    Service Type *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm sm:text-base ${errors.serviceType ? "border-red-500" : "border-gray-300"
                      }`}
                  >
                    <option value="">Select service type</option>
                    <option value="mot">MOT Test</option>
                    <option value="service">Full Service</option>
                    <option value="interim">Interim Service</option>
                    <option value="diagnostics">Diagnostics</option>
                    <option value="brakes">Brakes</option>
                    <option value="clutch">Clutch</option>
                    <option value="tracking">Tracking/Alignment</option>
                    <option value="repair">General Repair</option>
                  </select>
                  {errors.serviceType && <p className="text-red-500 text-sm mt-1">{errors.serviceType}</p>}
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm sm:text-base ${errors.preferredDate ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {errors.preferredDate && <p className="text-red-500 text-sm mt-1">{errors.preferredDate}</p>}
                  </div>

                  <div>
                    <label htmlFor="preferredTime" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                      Preferred Time *
                    </label>
                    <input
                      type="time"
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm sm:text-base ${errors.preferredTime ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>}
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-700 transition-all font-semibold text-lg sm:text-xl"
                >
                  Book Now
                </motion.button>
              </div>

              <p className="mt-5 sm:mt-6 text-sm sm:text-base text-gray-600 text-center">
                * All fields are required. We'll contact you to confirm your appointment.
              </p>
            </motion.form>
          ) : (
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">Booking Submitted!</h2>
              <p className="text-lg sm:text-xl text-gray-700 mb-1 sm:mb-2">
                Thank you for choosing A2Z Autozone
              </p>
              <p className="text-gray-600 text-sm sm:text-base">
                We'll contact you shortly to confirm your appointment.
              </p>
            </motion.div>
          )}

          {/* Trust Message */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 sm:mt-12 text-center"
          >
            <div className="bg-blue-50 rounded-lg p-6 sm:p-8 border border-blue-200">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                Fast & Reliable MOT Booking
              </h3>
              <p className="text-gray-700 mb-2 sm:mb-4 text-sm sm:text-base">
                Our team will review your booking and get back to you within 24 hours to confirm your appointment.
              </p>
              <p className="text-gray-600 text-sm sm:text-base">
                For urgent bookings, please call us directly at{" "}
                <a href="tel:01753674649" className="text-blue-600 hover:text-blue-700 font-semibold">
                  01753 67 46 49
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
