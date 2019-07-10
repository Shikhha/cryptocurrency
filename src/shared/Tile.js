import styled from "styled-components";
import {
  subtleBoxShadow,
  lightBlueBackground,
  greenBoxShadow,
  redBoxShadow
} from "./Styles";

export const SelectableTile = styled.div`
  ${subtleBoxShadow}
  ${lightBlueBackground}
padding: 10px;
  &:hover {
    cursor: pointer;
    ${greenBoxShadow}
  }
`;

export const DeletableTile = styled(SelectableTile)`
  &:hover {
    cursor: pointer;
    ${redBoxShadow}
  }
`;

export const DisabledTile = styled.div`
  &:hover {
    cursor: pointer;
    ${greenBoxShadow}
  }
  pointer-events: none;
  opacity: 0.4;
`;
