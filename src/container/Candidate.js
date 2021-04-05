import React, { Component } from "react";

import PropTypes from "prop-types";
import candidate from "./Candidate";
import { connect } from "react-redux";
import { history } from "helpers/history";

import { deleteCandidate } from "Redux/actions/candidate.actions";
import { fetchCandidate } from "Redux/actions/candidate.actions";
import Pagination from "react-js-pagination";

// components

class Candidate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
    };
  }
  onChange = (e) => {
    this.setState({ search: e.target.value });
  };
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }
  handleEdit(candidate) {
    history.push({
      pathname: `/admin/edit/${candidate._id}`,
      state: {
        candidate: candidate,
      },
    });
  }

  render() {
    if (this.props.isLoading) {
      return <p>Loading ...</p>;
    } else if (this.props.error) {
      return (
        <div
          class="bg-red-lightest border border-red-light text-red-dark pl-4 pr-8 py-3 rounded relative"
          role="alert"
        >
          <strong class="font-bold">Error!</strong>
          <span class="block sm:inline">
            Something seriously went wrong.
            {this.props.error.message}
          </span>
          <span class="absolute pin-t pin-b pin-r pr-2 py-3">
            <svg
              class="h-6 w-6 text-red"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      );
    } else {
      return (
        <>
          <input
            type="text"
            onChange={this.onChange}
            placeholder="Search here..."
            className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
          />
          {this.props.candidate.map((candidate) => {
            const { search } = this.state;

            if (
              search !== "" &&
                candidate.FullName.toLowerCase().indexOf(search.toLocaleLowerCase()) === -1
            ) {
              return null;
            }

            return (
              <>
                <Candidate
                  key={candidate._id}
                  candidate={candidate}
                  onEdit={this.handleEdit.bind(this)}
                  onDelete={this.props.onDelete}
                />
              </>
            );
          })}
          <div></div>
        </>
      );
    }
  }
}
Candidate.defaultProps = {
  color: "light",
};

Candidate.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
const mapStateToProps = (state) => {
  return {
    Candidate: state.candidateData.Candidate || [],
    error: state.candidateData.error || null,
    isLoading: state.candidateData.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (id) => {
      dispatch(deleteCandidate(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Candidate);
