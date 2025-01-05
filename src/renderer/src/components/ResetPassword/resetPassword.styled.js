import styled from "styled-components";

export const ResetPasswordContainer = styled.div``

export const ResetPasswordForm = styled.form`
    padding: 20px 0;
`

export const FormFieldGroup = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`

export const FormField = styled.div`
  display: flex;
  flex-direction: column;

  input{
    padding: 12px;
    width: 300px;
    margin: 15px 0;
    border-radius: 10px;
    outline: none;
    border: 1px solid var(--black-color);
    font-size: var(--extra-small-text);
  }
`
export const RestFormBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
`
