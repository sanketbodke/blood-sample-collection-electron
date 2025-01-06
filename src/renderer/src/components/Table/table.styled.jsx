import styled from "styled-components";

export const TableContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const TableStyle = styled.table`
  border-collapse: collapse;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin: 40px 0;
`
export const TableHeader = styled.th`
  background-color: var(--primary-color);
  color: var(--white-color);
  padding: 10px;
  font-size: var(--small-text);
`

export const TableRow = styled.tr`
  padding: 10px;
  text-align: left;
  font-size: var(--small-text);
`
export const SearchAndButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin: 30px 0 -10px 0;

  input{
    padding: 10px;
    border-radius: 5px;
    border: 1px solid var(--black-color);
    width: 100%;
  }

  button{
    background-color: var(--primary-color);
    padding: 12px 20px;
    border-radius: 5px;
    color: var(--white-color);
    font-weight: bold;
    cursor: pointer;
    width: 150px;
  }
`
export const ActionButton = styled.td`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: var(--medium-text);
`
