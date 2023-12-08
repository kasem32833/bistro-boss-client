import { useState } from "react";
import orderBg from "../../assets/shop/banner2.jpg";
import Cover from "../../shared/cover/Cover";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menus] = useMenu();

    const dessert  = menus.filter(menu => menu.category ==='dessert');
    const soup  = menus.filter(menu => menu.category ==='soup');
    const salad  = menus.filter(menu => menu.category ==='salad');
    const pizza  = menus.filter(menu => menu.category ==='pizza');
    const offered  = menus.filter(menu => menu.category ==='offered');


    console.log(dessert);

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
      </TabList>
      <TabPanel></TabPanel>
      <TabPanel>Pizza</TabPanel>
      <TabPanel>Soup</TabPanel>
      <TabPanel>Dessert</TabPanel>
      <TabPanel>Drinks</TabPanel>
    </Tabs>
      </div>

    </div>
  );
};

export default Order;
