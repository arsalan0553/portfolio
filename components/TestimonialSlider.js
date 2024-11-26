// testimonial data

// icons
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonialData = [
  {
    image: "/av-1.svg",
    name: "David Carter",
    position: "Business Owner",
    message:
      "Arsalan delivered exceptional work on time and within budget. His attention to detail and communication made the entire process smooth and stress-free.",
  },
  {
    image: "/av-2.svg",
    name: "Yaseen Khan",
    position: "Startup Founder",
    message:
      "I’m impressed by Arsalan's ability to translate ideas into practical solutions. He was responsive and committed to delivering high-quality results.",
  },
  {
    image: "/av-3.svg",
    name: "Chris Walker",
    position: "Project Manager",
    message:
      "As a freelancer, Arsalan stands out for his professionalism and reliability. The project exceeded my expectations, and I’ll definitely work with him again.",
  },
];

const TestomonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                <div className="mb-2 mx-auto">
                  <Image src={person.image} width={100} height={100} alt="" />
                </div>
                <div className="text-lg">{person.name}</div>
                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {person.position}
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              <div className="mb-4">
                <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
              </div>
              <div className="xl:text-lg text-center md:text-left">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestomonialSlider;
