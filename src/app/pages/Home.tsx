import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { motion, useAnimation, useInView, AnimatePresence } from "motion/react";
import {
  Car,
  Wrench,
  Gauge,
  Disc,
  Shield,
  CheckCircle2,
  Phone,
  Calendar,
} from "lucide-react";
import home from "../../assets/Home.jpg";
import home1 from "../../assets/home1.jpg";
import home2 from "../../assets/Home.jpg";
import home3 from "../../assets/home3.jpg";


export function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    { icon: Car, title: "MOT Testing", description: "Class 3, 4, 5 & 7 MOTs for all vehicle types" },
    { icon: Wrench, title: "Mechanical Repairs", description: "Expert repairs for all makes and models" },
    { icon: Gauge, title: "Diagnostics", description: "Advanced vehicle diagnostics equipment" },
    { icon: Disc, title: "Brakes & Clutches", description: "Complete brake and clutch services" },
  ];

  const trustBadges = [
    { icon: Shield, title: "MOT Testing Station", description: "Certified Testing Facility" },
    { icon: CheckCircle2, title: "UK Compliance", description: "Fully Certified & Insured" },
  ];

  const slides = [
    {
      image: home1,
      title: "Reliable Car Repair & Garage Services in the UK",
      subtitle: "Professional servicing, MOT & diagnostics you can trust",
    },
    {
      image: home2,
      title: "Expert Mechanics. Honest Pricing.",
      subtitle: "Quality workmanship backed by experience",
    },
    {
      image: home3,
      title: "Book Your MOT Today",
      subtitle: "Fast, affordable and reliable service",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);


  return (
    <div className="pt-20">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden bg-black">

        {/* Background Images (No Unmounting = No Flash) */}
        {slides.map((slide, index) => (
          <motion.img
            key={index}
            src={slide.image}
            alt="A2Z Autozone Garage"
            className="absolute inset-0 w-full h-full object-cover object-center"
            initial={false}
            animate={{
              opacity: index === currentSlide ? 1 : 0,
              scale: index === currentSlide ? 1 : 1.05,
            }}
            transition={{ duration: 1.2 }}
          />
        ))}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Text Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-white">

            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  {slides[currentSlide].title}
                </h1>

                <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8">
                  {slides[currentSlide].subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/book"
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-700 transition-all hover:scale-105"
                  >
                    <Calendar className="w-5 h-5" />
                    <span className="font-semibold text-sm sm:text-base">
                      Book Appointment
                    </span>
                  </Link>

                  <a
                    href="tel:01753674649"
                    className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-100 transition-all hover:scale-105"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-semibold text-sm sm:text-base">
                      Call 01753 67 46 49
                    </span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-6 w-full flex justify-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${currentSlide === index
                ? "bg-white scale-125"
                : "bg-white/50"
                }`}
            />
          ))}
        </div>

      </section>


      {/* About Us */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About A2Z Autozone
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto mb-4">
              Trusted MOT testing and vehicle servicing in Slough, delivering quality, transparency, and reliability.
            </p>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              Our mission is to provide expert car care with honesty and precision, ensuring every vehicle leaves our garage in top condition.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Shield, title: "Certified MOT Centre", desc: "Fully authorised MOT testing station for Class 3, 4, 5 & 7 vehicles." },
              { icon: Wrench, title: "Expert Technicians", desc: "Skilled mechanics with years of experience in repairs, servicing, and diagnostics." },
              { icon: CheckCircle2, title: "Honest & Reliable", desc: "Clear advice, fair pricing, and customer-focused service you can trust." },
              { icon: Gauge, title: "Advanced Diagnostics", desc: "We use the latest equipment to quickly detect and resolve vehicle issues." },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition">
                <item.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Stats / Numbers */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-12">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "5,000+", label: "Vehicles Serviced" },
              { number: "1,000+", label: "Happy Customers" },
            ].map((stat, i) => (
              <div key={i} className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</h3>
                <p className="text-gray-700 text-sm sm:text-base">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link
              to="/about"
              className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all hover:scale-105 text-sm sm:text-base"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Intro */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose A2Z Autozone?
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
              At A2Z Autozone, we provide reliable automotive services with certified mechanics, advanced diagnostics, and fully compliant testing facilities. Trusted by thousands of UK car owners for quality, transparency, and peace of mind.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Shield, text: "Certified MOT Testing" },
              { icon: CheckCircle2, text: "Fully Insured & Compliant" },
              { icon: Wrench, text: "Expert Mechanical Repairs" },
              { icon: Gauge, text: "Advanced Diagnostics" },
              { icon: Disc, text: "Brakes & Clutches" },
              { icon: Car, text: "Fast & Efficient Service" },
              { icon: Shield, text: "Quality Parts & Materials" },
              { icon: CheckCircle2, text: "Warranty & Guarantee" },
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#3b82f6] to-[#1e40af] rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg">{feature.text}</h3>
              </div>
            ))}
          </div>



        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Professional automotive services you can trust
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-700 transition-all hover:scale-105 text-sm sm:text-base"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {trustBadges.map((badge, index) => (
              <TrustBadge key={badge.title} badge={badge} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
          >
            Ready to Book Your MOT?
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl mb-8"
          >
            Fast & reliable MOT testing in Slough
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/book"
              className="inline-block bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105 text-sm sm:text-base"
            >
              Book Appointment Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ service, index }: { service: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{ hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
    >
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
        <service.icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
      <p className="text-sm sm:text-base text-gray-600">{service.description}</p>
    </motion.div>
  );
}

function TrustBadge({ badge, index }: { badge: any; index: number }) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white p-6 sm:p-8 rounded-lg shadow-lg flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
    >
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
        <badge.icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
      </div>
      <div className="text-center sm:text-left">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">{badge.title}</h3>
        <p className="text-sm sm:text-base text-gray-600">{badge.description}</p>
      </div>
    </motion.div>
  );
}
