/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

export default function SidebarCandidate() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className="md:left-0 bg-gray-300 md:block md:fixed md:top-0 md:bottom-2 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          <div className="md:block text-left md:pb-2  text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0">
            <img
              className="w-28 mx-auto mb-3"
              src={require("../../assets/img//Candidate/profile.svg")}
            />
            <div className="text-center	">HR numberone</div>
            <div className="text-center font-light opacity-50">ESPRIT</div>
          </div>

          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-3 py-2 h-12 border border-solid  border-gray-600 placeholder-gray-400 text-gray-700 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/dashboard") !== -1
                      ? "text-blue-500 hover:text-blue-600"
                      : "text-gray-800 hover:text-gray-600")
                  }
                  to="/admin/dashboard"
                >
                  <i
    className={
        "fas fa-tv mr-2 text-sm " +
        (window.location.href.indexOf("/admin/dashboard") !== -1
            ? "opacity-75"
            : "text-gray-400")
    }
    />{" "}
                  Dashboard
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/tests") !== -1
                      ? "text-blue-500 hover:text-blue-600"
                      : "text-gray-800 hover:text-gray-600")
                  }
                  to="/admin/tests"
                >
                  <i
    className={
        "fas fa-file-alt mr-2 text-sm " +
        (window.location.href.indexOf("/admin/tests") !== -1
            ? "opacity-75"
            : "text-gray-400")
    }
    />{" "}
                  Tests
                </Link>
              </li>


                <li className="items-center">
                    <Link
                        className={
                            "text-xs uppercase py-3 font-bold block " +
                            (window.location.href.indexOf("/admin/Elearning") !== -1
                                ? "text-blue-500 hover:text-blue-600"
                                : "text-gray-800 hover:text-gray-600")
                        }
                        to="/admin/Elearning"
                    >
                        <i
    className={
        "fas fa-file-alt mr-2 text-sm " +
        (window.location.href.indexOf("/admin/Elearning") !== -1
            ? "opacity-75"
            : "text-gray-400")
    }
    />{" "}
                        E-Learning
                    </Link>
                </li>



              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/jobs") !== -1
                      ? "text-blue-500 hover:text-blue-600"
                      : "text-gray-800 hover:text-gray-600")
                  }
                  to="/admin/jobs"
                >
                  <i
                    className={
                      "fas fa-suitcase mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/jobs") !== -1
                        ? "opacity-75"
                        : "text-gray-400")
                    }
                  ></i>{" "}
                  Jobs
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/tables") !== -1
                      ? "text-blue-500 hover:text-blue-600"
                      : "text-gray-800 hover:text-gray-600")
                  }
                  to="/admin/tables"
                >
                  <i
                    className={
                      "fas fa-bell mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/tables") !== -1
                        ? "opacity-75"
                        : "text-gray-400")
                    }
                  ></i>{" "}
                  Notification Center
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/maps") !== -1
                      ? "text-blue-500 hover:text-blue-600"
                      : "text-gray-800 hover:text-gray-600")
                  }
                  to="/admin/maps"
                >
                  <i
                    className={
                      "fas fa-calendar-alt mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/maps") !== -1
                        ? "opacity-75"
                        : "text-gray-400")
                    }
                  ></i>{" "}
                  Events
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/event") !== -1
                      ? "text-blue-500 hover:text-blue-600"
                      : "text-gray-800 hover:text-gray-600")
                  }
                  to="/admin/event"
                >
                  <i
                    className={
                      "fas fa-newspaper text-gray-500 mr-2 text-sm" +
                      (window.location.href.indexOf("/admin/event") !== -1
                        ? "opacity-75"
                        : "text-gray-400")
                    }
                  ></i>{" "}
                  Event Management
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Auth Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <img
                  alt="..."
                  src={require("assets/img/hrnavlogo.png")}
                  className="mx-auto"
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
