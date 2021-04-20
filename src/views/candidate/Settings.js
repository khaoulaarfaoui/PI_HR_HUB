import React from "react";
import { Link } from "react-router-dom";
import CardSettings from "components/Cards/CardsCandidate/CardSettings.js";
import CardProfile from "components/Cards/CardsCandidate/CardProfile.js";

export default function Settings() {
  const Jumbotron = ({ className, children }) => (
    <div
      className={`${className} shadow-lg border font-light border-solid rounded-sm py-1 px-4 mb-0
      `}
    >
      {children}
    </div>
  );
  return (
    <>
      <div className="container">
        <Jumbotron className="text-white bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
          <p className="mb-0">
            HR HUB provide for you our online CV builder tool. Try it, it's for
            Simple, Straight-forward and Free!
          </p>

          <Link
            className="text-sm px-6 py-1 mt-4 text-white active:bg-yellow-500 focus:outline-none border-solid border"
            to="/resume"
          >
            CV online builder
          </Link>
        </Jumbotron>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </>
  );
}
