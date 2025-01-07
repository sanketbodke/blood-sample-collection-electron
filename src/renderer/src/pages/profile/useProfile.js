import currentUser from "../../utils/user";
import { useMutation } from 'react-query';
import axios from 'axios';
import apiUrl from "../../constant/apiUrl";
import { message } from "antd";
import useLogin from "../auth/form/login/useLogin";

const useProfile = () => {
  const { user } = currentUser();

  const {
    register,
    handleSubmit,
  } = useLogin();

  const userMutation = useMutation(
    (userData) => {
      const apiUrlToUse = user?.role === 'lab'
        ? `${apiUrl.updateLab.replace(':id', user.user.id)}`
        : `${apiUrl.updateUser.replace(':id', user.user.id)}`;

      return axios.put(apiUrlToUse, userData, {
        headers: {
          Authorization: `Bearer ${user?.token}`
        }
      });
    },
    {
      onSuccess: (data) => {
        console.log("Details updated", data);
        message.success("Profile Updated");
      },
      onError: (error) => {
        console.log(error)
        const errorMessage = error?.response?.data?.message || "An error occurred";
        message.error(errorMessage);
        console.log("Error occurred:", errorMessage);
      },
    }
  );

  const handleFormSubmit = (userData) => {
    userMutation.mutate(userData);
  };

  const formattedSubmitHandler = (data) => {
    const payload = user.role === "patient"
      ? {
        user: {
          ...data,
          address_attributes: {
            street: data.street,
            city: data.city,
            state: data.state,
            zip: data.zip,
          },
        },
      }
      : {
        lab: {
          ...data,
          address_attributes: {
            street: data.street,
            city: data.city,
            state: data.state,
            zip: data.zip,
          },
        },
      };

    handleFormSubmit(payload);
  };

  return {
    user,
    handleSubmit,
    handleFormSubmit,
    register,
    userMutation,
    formattedSubmitHandler
  };
};

export default useProfile;
