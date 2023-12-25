import React from "react";
import SectionTitle from "../../../shared/sectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key{image_hosting_key}`

const Additems = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const onSubmit = async (data) => {
    console.log(data);
    // image upload to image bb and then get an url
    const res = await  axiosPublic.post(image_hosting_api, )

  };

  return (
    <div>
      <SectionTitle
        heading="Add an Item"
        subHeadign="whats's new"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Recipi Name</label>
          <input {...register("name")} />

          <label>Category</label>
          
          <select defaultValue="default" {...register("category")} className="select select-ghost w-full max-w-xs">
            <option disabled value="default">
              Select Category
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
