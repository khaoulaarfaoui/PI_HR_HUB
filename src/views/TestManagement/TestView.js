import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import { AllTests, DeleteTest, UpdateTest, CreateTest } from "../../Redux/actions/CandidateTest/CandidateAction";
import AdminNavbar from "../../components/Navbars/AdminNavbar.js";
import AddTest from "./AddTest";
import ButterToast, { Cinnamon } from "butter-toast";


const ViewTest = (props) => {
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    props.fetchAllTests();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDelete = (id) => {
    const onSuccess = () => {
      ButterToast.raise({
        content: (
          <Cinnamon.Crisp
            title="Delete Notification"
            content="Deleted successfully"
            scheme={Cinnamon.Crisp.SCHEME_PURPLE}
            //icon={<DeleteSweep />}
          />
        ),
      });
    };
    if (window.confirm("Are you sure to delete this Test ?"))
    props.deleteTests(id, onSuccess);
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-gray-800">
                  TEST TABLE
                  </h3>
                </div>
              </div>
            </div>
            <div className="block w-full overflow-x-auto">
              {/* Projects table */}
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                    title
                    </th>
                    <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                    Type
                    </th>
                    <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                    Description
                    </th>
                    <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                    Result
                    </th>
                    <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                    Start Date
                    </th>
                    <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                    End Date
                    </th>
                    

                    <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"></th>
                    <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"></th>
                  </tr>
                </thead>
                <tbody>
                  {props.TestsList.map((test, index) => {
                    return (
                      <Fragment key={index}>
                        <tr>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                            {test.title}{" "}
                          </th>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                          {test.type}{" "}
                          </th>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                          {test.description}{" "}
                          </th>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                          {test.result}{" "}
                          </th>
                          
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                          {test.startDate.substring(0, 10)}{" "}
                          </th>
                          
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                          {test.endDate.substring(0, 10)}{" "}
                          </th>
                          
                          

                          
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                            <button
                              className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setCurrentId(test._id)}
                            >
                              Edit
                            </button>{" "}
                          </th>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                            <button
                              className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => onDelete(test._id)}
                            >
                              Delete
                            </button>{" "}
                          </th>
                        </tr>
                      </Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-4/12 px-4">
          <AddTest {...{ currentId, setCurrentId }} />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  TestsList: state.TestReducers.list,
});



const mapActionToProps = {
  fetchAllTests: AllTests,
  deleteTests: DeleteTest,
};

export default connect(mapStateToProps, mapActionToProps)(ViewTest);
