import { useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Car,
  Wrench,
  Gauge,
  Disc,
  Settings,
  CircleDot,
  Ruler,
  Truck,
  Paintbrush,
} from "lucide-react";
import HeroImage from "../../assets/Services.png"; // imported image

export function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: Car,
      title: "MOT Testing",
      subtitle: "Class 3, 4, 5 & 7",
      description:
        "Comprehensive MOT testing for all vehicle types. We provide thorough inspections to ensure your vehicle meets all UK safety and environmental standards.",
      features: [
        "Class 4 - Cars & Light Vans",
        "Class 5 - Private Passenger Vehicles",
        "Class 7 - Commercial Vehicles up to 3.5 tonnes",
        "Class 3 - Three-wheeled vehicles",
      ],
    },
    {
      icon: Wrench,
      title: "Mechanical Repairs",
      subtitle: "Expert Repairs",
      description:
        "Professional mechanical repair services for all makes and models. Our experienced technicians can diagnose and fix any issue with your vehicle.",
      features: [
        "Engine repairs and rebuilds",
        "Transmission repairs",
        "Suspension work",
        "Exhaust system repairs",
      ],
    },
    {
      icon: Gauge,
      title: "Vehicle Diagnostics",
      subtitle: "Advanced Technology",
      description:
        "State-of-the-art diagnostic equipment to quickly identify and resolve issues with your vehicle's electronic systems.",
      features: [
        "Engine management diagnostics",
        "ABS and airbag diagnostics",
        "Electronic system testing",
        "Fault code reading and clearing",
      ],
    },
    {
      icon: Disc,
      title: "Brakes",
      subtitle: "Complete Brake Service",
      description:
        "Full brake system inspection, repair, and replacement services. We ensure your brakes are in perfect working condition for your safety.",
      features: [
        "Brake pad replacement",
        "Disc and drum replacement",
        "Brake fluid changes",
        "Brake system inspection",
      ],
    },
    {
      icon: Settings,
      title: "Clutches",
      subtitle: "Clutch Specialists",
      description:
        "Expert clutch repair and replacement services. We handle all types of clutch systems with precision and care.",
      features: [
        "Clutch replacement",
        "Flywheel replacement",
        "Clutch cable adjustment",
        "Hydraulic clutch repairs",
      ],
    },
    {
      icon: CircleDot,
      title: "Servicing",
      subtitle: "Full & Interim Services",
      description:
        "Regular servicing to keep your vehicle running smoothly and efficiently. We follow manufacturer guidelines and use quality parts.",
      features: [
        "Oil and filter changes",
        "Full vehicle inspection",
        "Fluid level checks and top-ups",
        "Air filter replacement",
      ],
    },
    {
      icon: Ruler,
      title: "Suspension",
      subtitle: "Suspension Repair & Inspection",
      description:
        "Expert suspension inspection and repair services to restore ride comfort, stability, and vehicle control on all road surfaces.",
      features: [
        "Shock absorber & strut replacement",
        "Suspension arm & bushing repairs",
        "Ride height & stability checks",
        "Noise, vibration & handling diagnosis",
      ],
    },
    {
      icon: Paintbrush,
      title: "Body Work",
      subtitle: "Accident Repair & Body Restoration",
      description:
        "Professional vehicle body repair services to restore your car’s appearance after accidents, dents, or cosmetic damage.",
      features: [
        "Accident damage repairs",
        "Dent removal & panel beating",
        "Full & partial resprays",
        "Scratch & paint correction",
      ],
    },
    {
      icon: Truck,
      title: "Cars & Vans",
      subtitle: "Up to 3.5 Tonnes",
      description:
        "We service all types of cars and light commercial vehicles up to 3.5 tonnes, including delivery vans and work vehicles.",
      features: [
        "All car makes and models",
        "Light commercial vehicles",
        "Panel vans",
        "Pickup trucks",
      ],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[400px] md:h-[475px]">
        <img
          src={HeroImage}
          alt="Services Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center text-white"
          >
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4"
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl"
            >
              Comprehensive automotive services for all your needs
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12 sm:mt-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
              Ready to Book a Service?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
              Get in touch with us today to schedule your appointment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book"
                className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-700 transition-all hover:scale-105 font-semibold"
              >
                Book Appointment
              </Link>
              <Link
                to="/contact"
                className="inline-block bg-gray-100 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-200 transition-all hover:scale-105 font-semibold"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ service, index }: { service: any; index: number }) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all"
    >
      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <service.icon className="w-5 h-5 sm:w-7 sm:h-7 text-blue-600" />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{service.title}</h3>
          <p className="text-blue-600 font-medium text-sm sm:text-base">{service.subtitle}</p>
        </div>
      </div>

      <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4">{service.description}</p>

      <ul className="space-y-1 sm:space-y-2">
        {service.features.map((feature: string) => (
          <li key={feature} className="flex items-start gap-2 text-gray-600 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1 flex-shrink-0"></span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
