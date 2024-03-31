// import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingBag, FaSignInAlt, FaUser } from "react-icons/fa";
import { useState } from "react"

const user = { _id:null, role:"admin" };
const Header = () => {
  const navigate = useNavigate()
  const [isOpen,setIsOpen] = useState<boolean>(true)
  return (
    <nav className="header">
      <Link onClick={()=> setIsOpen(false)} to={"/"}>HOME</Link>
      <Link onClick={()=> setIsOpen(false)} to={"/search"}>
        <FaSearch />
      </Link>
      <Link onClick={()=> setIsOpen(false)} to={"/cart"}>
        <FaShoppingBag />
      </Link>
      {user?._id ? (
        <>
          <button onClick={()=>setIsOpen((prev)=> !prev)}>
            <FaUser />
          </button>
          <dialog open={isOpen}>
            <div>
              {user?.role === "admin" && (
                <Link onClick={()=> setIsOpen(false)} to={"/admin/dashboard"}>Admin</Link>
              )}
              <Link onClick={()=> setIsOpen(false)} to={"/orders"}>Orders</Link>
            </div>
          </dialog>
        </>
      ) : (
        <button onClick={()=> navigate("/login")}>
          <FaSignInAlt />
          
        </button>
      )}
    </nav>
  );
};

export default Header;
