import { useEffect, useState } from "react";

import styled from "styled-components";
import { theme } from "styled-tools";
import TextareaAutosize from "react-textarea-autosize";

import { Icon } from "components/Icon";

const StyledRowItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;

  & > textarea {
    width: 100%;
    border: none;
    outline: none;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 12px;
    resize: none;
    background: ${theme("semiTransparentAccentColor")};
  }

  & > div:last-child {
    display: flex;
    gap: 1rem;
  }

  & + & {
    border-top: 1px solid ${theme("lightColor")};
  }
`;

const StyledIconButton = styled.div`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  background: ${theme("lightColor")};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity 0.2s;
  user-select: none;

  :hover {
    opacity: 0.8;
  }
`;

export const RowItem = ({ value: defaultValue, onUpdateRow, onRemoveRow, onMoveRow }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    if (value === defaultValue) return;
    onUpdateRow(value);
  };

  return (
    <StyledRowItem>
      <TextareaAutosize defaultValue={defaultValue} onChange={handleChange} />
      <div>
        <StyledIconButton onClick={onMoveRow(-1)}>
          <Icon icon="chevron--up" size={24} />
        </StyledIconButton>
        <StyledIconButton onClick={onMoveRow(1)}>
          <Icon icon="chevron--down" size={24} />
        </StyledIconButton>
        <StyledIconButton onClick={onRemoveRow}>
          <Icon icon="trash-can" size={24} />
        </StyledIconButton>
      </div>
    </StyledRowItem>
  );
};
