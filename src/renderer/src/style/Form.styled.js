import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`
export const FormHeading = styled.h1`
  color: var(--primary-color);
  font-size: var(--large-text);
  font-weight: 500;
  margin: 30px 0;
`

export const FormFiledGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`
export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;

  input{
    width: 300px;
    padding: 10px 5px;
    border-radius: 5px;
    outline: none;
    border: 1px solid var(--black-color);
  }
`
export const FormSubmitButton = styled.button`
  background-color: var(--primary-color);
  padding: 10px 20px;
  color: var(--white-color);
  border-radius: 5px;
  width: 150px;
  margin-top: 10px;
  cursor: pointer;
`
