import React, { useState, useRef } from "react";
import CandidateProfile from "./CandidateProfile";
import HrCRUDService from "../../service/HRservice/crudservice";
export default function SearchCandidate(props) {
  const data = props.location.state.detail;
  const [candidates, setcandidates] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  React.useEffect(() => {
    HrCRUDService.searching(data).then((response) => {
      setisLoading(false);
      console.log("useeffff", response.data.Candidate);
      setcandidates(response.data.Candidate);
      console.log("useeffff", candidates);
    });
  }, [data]);

  return (
    <>
      {candidates.map((item) => (
        <CandidateProfile candidate={item} />
      ))}
    </>
  );
}
