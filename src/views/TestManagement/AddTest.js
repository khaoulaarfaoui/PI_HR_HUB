import React, { useEffect } from "react";
import useForm from "./useForm";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import {UpdateTest, CreateTest} from "../../Redux/actions/CandidateTest/CandidateAction";
import { connect } from "react-redux";
import ButterToast, { Cinnamon } from "butter-toast";
//import { AssignmentTurnedIn } from "@material-ui/icons";

const initialFieldValues = {
  title: "",
  description: "",
  type: "",
  tags: "",
  result: "",
  startDate: "",
  endDate: "",
};

const AddTest = ({ ...props }) => {
  useEffect(() => {
    if (props.currentId != 0) {
      setValues({
        ...props.TestList.find((x) => x._id == props.currentId),
      });
      setErrors({});
    }
  }, [props.currentId]);

  const validate = () => {
    let temp = { ...errors };
    temp.title = values.title ? "" : "This field is required.";
    temp.description = values.description ? "" : "This field is required.";
    temp.type = values.type ? "" : "This field is required.";
    temp.tags = values.tags ? "" : "This field is required.";
    temp.result = values.result ? "" : "This field is required.";
    temp.startDate = values.startDate ? "" : "This field is required.";
    temp.endDate = values.endDate ? "" : "This field is required.";
    setErrors({
      ...temp,
    });

    return Object.values(temp).every((x) => x === "");
  };

  var {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  } = useForm(initialFieldValues, props.setCurrentId);

  const handleSubmit = (e) => {
    e.preventDefault();
    const onSuccess = () => {
      ButterToast.raise({
        content: (
          <Cinnamon.Crisp
            title="Test Notification"
            content="Submitted successfully"
            scheme={Cinnamon.Crisp.SCHEME_PURPLE}
            //icon={<AssignmentTurnedIn />}
          />
        ),
      });
      resetForm();
    };
    if (validate()) {
     
      if (props.currentId == 0) props.CreateTest(values, onSuccess);
      else props.UpdateTest(props.currentId, values, onSuccess);
    }
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-gray-800 text-xl font-bold">
              Add & Edit Tests
            </h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <br></br>
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Test title
                  </label>
                  <input
                    type="text"
                    name="eventName"
                    value={values.title}
                    onChange={handleInputChange}
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>


              <div className="w-full lg:w-6/12 px-4">
                <br></br>
                <div className="relative w-full mb-3">
                  <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                  >
                    Test tags
                  </label>
                  <input
                      type="text"
                      name="testDate"
                      value={values.tags}
                      onChange={handleInputChange}
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <br></br>
                <div className="relative w-full mb-3">
                  <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                  >
                    Test result
                  </label>
                  <input
                      type="text"
                      name="eventDate"
                      value={values.result}
                      onChange={handleInputChange}
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>

              <div className="w-full lg:w-6/12 px-4">
                <br></br>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Test description
                  </label>
                  <input
                    type="text"
                    name="eventDate"
                    value={values.description}
                    onChange={handleInputChange}
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>


              <div className="w-full lg:w-6/12 px-4">
                <br></br>
                <div className="relative w-full mb-3">
                  <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                  >
                    Test startDate
                  </label>
                  <input
                      type="date"
                      name="eventDate"
                      value={values.startDate}
                      onChange={handleInputChange}
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <br></br>
                <div className="relative w-full mb-3">
                  <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                  >
                    Test endDate
                  </label>
                  <input
                      type="date"
                      name="eventDate"
                      value={values.endDate}
                      onChange={handleInputChange}
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>

            </div>

            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Test type
                  </label>
                  <textarea
                    type="text"
                    name="description"
                    value={values.type}
                    onChange={handleInputChange}
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="text-center mt-6">
              <button
                type="submit"
                className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  TestList: state.eventsReducer.list,
});

const mapActionToProps = {
  CreateTest: CreateTest,
  UpdateTest: UpdateTest,
};

export default connect(mapStateToProps, mapActionToProps)(AddTest);
