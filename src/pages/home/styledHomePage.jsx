import styled, { css } from "styled-components";

const baseStyle = css`
  width: 480px;
  margin: 0 auto;
  margin-top: 40px;
  padding: 15px;
`;

export const StyledParagraph = styled.p`
  color: var(--dark-color);
  box-shadow: var(--box-shadow3);
  font-size: var(--font-size-md);
  ${baseStyle};

  ${({ $setBackground }) =>
    $setBackground &&
    "background-color:var(--dark-color);color:var(--light-color)"}
`;
