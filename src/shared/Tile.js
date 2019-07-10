import styled from "styled-components";
import { subtleBoxShadow, lightBlueBackground, greenBoxShadow } from "./Styles";

export const SelectableTile = styled.div`
  ${subtleBoxShadow}
  ${lightBlueBackground}
padding: 10px;
  &:hover {
    cursor: pointer;
    ${greenBoxShadow}
  }
`;
