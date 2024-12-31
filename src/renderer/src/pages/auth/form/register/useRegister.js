import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import axios from 'axios';
import apiUrl from "../../../../constant/apiUrl";
import { message } from "antd";
import {useNavigate} from "react-router-dom";

const useRegister = () => {
  const navigateTo = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const userMutation = useMutation(
    (userData) => axios.post(`${apiUrl.register}`, userData),
    {
      onSuccess: (data) => {
        console.log('User registered:', data);
        message.success("Registration Completed")
        navigateTo("/auth/login")
      },
      onError: (error) => {
        message.error(error.response || error.message);
        console.log(error.response || error.message);
      }
    }
  );

  const handleFormSubmit = (userData) => {
    const payload = {
      user: {
        ...userData,
        is_lab: userData.is_lab ? 1 : 0,
      }
    };

    userMutation.mutate(payload);
  };

  return{
    handleSubmit,
    handleFormSubmit,
    register,
    errors,
    userMutation
  }
}

export default useRegister
