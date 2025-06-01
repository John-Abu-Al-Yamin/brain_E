"use client";
import { motion } from "framer-motion";
import { useState, ReactNode } from "react";
import HeaderSection from "../HeaderSection";
import Link from "next/link";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// // Import required modules
// import { Navigation, Pagination, Autoplay } from "swiper/modules";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  children: ReactNode;
  images: string[];
}

const OurProjects: React.FC = () => {
  const [openModal, setOpenModal] = useState<string | null>(null);

  // Project images data
  const projectImages = {
    pretty: [
      "/image/EncryptBrain/Pretty/pretty logo.png",
      "/image/EncryptBrain/Pretty/pretty 1.png",
      "/image/EncryptBrain/Pretty/pretty 4.png",
      "/image/EncryptBrain/Pretty/pretty 5.png",
    ],
    mhwerflowers: [
      "/image/EncryptBrain/Pretty/mhwerflowers.png",
      "/image/EncryptBrain/Pretty/pretty logo.png",
      "/image/EncryptBrain/MhwerFlowers/Screenshot 2025-05-20 222529.png",
      "/image/EncryptBrain/Pretty/mhwerflowers.png",
    ],
  };

  const closeModal = (): void => setOpenModal(null);

  const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    title,
    description,
    children,
   
  }) => {
    if (!isOpen) return null;

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        onClick={onClose}
      >
        <div
          className="bg-white dark:bg-zinc-900 rounded-lg shadow-xl max-w-2xl w-full mx-4 p-6 max-h-[90vh] overflow-y-auto"
          onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
            >
              ×
            </button>
          </div>

          {/* Image Slider */}
          {/* <div className="mb-6">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              navigation={true}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                reverseDirection: false,
              }}
              speed={800}
              effect="slide"
              loop={true}
              className="rounded-lg overflow-hidden"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-64 w-full">
                    <img
                      src={image}
                      alt={`${title} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div> */}

          <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
            {description}
          </p>
          <div className="space-y-4">{children}</div>
        </div>
      </div>
    );
  };

  return (
    <motion.div
      id="projects"
      className="py-2 px-2 lg:py-6 lg:px-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
    >
      <HeaderSection title="Our Projects" />

      <div className="w-full grid grid-cols-2 gap-x-4 md:gap-x-6">
        {/* Project Card - Pretty */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-xl shadow-sm dark:shadow-none bg-white dark:bg-zinc-900 transition hover:shadow-md"
        >
          <div className="relative h-44 w-full">
            {/* Background image */}
            <div className="absolute inset-0 w-full h-full object-cover bg-white z-0"></div>

            {/* Foreground centered image */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <img
                src="/image/EncryptBrain/Pretty/pretty logo.png"
                alt="Pretty Project"
                className="w-44 h-44 object-contain"
              />
            </div>
          </div>

          <div className="p-3 sm:p-4">
            <div className="flex items-center flex-col lg:flex-row lg:justify-between mb-2">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Pretty
              </h3>
              <button
                onClick={() => setOpenModal("pretty")}
                className="w-full lg:w-auto cursor-pointer text-xs lg:text-md px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                type="button"
              >
                Visit Pretty
              </button>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-5">
              Pretty is a web app to create & share beautiful presentations. It
              provides customizable templates and interactive features for fast,
              stunning results.
            </p>
          </div>
        </motion.div>

        {/* Project Card - MhwerFlowers */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-xl shadow-sm dark:shadow-none bg-white dark:bg-zinc-900 transition hover:shadow-md"
        >
          <div className="relative h-44 w-full">
            {/* Background image */}
            <div className="absolute inset-0 w-full h-full object-cover bg-white z-0"></div>

            {/* Foreground centered image */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <img
                src="/image/EncryptBrain/Pretty/mhwerflowers.png"
                alt="Pretty Project"
                className="w-44 h-44 object-contain"
              />
            </div>
          </div>

          <div className="p-3 sm:p-4">
            <div className="flex items-center flex-col lg:flex-row lg:justify-between mb-2">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                MhwerFlowers
              </h3>
              <button
                onClick={() => setOpenModal("mhwerflowers")}
                className="w-full lg:w-auto cursor-pointer text-xs lg:text-md px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                type="button"
              >
                Visit MhwerFlowers
              </button>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-5">
              MhwerFlowers – Send Love, Send Flowers Across Saudi Arabia.
              Looking to brighten someone&apos;s day or mark a special occasion?
              MhwerFlowers is your trusted flower delivery service across Saudi
              Arabia. From romantic roses to elegant bouquets and thoughtful
              arrangements, we make it easy to order and send fresh flowers with
              just a few clicks. Whether you&apos;re in Riyadh, Jeddah, Dammam,
              or anywhere in the Kingdom, we deliver beauty to every
              doorstep—quickly, reliably, and with love.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Pretty Modal */}
      <Modal
        isOpen={openModal === "pretty"}
        onClose={closeModal}
        title="Pretty"
        description="Pretty is a web app to create & share beautiful presentations. It provides customizable templates and interactive features for fast, stunning results."
        images={projectImages.pretty}
      >
        <div className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
          Coming Soon
        </div>
      </Modal>

      {/* MhwerFlowers Modal */}
      <Modal
        isOpen={openModal === "mhwerflowers"}
        onClose={closeModal}
        title="MhwerFlowers"
        description="MhwerFlowers – Send Love, Send Flowers Across Saudi Arabia. Looking to brighten someone's day or mark a special occasion? MhwerFlowers is your trusted flower delivery service across Saudi Arabia. From romantic roses to elegant bouquets and thoughtful arrangements, we make it easy to order and send fresh flowers with just a few clicks. Whether you're in Riyadh, Jeddah, Dammam, or anywhere in the Kingdom, we deliver beauty to every doorstep—quickly, reliably, and with love."
        images={projectImages.mhwerflowers}
      >
        <Link
          href="https://mhwerflowers.com"
          target="_blank"
          className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Visit MhwerFlowers
        </Link>
      </Modal>
    </motion.div>
  );
};

export default OurProjects;
