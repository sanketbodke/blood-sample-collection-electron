import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import axios from 'axios';
import apiUrl from "../../../../constant/apiUrl";
import { message } from "antd";
import { useNavigate } from "react-router-dom";


const useLogin = () => {
  const navigateTo = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const userMutation = useMutation(
    (userData) => axios.post(`${apiUrl.login}`, userData),
    {
      onSuccess: (data) => {
        console.log('Login Success:', data);

        const { token, user } = data.data;

        message.success("Login Successfully");
        navigateTo("/");
      },
      onError: (error) => {
        message.error(error.response || error.message);
        console.error(error.response || error.message);
      },
    }
  );

  const handleFormSubmit = (userData) => {
    userMutation.mutate(userData);
  };

  return{
    handleSubmit,
    handleFormSubmit,
    register,
    errors,
    userMutation,
    navigateTo
  }
}

export default useLogin
