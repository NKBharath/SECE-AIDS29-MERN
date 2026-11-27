import { Link, Outlet } from "react-router-dom";

function Admin() {
  return (
    <div className="bg-[rgb(2,28,81)] h-screen">
      <h1 className="text-center text-3xl text-gray-300">
        Admin Page
      </h1>
      <nav className="w-full flex justify-around mt-5 p-5 bg-white font-bold ">
        <Link to={"/admin/dashboard"} className=" bg-gray-500 p-2 rounded-2xl">
          Dashboard
        </Link>
        <Link to={"/admin/userdetails"} className=" bg-gray-500 p-2 rounded-2xl">User Details</Link>
        <Link to={"/admin/settings"} className=" bg-gray-500 p-2 rounded-2xl">Settings</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default Admin;
