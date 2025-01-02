import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import axios from 'axios';
import apiUrl from "../../../../constant/apiUrl";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import {logInStart, logInFailure, logInSuccess} from "../../../../redux/user/userSlice"

const useLogin = () => {
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [_, setCookies] = useCookies(["access_token"]);

  const userMutation = useMutation(
    (userData) => axios.post(`${apiUrl.login}`, userData),

    {
      onSuccess: (data) => {
        console.log('Login Success:', data);

        dispatch(logInSuccess(data.data))

        const { token, user } = data.data;

        message.success("Login Successfully");
        navigateTo("/");
        dispatch(logInFailure)
      },
      onError: (error) => {
        lo
        message.error(error.response || error.message);
        console.error(error.response || error.message);
      },
    }
  );

  const handleFormSubmit = (userData) => {
    dispatch(logInStart())
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
