import SectionTitle from "../../shared/sectionTitle/SectionTitle";
import featured from '../../assets/home/featured.jpg'
import './featured.css'

const Featured = () => {
    return (
        <div className="my-10 featured bg-fixed   px-36 py-10 text-white ">
            <SectionTitle  
            subHeadign="Check it Out"
            heading="Fectured Item"
            ></SectionTitle>
            <div className="flex gap-10 justify-center items-center">
                <div>
                    <img src={featured} alt="" />
                </div>
                <div>
                    <p>Aug 20 2023</p>
                    <p className="wppercase font-bold">Where can i get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas possimus ex doloribus pariatur veritatis magnam vel suscipit minima sapiente quasi quod fuga nobis quaerat sunt autem, asperiores cum labore natus.
                    </p>
                    <button className="btn border-0 border-b-2 border-black mt-4 ">Order Now </button>
                </div>
            </div>
        </div>
    );
};

export default Featured;