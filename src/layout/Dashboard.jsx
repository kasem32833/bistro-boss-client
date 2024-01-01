import { FaAd, FaBook, FaCalculator, FaCalendar, FaHome, FaJediOrder, FaList, FaNotesMedical, FaRegAddressBook, FaShoppingCart, FaStickyNote, FaUser, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    // console.log(isAdmin);   
    return (
        <div className="flex">
            {/* Dashboard sidebar */}
          <div className="div w-64 min-h-screen bg-orange-400">
            <ul className="menu space-y-6 py-8 text-white text-2xl">
                {
                    isAdmin ? <>
                    <li><NavLink to='/dashboard/adminHome'><FaHome></FaHome>Admin Home</NavLink></li>
                    <li><NavLink to='/dashboard/addItems'><FaUtensils></FaUtensils>Add Items</NavLink></li>
                    <li><NavLink to='/dashboard/manageItems'><FaList></FaList>Manage Items</NavLink></li>
                    <li><NavLink to='/dashboard/bookings'><FaBook></FaBook>Mange Bookings</NavLink></li>
                    <li><NavLink to='/dashboard/users'><FaUsers></FaUsers>All Users</NavLink></li>
                    
                    </> : <>
                    <li><NavLink to='/dashboard/cart'><FaShoppingCart></FaShoppingCart>My Cart{cart.length}</NavLink></li>
                    <li><NavLink to='/dashboard/userHome'><FaHome></FaHome>User Home</NavLink></li>
                    <li><NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar>Reservation</NavLink></li>
                    <li><NavLink to='/dashboard/review'><FaAd></FaAd>Add a Review</NavLink></li>
                    <li><NavLink to='/dashboard/bookings'><FaBook></FaBook>My Bookings</NavLink></li>
                    </>
                }
                
                <div className="divider"></div>
                <li><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
                <li><NavLink to='/order'><FaStickyNote></FaStickyNote>Order</NavLink></li>
                <li><NavLink to='/contact'><FaRegAddressBook></FaRegAddressBook>Contact</NavLink></li>

            </ul>
            </div> 
            {/* dashboard content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div> 
        </div>
    );
};

export default Dashboard;