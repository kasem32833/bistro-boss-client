// import required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//swiper pagination



import img1 from  '../../assets/home/slide1.jpg'
import img2 from  '../../assets/home/slide2.jpg'
import img3 from  '../../assets/home/slide3.jpg'
import img4 from  '../../assets/home/slide4.jpg'
import img5 from  '../../assets/home/slide5.jpg'
import SectionTitle from '../../shared/sectionTitle/SectionTitle';



const Category = () => {
  return (

      <section>
        <SectionTitle 
            heading={"Order Online"}
            subHeadign={"From 11.00am to 10.00pm"}
        ></SectionTitle>
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><
            img src={img1} alt="" />
            <h3 className="text-3xl uppercase text-center -mt-20  text-slate-900">Salad</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt="" />
            <h3 className="text-3xl uppercase text-center -mt-20   text-slate-900">PIZZA</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img3} alt="" />
            <h3 className="text-3xl uppercase text-center -mt-20   text-slate-900">Soup</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img4} alt="" />
            <h3 className="text-3xl uppercase text-center -mt-20   text-slate-900">Desert</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img className='' src={img5} alt="" />
            <h3 className="text-3xl uppercase text-center -mt-20   text-slate-900">ASLAD</h3>
        </SwiperSlide>
      </Swiper>
      </section>
    
    
  );
};

export default Category;
