import styled from 'styled-components'

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 200px;
  padding: 12px;
  font-family: monospace;
  font-size: 13px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #1976d2;
    box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.2);
  }
`
