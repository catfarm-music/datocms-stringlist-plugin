import styled from "styled-components";
import { theme } from "styled-tools";

const StyledAddRowButton = styled.div`
  display: flex;
  width: fit-content;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.2s;
  user-select: none;
  padding: 6px 18px;
  font-weight: 500;
  font-size: 16px;

  background: ${theme("accentColor")};
  color: white;

  :hover {
    opacity: 0.8;
  }
`;

export const AddRowButton = ({ onAddRow }) => {
  return <StyledAddRowButton onClick={onAddRow}>Add new row</StyledAddRowButton>;
};
