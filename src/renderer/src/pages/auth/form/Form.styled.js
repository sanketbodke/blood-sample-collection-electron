import styled from "styled-components";
export const LayoutContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`

export const LayoutImage = styled.img`
    flex-basis: 50%;
    width: 550px;
    background-position: center;
    object-fit: cover;
`

export const Forms = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    background-color: var(--white-color);
    padding: 50px 80px;
    border-radius: 20px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    background-color: var(--white-color);
    width: 550px;
`

export const FormHeading = styled.h1`
    font-size: var(--large-heading);
    color: var(--primary-color);
    font-weight: bolder;
    background-color: var(--white-color);
`

export const Label = styled.label`
    font-size: var(--small-text);
    background-color: var(--white-color);
`

export const Input = styled.input`
    font-size: var(--small-text);
    padding: 10px;
    outline: none;
    border-radius: 5px;
    border: 1px solid var(--black-color);
    background-color: var(--white-color);

    &:focus {
        border-color: var(--primary-color);
    }
`

export const IsLabCheckBox = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const Button = styled.button`
    width: 100px;
    background-color: var(--primary-color);
    color: var(--white-color);
    font-weight: bold;
    padding: 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
`
