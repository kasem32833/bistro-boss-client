import { FaEdit } from "react-icons/fa";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../shared/sectionTitle/SectionTitle";
import { MdDelete } from "react-icons/md";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";


const ManageItems = () => {
  const [menus] = useMenu();
  const axiosPublic = useAxiosPublic();
  console.log(menus);
  const handleDelete= async (item)=>{
    const res = await  axiosPublic.delete(`/menu/${item._id}`)
    console.log('Delete button clicked', res.data);
  }
  return (
    <div>
      <div>
        <SectionTitle
          heading="Manage Your Item"
          subHeadign="Easy to Manage Your items"
        ></SectionTitle>
      </div>
      <div>
        <div className="overflow-x-auto">
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
                <th>Update</th>
                <th>Delete</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
             {menus.map((item,index)=><>
                <tr>
                <th>
                  {index + 1}
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
                </td>
                    {item.price}
                <td>
                    <Link to={`/dashboard/updateItems/${item._id}`}>
                        <button className="btn btn-ghost btn-xs"><FaEdit></FaEdit>Update</button>
                    </Link>
                  
                </td>
                <td>
                  <button onClick={()=>handleDelete(item)} className="btn btn-ghost btn-xs"><MdDelete></MdDelete>Delete</button>
                </td>
              </tr>
             </>)}
            </tbody>

        </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
