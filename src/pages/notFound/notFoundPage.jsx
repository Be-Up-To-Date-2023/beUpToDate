import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";

import notFound from "../../images/not-found.png";

import ButtonComponent from "../../components/buttons/buttonComponent";
import { ROUTES_HOME_PAGE } from "../../routes/routes";

const NotFoundPage = () => {
  let navigate = useNavigate();
  return (
    <div>
      <img
        src={notFound}
        alt="Not Found"
        className="img-fluid d-block mx-auto"
      />
      <ButtonComponent
        variant="danger"
        className="mt-5"
        handleClick={() => {
          navigate(`${ROUTES_HOME_PAGE}`);
        }}
      >
        go back to home page
        <ArrowLeft color="white" size={20} className="mx-2" />
      </ButtonComponent>
    </div>
  );
};

export default NotFoundPage;
