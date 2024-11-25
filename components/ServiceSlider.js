// icons
import {
  FaCogs,
  FaDatabase,
  FaLock,
  FaCode,
  FaReact,
  FaShoppingCart,
  FaUsers,
  FaServer,
  FaCloud,
  FaClipboardList,
} from "react-icons/fa";
import { RxArrowTopRight } from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// data
const serviceData = [
  {
    icon: <FaReact />,
    title: "Web Development",
    description:
      "Build responsive and interactive websites using modern technologies like React, Next.js, Nest.js and the MERN stack.",
  },
  {
    icon: <FaCode />,
    title: "Custom Software",
    description:
      "Create tailored and scalable software solutions to meet your business's unique needs and strategic objectives.",
  },
  {
    icon: <FaDatabase />,
    title: "Database Management",
    description:
      "Set up, manage, and optimize databases like PostgreSQL and MongoDB for secure and efficient data storage.",
  },
  {
    icon: <FaCogs />,
    title: "API Development",
    description:
      "Develop scalable, high-performance, and robust APIs using REST or GraphQL to power web and mobile applications.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Solutions",
    description:
      "Deploy and manage apps on cloud platforms like AWS, Azure, and Google Cloud for enhanced performance and reliability.",
  },
  {
    icon: <FaLock />,
    title: "Auth & Security",
    description:
      "Implement secure authentication systems and advanced user access controls to protect your application and its data.",
  },
  {
    icon: <FaShoppingCart />,
    title: "E-Commerce Solutions",
    description:
      "Deliver complete and seamless e-commerce solutions, including payment gateway integration and inventory management.",
  },
  {
    icon: <FaClipboardList />,
    title: "CMS Solutions",
    description:
      "Develop and customize robust content management systems to streamline efficient content creation and publishing.",
  },
  {
    icon: <FaServer />, // You may need to import this from react-icons/fa
    title: "Microservices",
    description:
      "Design and implement modular microservices architectures for scalable and maintainable backend systems.",
  },
  {
    icon: <FaUsers />,
    title: "Real-Time Features",
    description:
      "Integrate real-time capabilities like chat, live video, and notifications for enhanced user engagement.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            <div className="text-4xl text-accent mb-4">{item.icon}</div>

            <div className="mb-8 ">
              <div className="mb-2 text-lg whitespace-nowrap">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>
            <div className="text-3xl">
              <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
            </div>
          </div>
        </SwiperSlide>

        // or you can use the original Swiper component if you prefer

        // <SwiperSlide key={index}>
        //   <div className="p-6 text-white bg-[#212121] rounded-md shadow-md flex flex-col items-center gap-y-4">
        //     {item.icon}
        //     <h3 className="text-sm font-semibold">{item.title}</h3>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
