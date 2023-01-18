import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";

import ButtonComponent from "../../components/buttons/buttonComponent";

import { ROUTES_HOME_PAGE } from "../../routes/routes";

const SearchPage = () => {
  let navigate = useNavigate();
  return (
    <Container>
      <h1 className="fs-1 text-center"> search</h1>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <ButtonComponent className="mx-auto" variant="success">
          search
        </ButtonComponent>
      </Form>
      <ButtonComponent
        variant="warning"
        className="mt-5"
        handleClick={() => {
          navigate(`${ROUTES_HOME_PAGE}`);
        }}
      >
        go to home page
        <ArrowLeft color="black" size={20} className="mx-2"/>
      </ButtonComponent>
    </Container>
  );
};

export default SearchPage;
