import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import study from "../../Data/Study";

const StudyCase = () => {
  const { studySlug } = useParams();

  const [currentStudy, setCurrentStudy] = useState(undefined);

  useEffect(() => {
    const foundStudy = study.find((stu) => stu.slug === studySlug);
    setCurrentStudy(foundStudy);
  }, [studySlug]);

  const showStudy = () => {
    return (
      <>
        <div>
          <div className="card-body flex flex-col mt-2 text-center">
            <h3>{currentStudy.slug}</h3>
            <p>{currentStudy.description}</p>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      {currentStudy !== undefined ? showStudy() : console.log("error")}
    </div>
  );
};

export default StudyCase;
