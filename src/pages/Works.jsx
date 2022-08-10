import React from "react";
// import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import study from '../Data/Study';

const Work = () => {
//   const url = useParams();

  return (
    <>
      <h1>Au fil des années, nous avons pu accompagner les meilleurs.</h1>
      <p>
        Découvrez pas à pas comment nous avons été présents pour lancer vos
        marques préférées.
      </p>
      <div>
          {
           study.map((data) => (
              <Link to={data.slug}> <h3>{data.title}</h3> </Link>
           ))
        }
      </div>
    </>
  );
};

export default Work;
