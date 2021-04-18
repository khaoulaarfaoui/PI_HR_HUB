import React, { useState } from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { submitJob } from "Redux/actions/submittedJobs/submittedJob.action";

import { PieChart } from "react-minimal-pie-chart";
import Chart from "./Chart";
import { history } from "helpers/history";

class JobDetails extends Component {
  constructor(props) {
    super(props);
    var str = window.location.pathname;

    let id = str.slice(19);
    console.log(id);

    this.state = {
      _id: 0,
      title: "",
      description: "",
      salary: 0,
      requirement: "",

      black: true,
      disable: false,
      SUBMIT_JOB_URL: "http://localhost:8082/job/submit/",

      color:
        "bg-green-500  text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150",
    };

    console.log(id);
  }

  handleSubmit(e) {
    history.push(this.SUBMIT_JOB_URL);

    this.setState({ black: !this.state.black });
    this.setState({ disable: !this.state.disable });
    this.setState({ color: !this.state.color });
    e.preventDefault();

    this.props.onAdd(this.state);

    localStorage.setItem(
      "Applied Job" + this.state.title,
      JSON.stringify(this.state.title)
    );
  }
  componentWillMount() {
    const props = this.props;
    if (props.location && props.location.state) {
      const job = props.location.state.job;
      this.setState({
        _id: job._id,
        title: job.title,
        description: job.description,
        salary: job.salary,
        requirement: job.requirement,
      });
    }
  }

  render() {
    const job = this.props.job;

    let disabled = this.state.disable;

    let color = this.state.color
      ? " bg-green-500  text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
      : "bg-orange-500  text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150";
    let btn_class = this.state.black ? "Apply now" : "Processed";

    return (
      <>
        <div className="w-full  px-10">
          <div className="relative py-10 flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white  ">
            <div className="rounded-t bg-white mb-0 px-12 py-12">
              <img
                alt="..."
                src={require("assets/img/team-3-800x800.jpg")}
                className=" h-auto align-middle border-none absolute py-8 -m-16 -ml-20 lg:-ml-24 max-w-200-px"
              />
              <div className="text-center flex justify-start px-20  ">
                <h6 className="text-gray-800  text-3xl font-bold left-260-px ">
                  {this.state.title}
                </h6>
              </div>
              <div className="text-sm leading-normal px-20 py-4 text-gray-500 font-bold uppercase">
                <i className="fas fa-map-marker-alt  text-sm leading-normal   text-gray-500 font-bold uppercase  ">
                  {" "}
                </i>{" "}
                Los Angeles, California
                <i class="fas fa-money-bill-wave px-12"> 3000 dt</i>{" "}
                <button
                  type="button"
                  style={{ color: "white" }}
                  className={color}
                  onClick={this.handleSubmit.bind(this)}
                  disabled={disabled}
                >
                  {btn_class}
                </button>
              </div>

              <div className="mt-6 lg:mb-0 mb-6 py-22 px-40">
                <div className="text-sm leading-normal  py-4 text-gray-500 font-bold uppercase">
                  {" "}
                  Share this job{" "}
                </div>
                <button
                  className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-facebook-square"></i>
                </button>
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-dribbble"></i>
                </button>
                <button
                  className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-github"></i>
                </button>
              </div>
              <div className="text-sm leading-normal px-30 text-gray-500 font-bold uppercase"></div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-8/12 px-4">
            <div className="w-full  px-10">
              <div className="relative py-10 flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white  ">
                <h5 className="text-gray-800 py-4 px-12 text-2xl font-bold left-100-px ">
                  Description :
                </h5>{" "}
                <p className="mb-4 px-12 text-base leading-relaxed text-gray-800">
                  An artist of considerable range, Jenna the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy writes, performs
                  and records all of his own music, giving it a warm, intimate
                  feel with a solid groove structure. An artist of considerable
                  range. An artist of considerable range, Jenna the name taken
                  by Melbourne-raised, Brooklyn-based Nick Murphy writes,
                  performs and records all of his own music, giving it a warm,
                  intimate feel with a solid groove structure. An artist of
                  considerable range. An artist of considerable range, Jenna the
                  name taken by Melbourne-raised, Brooklyn-based Nick Murphy
                  writes, performs and records all of his own music, giving it a
                  warm, intimate feel with a solid groove structure. An artist
                  of considerable range. An artist of considerable range, Jenna
                  the name taken by Melbourne-raised, Brooklyn-based Nick Murphy
                  writes, performs and records all of his own music, giving it a
                  warm, intimate feel with a solid groove structure. An artist
                  of considerable range. An artist of considerable range, Jenna
                  the name taken by Melbourne-raised, Brooklyn-based Nick Murphy
                  writes, performs and records all of his own music, giving it a
                  warm, intimate feel with a solid groove structure. An artist
                  of considerable range. An artist of considerable range, Jenna
                  the name taken by Melbourne-raised, Brooklyn-based Nick Murphy
                  writes, performs and records all of his own music, giving it a
                  warm, intimate feel with a solid groove structure. An artist
                  of considerable range. An artist of considerable range, Jenna
                  the name taken by Melbourne-raised, Brooklyn-based Nick Murphy
                  writes, performs and records all of his own music, giving it a
                  warm, intimate feel with a solid groove structure. An artist
                  of considerable range.
                </p>
                <h5 className="text-gray-800 py-4 px-12 text-2xl font-bold left-100-px ">
                  Requirement :
                </h5>{" "}
                <p className="mb-4 px-12 text-base leading-relaxed text-gray-800">
                  An artist of considerable range, Jenna the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy writes, performs
                  and records all of his own music, giving it a warm, intimate
                  feel with a solid groove structure. An artist of considerable
                  range. An artist of considerable range, Jenna the name taken
                  by Melbourne-raised, Brooklyn-based Nick Murphy writes,
                  performs and records all of his own music, giving it a warm,
                  intimate feel with a solid groove structure. An artist of
                  considerable range. An artist of considerable range, Jenna the
                  name taken by Melbourne-raised, Brooklyn-based Nick Murphy
                  writes, performs and records all of his own music, giving it a
                  warm, intimate feel with a solid groove structure. An artist
                  of considerable range. An artist of considerable range, Jenna
                  the name taken by Melbourne-raised, Brooklyn-based Nick Murphy
                  writes, performs and records all of his own music, giving it a
                  warm, intimate feel with a solid groove structure. An artist
                  of considerable range. An artist of considerable range, Jenna
                  the name taken by Melbourne-raised, Brooklyn-based Nick Murphy
                  writes, performs and records all of his own music, giving it a
                  warm, intimate feel with a solid groove structure. An artist
                  of considerable range. An artist of considerable range, Jenna
                  the name taken by Melbourne-raised, Brooklyn-based Nick Murphy
                  writes, performs and records all of his own music, giving it a
                  warm, intimate feel with a solid groove structure. An artist
                  of considerable range. An artist of considerable range, Jenna
                  the name taken by Melbourne-raised, Brooklyn-based Nick Murphy
                  writes, performs and records all of his own music, giving it a
                  warm, intimate feel with a solid groove structure. An artist
                  of considerable range.
                </p>
              </div>
              <div></div>
            </div>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <Chart />
          </div>
        </div>
        ;
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;

  return {
    job: state.jobDetailData.jobDetail || [],
    error: state.jobDetailData.error || null,
    isLoading: state.jobDetailData.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (job) => {
      dispatch(submitJob(job));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobDetails);
