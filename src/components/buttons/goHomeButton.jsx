import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from "react-bootstrap-icons";
import { ROUTES_HOME_PAGE } from "../../routes/routes"

const GoHomeButton = () => {
    let navigate = useNavigate();
  return (
    <button
    className="btn btn-primary mx-auto"
    variant="warning"
    onClick={() => {
      navigate(`${ROUTES_HOME_PAGE}`);
    }}
  >
    go to home page
    <ArrowLeft color="black" size={20} className="mx-2"/>
  </button>
  )
}

export default GoHomeButton