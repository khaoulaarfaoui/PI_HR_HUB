import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { AddQuestion } from "../../Redux/actions/hrtest/hrtest";

export default function HR() {
  const form = useRef();
  const history = useHistory();

  const checkBtn = useRef();
  //const { user: currentUser } = useSelector((state) => state.userReducer.auth);
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [user, setUser] = useState(localStorage.getItem("idTest"));
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUser = (e) => {
    const user = e.target.value;
    setUser(user);
  };
  const onChangeQuestion = (e) => {
    const Question = e.target.value;
    setQuestion(Question);
  };
  const onChangeResponse = (e) => {
    const Response = e.target.value;
    setResponse(Response);
  };

  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

   form.current.validateAll();
     console.log("obj", localStorage.getItem("idTest"),
     question,
     response)
    dispatch(
      AddQuestion(
        localStorage.getItem("idTest"),
        question,
        response
      )
    ).then(
      (response) => {
        setMessage(response.data.message);
        setSuccessful(true);
      },
      (error) => {
        setSuccessful(false);
      }
    );

   history.push("/admin/question");
   window.location.reload();
  };
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-gray-600 text-sm font-bold"></h6>
                </div>

                <hr className="mt-6 border-b-1 border-gray-400" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-gray-500 text-center mb-3 font-bold">
                  <small>Add Test</small>
                </div>
                <Form onSubmit={handleRegister} ref={form}>
                  {!successful && (
                    <div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Test
                        </label>
                        <Input
                          type="text"
                          name="user"
                          disabled={true}
                          value={localStorage.getItem("idTest")}
                          onChange={onChangeUser}
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          placeholder="Full Name"
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Question
                        </label>
                        <Input
                          type="text"
                          name="Question"
                          value={question}
                          onChange={onChangeQuestion}
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          placeholder="Question"
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Response
                        </label>
                        <Input
                          type="text"
                          name="response"
                          onChange={onChangeResponse}
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          placeholder="response"
                        />
                      </div>

                      <div>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            id="customCheckLogin"
                            type="checkbox"
                            className="form-checkbox text-gray-800 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                          />
                          <span className="ml-2 text-sm font-semibold text-gray-700">
                            I agree with the{" "}
                            <a
                              href="#pablo"
                              className="text-blue-500"
                              onClick={(e) => e.preventDefault()}
                            >
                              Privacy Policy
                            </a>
                          </span>
                        </label>
                      </div>

                      <div className="text-center mt-6">
                        <button className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150">
                          Add Question
                        </button>
                      </div>
                    </div>
                  )}

                  {message && (
                    <div className="form-group">
                      <div
                        className={
                          successful
                            ? "alert alert-success"
                            : "alert alert-danger"
                        }
                        role="alert"
                      >
                        {message}
                      </div>
                    </div>
                  )}
                  <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
