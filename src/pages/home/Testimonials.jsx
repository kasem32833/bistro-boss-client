import SectionTitle from "../../shared/sectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const Testimonials = () => {
    const [reviews , setReviews] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
  return (
    <div className="my-20">
      <SectionTitle
        subHeadign="What out client say"
        heading="testimonials"
      ></SectionTitle>
      <>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {
            reviews.map(review => <SwiperSlide key ={ review._id} >
              <div className="m-10">
                <p>{review.details}</p>
                <h3 className="text-2xl text-orange-500">{ review.name}</h3>
                
              </div>
            </SwiperSlide>)
          }
          
          
        </Swiper>
      </>
    </div>
  );
};

export default Testimonials;
