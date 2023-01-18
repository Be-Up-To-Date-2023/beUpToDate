import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "react-bootstrap-icons";

import { ROUTES_SEARCH_PAGE } from "../../routes/routes";

import ButtonComponent from "../../components/buttons/buttonComponent";
import HeaderComponent from "../../components/header/headerComponent";
import { StyledParagraph } from "./styledHomePage";

const HomePage = () => {
  let navigate = useNavigate();
  const [background, setBackground] = useState(false);
  return (
    <div>
      <HeaderComponent />
      <h1 className="fs-1 text-center text-primary_dark"> HomePage</h1>
      <ButtonComponent
        variant="warning"
        className="mt-5"
        handleClick={() => {
          navigate(`${ROUTES_SEARCH_PAGE}`);
        }}
      >
        go to search page
        <ArrowRight color="black" size={20} className="mx-2" />
      </ButtonComponent>
      <StyledParagraph $setBackground={background}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere dolores
        voluptatibus nisi necessitatibus deserunt incidunt dicta aspernatur
        perspiciatis enim quia nemo totam, impedit quo consectetur magni sit
        tempora labore neque.
      </StyledParagraph>
      <ButtonComponent
        className="mt-5 backgr-dark border-danger"
        handleClick={() => setBackground((background) => !background)}
      >
        toggle paragraph background
      </ButtonComponent>
    </div>
  );
};

export default HomePage;
