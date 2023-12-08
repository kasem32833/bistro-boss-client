import { useEffect, useState } from "react";
import SectionTitle from "../../shared/sectionTitle/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";
import useMenu from "../../hooks/useMenu";

const PopularManu = () => {

    const [menus, loading] = useMenu();
    const popular = menus.filter(menu => menu.category === 'popular');
    // const [menu, setMenu] = useState();
    // console.log(menu);

    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItem = data.filter(item =>item.category === 'popular');
    //         setMenu(popularItem);
    //     })
    // },[])


    return (
       <section className="py-10 my-10">
            <SectionTitle 
            subHeadign={'Popular Item'}
            heading={'From Our Menu'}
            >
            </SectionTitle>
            <div className="grid grid-cols-2 gap-4">
                {
                    popular?.map(item => <MenuItem 
                    key={item._id} item={item}></MenuItem>)
                }
            </div>
            
       </section>
    );
};

export default PopularManu;