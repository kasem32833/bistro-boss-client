import React from "react";

const MenuItem = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div className="flex gap-4">
      <img className="w-[100px] h-[100px]" style={{borderRadius: "0 200px 200px 200px"}} src={image} alt="" />
      <div>
        <h3 className="uppercase">{name}---------</h3>
        <p >{recipe}</p>
      </div>
      <div>
      <p className="font-bold text-yellow-500">${price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
