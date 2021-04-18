import React from "react";

const Job = ({ job, onEdit, onDelete }) => {
  return (
    <>
      <div class=" relative xl:w-4/12 py-10  px-4 rounded overflow-hidden shadow-lg">
        <img
          class="w-full"
          src="https://tailwindcss-v0.netlify.app//img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{job.title}</div>
          <p class="text-grey-darker text-base">{job.description}</p>
        </div>
        <div class="px-6 py-4">
          <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
            {job.requirement}
          </span>
          <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
            {job.salary}
          </span>
          <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">
            {job.date}{" "}
          </span>
        </div>
        <button
          className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => onEdit(job)}
        >
          Edit
        </button>

        <button
          className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => onDelete(job._id)}
          key={job._id}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Job;
