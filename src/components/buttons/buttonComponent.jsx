import React from "react";
import { Redirect } from "react-router-dom";

import { StyledButton } from "./styledButton";

const ButtonComponent = ({
  className,
  variant,
  handleClick,
  children,
  disabled,
  type,
  props,
}) => {
  return (
    <StyledButton
      className={`${className} w-25 d-block mx-auto`}
      variant={variant}
      onClick={handleClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default ButtonComponent;
