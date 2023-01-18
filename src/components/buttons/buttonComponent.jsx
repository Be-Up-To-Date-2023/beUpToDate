import React from "react";
import { Redirect } from "react-router-dom";

import { Button } from "react-bootstrap";

const ButtonComponent = ({
  className,
  variant,
  handleClick,
  children,
}) => {
  return (
    <Button
      className={`${className} w-25 d-block mx-auto`}
      variant={variant}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;
