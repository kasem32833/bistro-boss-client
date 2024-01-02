import { FaEdit } from "react-icons/fa";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../shared/sectionTitle/SectionTitle";
import { MdDelete } from "react-icons/md";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosPublic = useAxiosPublic();
  console.log(menu);

  const handleDelete = async (item)=>{
    const res = await axiosPublic.delete(`/menu/${item._id}`)
    console.log(`/menu/${item._id}`, res.data);
  }

  return (
    <div>
      <SectionTitle
        heading="Manage Your Menu"
        subHeadign="Easy and effective way to manage"
      ></SectionTitle>

      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              #
            </th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Updat</th>
            <th>Delete</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {menu.map((item, index) =><>
            <tr>
            <th>
              {index +1 }
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={item.image}
                     
                    />
                  </div>
                </div>
              </div>
            </td>
            <td>
             {item.name}
              <br />
              
            </td>
            <td>{item.price}</td>
            <th>
              <button className="btn btn-ghost btn-md"><FaEdit></FaEdit>update</button>
            </th>
            <th>
              <button onClick={()=>handleDelete(item)} className="btn btn-ghost btn-md"><MdDelete></MdDelete>Delete</button>
            </th>
          </tr>
          </>)}
          
        </tbody>
      </table>
    </div>
  );
};

export default ManageItems;
