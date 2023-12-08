import { Helmet } from "react-helmet-async";
import Cover from "../../shared/cover/Cover";
import image from "../../assets/menu/banner3.jpg"
import dessertBg from "../../assets/menu/dessert-bg.jpeg"
import soupBg from "../../assets/menu/soup-bg.jpg"
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../shared/sectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory";

const Menu = () => {

  const [menus] = useMenu();

  const dessert  = menus.filter(menu => menu.category ==='dessert');
  const soup  = menus.filter(menu => menu.category ==='soup');
  const salad  = menus.filter(menu => menu.category ==='salad');
  const pizza  = menus.filter(menu => menu.category ==='pizza');
  const offered  = menus.filter(menu => menu.category ==='offered');


  
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover image={image} title={'Check Our Menu'}></Cover>
      <SectionTitle
        subHeadign ="Don't miss"
        heading="Today's Offer"
      ></SectionTitle>
      <MenuCategory items={dessert} title={dessert} img={dessertBg}></MenuCategory>
      <MenuCategory items={soup} title={soup} img={soupBg}></MenuCategory>

    </div>
  );
};

export default Menu;
