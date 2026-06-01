import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Users, Award, Car, Clock } from "lucide-react";
import about from "../../assets/about1.jpg";
import aboutus from "../../assets/aboutus.jpg";

export function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { icon: Car, value: 50000, suffix: "+", label: "Vehicles Tested & Serviced" },
    { icon: Users, value: 100, suffix: "%", label: "Customer Satisfaction" },
    { icon: Award, value: 5, suffix: "", label: "Star Rated Service" },
    { icon: Clock, value: 6, suffix: "", label: "Days a Week Open" },
  ];

  return (
    <div className="pt-20">
      {/* ================= Hero Section ================= */}
      <section className="relative h-[320px] sm:h-[400px] md:h-[475px] w-full overflow-hidden">
        <img
          src={about}
          alt="A2Z Autozone Garage"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-white text-center"
          >
            About A2Z Autozone
          </motion.h1>
        </div>
      </section>

      {/* ================= About Content ================= */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Trusted MOT & Auto Repair Garage in Slough, UK
              </h2>

              <div className="space-y-3 sm:space-y-4 text-gray-700 text-base sm:text-lg">
                <p>
                  A2Z Autozone Garage is the next chapter of what was previously
                  known as <strong>A2Z MOT Centre</strong>. While our name has
                  evolved, our commitment to quality, honesty, and professional
                  service remains exactly the same.
                </p>

                <p>
                  Building on the solid foundations of A2Z MOT Centre, A2Z
                  Autozone was established to offer a broader range of vehicle
                  services under one modern, fully equipped garage.
                </p>

                <p>
                  Our facility is fitted with up-to-date diagnostic and MOT
                  testing equipment, allowing us to service cars, vans, and
                  light commercial vehicles to the highest standards.
                </p>

                <p>
                  From MOT testing and servicing to mechanical repairs and
                  diagnostics, our skilled technicians provide transparent,
                  reliable, and customer-focused workmanship you can trust.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-64 sm:h-80 md:h-[500px] rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src={aboutus}
                alt="Garage Services"
                className="w-full h-full object-cover object-center sm:object-[20%_30%]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= Stats Section ================= */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= Why Choose Us ================= */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose A2Z Autozone?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Qualified Technicians",
                description:
                  "Skilled professionals with hands-on MOT and repair expertise.",
              },
              {
                title: "Modern Equipment",
                description:
                  "Advanced diagnostics and MOT testing facilities.",
              },
              {
                title: "Honest Pricing",
                description:
                  "Clear quotes with no hidden charges.",
              },
              {
                title: "Efficient Service",
                description:
                  "Quick turnaround without cutting corners.",
              },
              {
                title: "Customer Focused",
                description:
                  "Friendly service built on trust and transparency.",
              },
              {
                title: "DVSA Compliant",
                description:
                  "All work meets current UK MOT regulations.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-4 sm:p-6 rounded-lg"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function StatCard({ stat, index }: { stat: any; index: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = stat.value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [stat.value]);

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="w-12 sm:w-16 h-12 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
        <stat.icon className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600" />
      </div>
      <div className="text-2xl sm:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
        {count.toLocaleString()}
        {stat.suffix}
      </div>
      <div className="text-gray-600 text-sm sm:text-base">{stat.label}</div>
    </motion.div>
  );
}
