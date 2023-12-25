import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const Allusers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleDelete = (user) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
      
          axiosSecure.delete(`users/${user._id}`)
          .then(res => {
            if(res.data.deletedCount> 0){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your item has been deleted.",
                    icon: "success",
                    
                  });
                refetch();
            }
          })
        }

      });

};

const handleMakeAdmin=(user)=>{
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res => {
        console.log(res.data)
        if(res.data.modifiedCount > 0){
            Swal.fire({
                position: "center",
                icon: "success",
                title:`${user.name}is now Admin`,
                showConfirmButton: false,
                timer: 1500
              });
        }
        refetch()
    })
    
}

  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h3>All Users</h3>
        <h3>Total Users:{users.length}</h3>
      </div>
      <div className="mx-6">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {
                        user.role === "Admin" ? "Admin" :  <button
                        onClick={()=>handleMakeAdmin(user)}
                        className="btn btn-secondary btn-xs"
                      >
                        <FaUsers></FaUsers>
                      </button>
                    }
                   
                  </td>
                  <th>
                    <button
                      onClick={() => handleDelete(user)}
                      className="btn btn-secondary btn-xs"
                    >
                      
                      <FaTrash></FaTrash>delete
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Allusers;
