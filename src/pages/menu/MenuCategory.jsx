import MenuItem from "../../shared/MenuItem/MenuItem";
import Cover from "../../shared/cover/Cover";

const MenuCategory = ({items, title, img}) => {
    return (
        <div className="pt-8">
            {title && <Cover  title={title} image={img}></Cover>}
            <div className="grid grid-cols-2 gap-8 p-6">
                {
                    items?.map(item => <MenuItem 
                    key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;