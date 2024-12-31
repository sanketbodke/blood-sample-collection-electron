import React from 'react';
import { Button, Form, FormHeading, Input, Label } from "../Form.styled";
import { Link } from "react-router-dom";
import useLogin from "./useLogin";

const Login = () => {

  const {
    handleSubmit,
    handleFormSubmit,
    register,
    errors,
    userMutation,
  } = useLogin()

  return (
    <div>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <FormHeading>Login</FormHeading>
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

        <Button type="submit" disabled={userMutation.isLoading}>
          {userMutation.isLoading ? 'Logging in...' : 'Login'}
        </Button>

        <Link to="/auth/register">Don't have an account ? Register </Link>
      </Form>
    </div>
  );
};

export default Login;
