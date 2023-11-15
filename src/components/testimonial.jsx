import React from "react";
import "../assets/styles/testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Customers = [
  {
    Customer_ID: " Testimonial_1",
    Customer_Name: "Emily",
    Customer_Location: "Lagos, Nigeria",
    Customer_Comment:
      "Vanya Express exceeded my expectations. Fast, reliable, and friendly service. I wouldn't trust anyone else with my deliveries!",
  },
  {
    Customer_ID: " Testimonial_2",
    Customer_Name: "John",
    Customer_Location: " Abuja, Nigeria",
    Customer_Comment:
      "Absolutely impressed with Vanya Express! They've made shipping hassle-free and convenient. Kudos to the team!",
  },
  {
    Customer_ID: " Testimonial_3",
    Customer_Name: "Sarah",
    Customer_Location: " Port Harcourt, Nigeria",
    Customer_Comment:
      "Vanya Express has consistently delivered my parcels on time, every time. I appreciate their dedication to punctuality.",
  },
  {
    Customer_ID: " Testimonial_4",
    Customer_Name: "Michael",
    Customer_Location: "Enugu, Nigeria",
    Customer_Comment:
      "I've been using Vanya Express for both personal and business deliveries. They're dependable, and their customer service is top-notch.",
  },
  {
    Customer_ID: " Testimonial_5",
    Customer_Name: "Lisa",
    Customer_Location: "Ibadan, Nigeria",
    Customer_Comment:
      "Vanya Express is my go-to for special deliveries. They've never let me down, and the care they take with packages is unmatched..",
  },
  {
    Customer_ID: " Testimonial_6",
    Customer_Name: "David",
    Customer_Location: "Kano, Nigeria",
    Customer_Comment:
      "I'm a loyal Vanya Express customer. Their speed and efficiency are unmatched, and their friendly staff always brighten my day.",
  },
  {
    Customer_ID: " Testimonial_7",
    Customer_Name: "Michelle",
    Customer_Location: "Benin City, Nigeria",
    Customer_Comment:
      "I've entrusted Vanya Express with delivering important documents for my business, and they've always come through with precision and reliability.",
  },
  {
    Customer_ID: " Testimonial_8",
    Customer_Name: "Richard",
    Customer_Location: "Kaduna, Nigeria",
    Customer_Comment:
      "Vanya Express has made my life so much easier. Their exceptional service ensures my packages reach their destination safely and quickly.",
  },
  {
    Customer_ID: " Testimonial_9",
    Customer_Name: "Jennifer",
    Customer_Location: "Owerri, Nigeria",
    Customer_Comment:
      "From day one, Vanya Express has been a game-changer for my online business. Their professionalism and on-time deliveries have helped me grow",
  },
  {
    Customer_ID: " Testimonial_10",
    Customer_Name: "Alex",
    Customer_Location: "Warri, Nigeria",
    Customer_Comment:
      "Vanya Express embodies reliability and trustworthiness. I'm a satisfied customer who appreciates their dedication to service excellence.",
  },
];

const Cards = Customers.map((i) => {
  return (
    <SwiperSlide className="card" key={i.Customer_ID}>
      <p>{i.Customer_Comment}</p>
      <div>
        <p>{i.Customer_Name}</p>
        <p> {i.Customer_Location}</p>
      </div>
    </SwiperSlide>
  );
});

const Testimonials = () => {
  const Swipper = () => {
      if (window.innerWidth <= 768) {
        return (
          <Swiper
            modules={[Navigation, Scrollbar, A11y, Autoplay]}
            spaceBetween={10}
            slidesPerView={2}
            scrollbar={{ draggable: true }}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            loop={true}
            speed={2500}
          >
            {Cards}
          </Swiper>
        );
      } else {
        return (
            <Swiper
              modules={[Navigation, Scrollbar, A11y, Autoplay]}
              spaceBetween={10}
              slidesPerView={4}
              scrollbar={{ draggable: true }}
              autoplay={{ delay: 0, disableOnInteraction: false }}
              loop={true}
              speed={2500}
            >
              {Cards}
            </Swiper>
          );
      }
    }
  return (
    <>
      <section id="testimonial">
        <div>
          <h2>Testimonies</h2>
          <p>
            Discover what our satisfied clients have to say about their
            experience with Vanya Express
          </p>
        </div>
        <div className="cardHolder">
          <Swipper />
        </div>
      </section>
    </>
  );
};

export default Testimonials;
