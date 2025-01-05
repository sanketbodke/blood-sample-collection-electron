import { useMutation } from "react-query";
import axios from "axios";
import { message } from "antd";
import apiUrl from "../../constant/apiUrl";
import currentUser from "../../utils/user";
import { useForm } from "react-hook-form";

const useResetPassword = () => {
  const { user } = currentUser();
  const {
    register,
    handleSubmit,
    reset } = useForm();

  const requestOtpMutation = useMutation(
    () =>
      axios.post(
        apiUrl.otpRequest.replace(":id", user?.user?.id),
        {},
        {
          headers: { Authorization: `Bearer ${user?.token}` },
        }
      ),
    {
      onSuccess: () => {
        message.success("OTP requested successfully!");
      },
      onError: (error) => {
        const errorMessage =  error?.response?.data?.message || "Failed to request OTP";
        message.error(errorMessage);
      },
    }
  );

  const changePasswordMutation = useMutation(
    (data) =>
      axios.patch(
        apiUrl.resetPassword.replace(":id", user?.user?.id),
        {
          otp_code: data.otp_code,
          current_password: data.current_password,
          new_password: data.new_password,
          confirm_new_password: data.confirm_new_password,
        },
        {
          headers: { Authorization: `Bearer ${user?.token}` },
        }
      ),
    {
      onSuccess: () => {
        message.success("Password changed successfully!");
        reset();
      },
      onError: (error) => {
        const errorMessage =  error?.response?.data?.message || "Failed to change password";
        message.error(errorMessage);
      },
    }
  );

  const onRequestOtp = () => {
    if (!user?.user?.id || !user?.token) {
      message.error("User is not authenticated");
      return;
    }
    requestOtpMutation.mutate();
  };

  const onChangePassword = (data) => {
    console.log(data)
    changePasswordMutation.mutate(data);
  };

  return {
    requestOtpMutation,
    changePasswordMutation,
    onRequestOtp,
    onChangePassword,
    register,
    handleSubmit,
    reset,
  };
};

export default useResetPassword;
