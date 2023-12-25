import React from "react";
import SectionTitle from "../../../shared/sectionTitle/SectionTitle";
import { useForm } from "react-hook-form";

const Additems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <SectionTitle
        heading="Add an Item"
        subHeadign="whats's new"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>First Name</label>
          <input {...register("name")} />
          <label>Gender Selection</label>
          
          <select {...register("category")} className="select select-ghost w-full max-w-xs">
            <option disabled selected>
              Pick the best JS framework
            </option>
            <option value="salad">Salad</option>
            <option value="pizza">Pizza</option>
            <option value="soup">Soup</option>
            <option value="dessert">Dessert</option>
            <option value="drinks">Drinks </option>
          </select>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Additems;
