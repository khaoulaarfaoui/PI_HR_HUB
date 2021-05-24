import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { findallHrTestQuestion,deleteQuestion } from "../../Redux/actions/hrtest/hrtest";
import { forwardRef } from "react";

// components

import TableDropdownQuestion from "components/Dropdowns/HRDropDowns/TableDropdownQuestion";

const Question = (props) => {
  useEffect(() => {
    props.findallHrTestQuestion(localStorage.getItem("idTest"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const color = "light";

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <div
            className={
              "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
              (color === "light" ? "bg-white" : "bg-blue-900 text-white")
            }
          >
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3
                    className={
                      "font-semibold text-lg " +
                      (color === "light" ? "text-gray-800" : "text-white")
                    }
                  >
                    Card Question
                  </h3>

                  
                </div>
                <h3
                    className={
                      "font-semibold text-lg " +
                      (color === "light" ? "text-gray-800" : "text-white")
                    }
                  >
                    <button
                      className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();

                        window.location.href = "/admin/AddQuestion";
                      }}
                    >
                      Add Question
                    </button>{" "}
                  </h3>
              </div>
            </div>
            <div className="block w-full overflow-x-auto">
              {/* Projects table */}
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-gray-100 text-gray-600 border-gray-200"
                          : "bg-blue-800 text-blue-300 border-blue-700")
                      }
                    >
                      Question
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-gray-100 text-gray-600 border-gray-200"
                          : "bg-blue-800 text-blue-300 border-blue-700")
                      }
                    >
                      Titre
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-gray-100 text-gray-600 border-gray-200"
                          : "bg-blue-800 text-blue-300 border-blue-700")
                      }
                    >
                      Reponse
                    </th>

                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-gray-100 text-gray-600 border-gray-200"
                          : "bg-blue-800 text-blue-300 border-blue-700")
                      }
                    ></th>

                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-gray-100 text-gray-600 border-gray-200"
                          : "bg-blue-800 text-blue-300 border-blue-700")
                      }
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {console.log(
                    "propssss TestQuestionList ",
                    props.TestQuestionList
                  )}
                  {props.TestQuestionList.test.list.map((test, index) => {
                    return (
                      <Fragment key={index}>
                        <tr>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
                            {index + 1}
                            <span
                              className={
                                "ml-3 font-bold " +
                                +(color === "light"
                                  ? "text-gray-700"
                                  : "text-white")
                              }
                            ></span>
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                            {test.titre}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                            {test.response}
                          </td>

                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-right">
                          <Button
                              color="danger"
                              rounded
                              className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();

                              props.deleteQuestion(test._id) 
                              window.location.href = "/admin/question";
                              }}
                            >
                              Delete
                              </Button>{" "}{" "}

                              <Button
                              color="warning"
                              rounded
                              className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();

                                localStorage.setItem("idTest", test._id);
                                localStorage.setItem("Question", JSON.stringify(test));

                                window.location.href = "/admin/Updatequestion";
                              }}
                            >
                              Edit
                            </Button>{" "}
                          </td>

                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-right">
                            <TableDropdownQuestion />
                          </td>
                        </tr>
                      </Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  TestQuestionList: state.testReducers,
});

const mapActionToProps = {
  findallHrTestQuestion: findallHrTestQuestion,
  deleteQuestion:deleteQuestion
};

export default connect(mapStateToProps, mapActionToProps)(Question);


export const RoundedButtonPage = () => (
  <div className="space-x-1 mb-4 md:space-x-6 space-y-3">
    <Button color="primary" rounded>
      Primary
    </Button>
    <Button color="success" rounded>
      Success
    </Button>
    <Button color="danger" rounded>
      Danger
    </Button>
    <Button color="warning" rounded>
      Warning
    </Button>
    <Button rounded color="dark">
      Dark
    </Button>
    <Button color="indigo" rounded>
      Indigo
    </Button>
  </div>
);

const Button = forwardRef(({ color, rounded, children, ...props }, ref) => (
  <button
    {...props}
    ref={ref}
    className={`${colors[color]} ${
      rounded ? "rounded-full" : "rounded"
    } text-white focus:outline-none shadow px-6 py-2 font-medium transition ease-in duration-200`}
  >
    {children}
  </button>
));

/* You can replace those colors with your own*/
const colors = {
  primary: `bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:ring-offset-blue-100`,
  success: `bg-green-700 focus:ring-2 focus:ring-offset-2 focus:ring-green-700 focus:ring-offset-green-100`,
  danger: `bg-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-red-600 focus:ring-offset-red-100`,
  dark: `bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 focus:ring-offset-gray-100`,
  warning: `bg-yellow-500 focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 focus:ring-offset-yellow-100`,
  indigo: `bg-indigo-900 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-900 focus:ring-offset-indigo-100`,
};
