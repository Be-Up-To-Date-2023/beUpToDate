import styled, { css } from "styled-components";
import { Button } from "react-bootstrap";

export const StyledButton = styled(Button)`

  &:disabled {
    background-color: #585858 !important;
    border-color: #585858 !important;
  }
`;
