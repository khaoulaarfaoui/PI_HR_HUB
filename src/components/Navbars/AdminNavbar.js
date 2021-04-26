import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import UserDropdown from "components/Dropdowns/HRDropDowns/UserDropdown.js";
import HrCRUDService from "../../service/HRservice/crudservice";

export default function Navbar() {
  const dispatch = useDispatch();

  const form = useRef();
  const history = useHistory();
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const onChangeSearch = (e) => {
    const search = e.target.value;
    setSearch(search);
  };
  const handleSearch = (e) => {
    e.preventDefault();

    history.push({
      pathname: "/admin/search",
      state: { detail: search },
    });
  };
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-no-wrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-no-wrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <a
            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            Dashboard
          </a>
          {/* Form */}
          <Form
            onSubmit={handleSearch}
            ref={form}
            className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3"
          >
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
              </span>
              <Input
                type="text"
                placeholder="Search here..."
                className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
                value={search}
                onChange={onChangeSearch}
              />
            </div>
            <button>go</button>
          </Form>
          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <UserDropdown />
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
