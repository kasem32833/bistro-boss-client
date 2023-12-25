import { useState } from "react";
import orderBg from "../../assets/shop/banner2.jpg";
import Cover from "../../shared/cover/Cover";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import FoodCard from "../FoodCard";
const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menus] = useMenu();

    const dessert  = menus.filter(menu => menu.category ==='dessert');
    const soup  = menus.filter(menu => menu.category ==='soup');
    const salad  = menus.filter(menu => menu.category ==='salad');
    const pizza  = menus.filter(menu => menu.category ==='pizza');
    const drinks  = menus.filter(menu => menu.category ==='drinks');
    const offered  = menus.filter(menu => menu.category ==='offered');


    // console.log(dessert);

  return (
    <div>
      <Cover image={orderBg} title="Order Food"></Cover>
      <div className="py-6">

        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
            <Tab>Offered</Tab>
          </TabList>
          <TabPanel>
           <div className="grid grid-cols-3 gap-6">
           {
              salad.map(item=> <FoodCard key={item._id} item={item}></FoodCard>)
            }
           </div>
          </TabPanel>
          <TabPanel> <div className="grid grid-cols-3 gap-6">
           {
              pizza.map(item=> <FoodCard key={item._id} item={item}></FoodCard>)
            }
           </div>
           </TabPanel>
          <TabPanel>
          <div className="grid grid-cols-3 gap-6">
           {
              soup.map(item=> <FoodCard key={item._id} item={item}></FoodCard>)
            }
           </div>
          </TabPanel>
          <TabPanel>
          <div className="grid grid-cols-3 gap-6">
           {
              dessert.map(item=> <FoodCard key={item._id} item={item}></FoodCard>)
            }
           </div>
          </TabPanel>
          <TabPanel>
          <div className="grid grid-cols-3 gap-6">
           {
              drinks.map(item=> <FoodCard key={item._id} item={item}></FoodCard>)
            }
           </div>
          </TabPanel>
          <TabPanel>
          <div className="grid grid-cols-3 gap-6">
           {
              offered.map(item=> <FoodCard key={item._id} item={item}></FoodCard>)
            }
           </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
