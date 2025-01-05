import styled from "styled-components";
import {Link} from "react-router-dom";

export const UserProfileFormContainer = styled.div``

export const UserFormHeading = styled.h1`
  color: var(--primary-color);
  font-size: var(--medium-text);
  font-weight: 500;
  margin: 10px 0;
`

export const UserForm = styled.div`
  display: flex;
  flex-direction: column;
`

export const UserFormFieldGroup = styled.div`
    display: flex;
  gap: 20px;
`

export const UserFormField = styled.div`
  display: flex;
  flex-direction: column;

  label{
    font-size: var(--small-text);
  }

  input,
  select{
    padding: 12px;
    width: 300px;
    margin: 15px 0;
    border-radius: 10px;
    outline: none;
    border: 1px solid var(--black-color);
    font-size: var(--extra-small-text);
  }
`
export const ResetPassword = styled(Link)`
  width: 100px;
  background-color: var(--primary-color);
  color: var(--white-color);
  font-size: var(--extra-small-text);
  font-weight: bold;
  padding: 10px;
  border: none;
  border-radius: 10px;
  margin-left: 10px;
  cursor: pointer;
`
