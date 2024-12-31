import React from 'react';
import {Button, Form, FormHeading, Input, Label, IsLabCheckBox} from "../Form.styled";
import {Link} from "react-router-dom";
import useRegister from "./useRegister";

const Register = () => {

  const {
    handleSubmit,
    handleFormSubmit,
    register,
    errors,
    userMutation
  } = useRegister()


  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <FormHeading>Register</FormHeading>

      <Label>First Name</Label>
      <Input
        type="text"
        {...register('first_name', { required: 'First name is required' })}
      />
      {errors.first_name && <p>{errors.first_name.message}</p>}

      <Label>Last Name</Label>
      <Input
        type="text"
        {...register('last_name', { required: 'Last name is required' })}
      />
      {errors.last_name && <p>{errors.last_name.message}</p>}

      <Label>Email</Label>
      <Input
        type="email"
        {...register('email', { required: 'Email is required' })}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <Label>Password</Label>
      <Input
        type="password"
        {...register('password', { required: 'Password is required' })}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <Label>Password Confirmation</Label>
      <Input
        type="password"
        {...register('password_confirmation', { required: 'Password confirmation is required' })}
      />
      {errors.password_confirmation && <p>{errors.password_confirmation.message}</p>}

      <IsLabCheckBox>
        <Label>Are you a lab?</Label>
        <Input
          type="checkbox"
          {...register('is_lab')}
        />
      </IsLabCheckBox>

      <Button type="submit" disabled={userMutation.isLoading}>
        {userMutation.isLoading ? 'Registering...' : 'Register'}
      </Button>

      <Link to="/auth/login">Already have an account ? Login </Link>
    </Form>
  );
};

export default Register;
