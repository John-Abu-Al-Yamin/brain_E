"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Linkedin,
  Mail,
  Phone,
  LocateIcon,
  EclipseIcon,
} from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: false, amount: 0.2 });

  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      ref={footerRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-gray-900 text-gray-100 h-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-2 lg:py-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 lg:gap-8">
          {/* Company Info */}
          <motion.div
            variants={item}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="col-span-1 text-center md:text-left"
          >
            <motion.h3
              className="text-lg md:text-xl font-bold mb-2 md:mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Encrypt Brain
            </motion.h3>
            <motion.p className="text-sm md:text-base text-gray-400 mb-3 md:mb-4">
              Creating amazing digital experiences with cutting-edge technology.
            </motion.p>
            <motion.div
              className="flex justify-center md:justify-start space-x-4"
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
            >
              {[
                { icon: Mail, href: "mailto:it@encryptbrain.com" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/company/encryptbrain/",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  variants={item}
                  whileHover={{ scale: 1.2, color: "#60a5fa" }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={item}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="col-span-1 text-center md:text-left"
          >
            <motion.h3
              className="text-lg md:text-xl font-bold mb-2 md:mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Services
            </motion.h3>
            <motion.ul
              className="space-y-1 md:space-y-2"
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
            >
              {[
                "Web Development",
                "Mobile Apps",
                "UI/UX Design",
                "Testing",
                "Tech Consulting & Support",
              ].map((service, index) => (
                <motion.li key={index} variants={item}>
                  <motion.a
                    href="#"
                    className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                    whileHover={{ x: 5, color: "#60a5fa" }}
                  >
                    {service}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            variants={item}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="col-span-1 text-center md:text-left"
          >
            <motion.h3
              className="text-lg md:text-xl font-bold mb-2 md:mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Contact Us
            </motion.h3>
            <motion.div
              className="space-y-2 md:space-y-3"
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
            >
              <motion.div
                variants={item}
                className="flex items-center justify-center md:justify-start space-x-2 md:space-x-3"
              >
                <Mail size={16} className="text-gray-400 flex-shrink-0" />
                <a
                  href="mailto:it@encryptbrain.com"
                  className="text-sm md:text-base text-gray-400 hover:text-white transition-colors break-all"
                >
                  it@encryptbrain.com
                </a>
              </motion.div>

              <motion.div
                variants={item}
                className="flex items-start justify-center md:justify-start space-x-2 md:space-x-3"
              >
                <EclipseIcon size={16} className="text-gray-400 flex-shrink-0 mt-1" />
                <p className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors">
                  Commercial registration: (10530 08002 54832)
                </p>
              </motion.div>

              <motion.div
                variants={item}
                className="flex items-start justify-center md:justify-start space-x-2 md:space-x-3"
              >
                <LocateIcon size={16} className="text-gray-400 flex-shrink-0 mt-1" />
                <a
                  href="https://maps.app.goo.gl/DXrKaA1sXJcwQPfs9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Compound 118 – 1st Floor – Apt 4 – Obour City – Egypt
                </a>
              </motion.div>

              <motion.div
                variants={item}
                className="flex items-center justify-center md:justify-start space-x-2 md:space-x-3"
              >
                <Phone size={16} className="text-gray-400 flex-shrink-0" />
                <div className="text-xs md:text-sm text-gray-400 transition-colors">
                  <a
                    className="hover:text-white cursor-pointer block md:inline"
                    href="https://api.whatsapp.com/send?phone=201097706996"
                  >
                    +201097706996
                  </a>
                  <span className="hidden md:inline"> | </span>
                  <a
                    href="https://api.whatsapp.com/send?phone=201044950655"
                    className="hover:text-white cursor-pointer block md:inline"
                  >
                    +201044950655
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 mt-4 md:mt-6 pt-3 md:pt-4 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.p
            className="text-gray-500 text-xs md:text-sm"
            whileHover={{ color: "#60a5fa" }}
          >
            © {currentYear} Encrypt Brain. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
}