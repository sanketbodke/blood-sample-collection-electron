import React from "react";
import BackPageButton from "../BackPageButton/BackPageButton.component";
import PagesHeading from "../PagesHeading/PagesHeading.component";
import {
  FormField,
  FormFieldGroup,
  ResetPasswordContainer,
  ResetPasswordForm,
  RestFormBtn
} from "./resetPassword.styled";
import useResetPassword from "./useRestPassword";
import { Button } from "antd";

const ResetPassword = () => {
  const {
    requestOtpMutation,
    changePasswordMutation,
    onRequestOtp,
    onChangePassword,
    register,
    handleSubmit,
  } = useResetPassword();

  return (
    <ResetPasswordContainer>
      <PagesHeading heading="Reset Password" />
      <BackPageButton backLink="/user/profile" />

      <ResetPasswordForm onSubmit={handleSubmit(onChangePassword)}>
        <FormFieldGroup>
          <FormField>
            <label htmlFor="otp_code">OTP Code</label>
            <input
              id="otp_code"
              type="text"
              {...register("otp_code", {required: "OTP Code is required"})}
            />
          </FormField>

          <FormField>
            <label htmlFor="current_password">Current Password</label>
            <input
              id="current_password"
              type="password"
              {...register("current_password", {required: "Current password is required"})}
            />
          </FormField>

          <FormField>
            <label htmlFor="new_password">New Password</label>
            <input
              id="new_password"
              type="password"
              {...register("new_password", {required: "New password is required"})}
            />
          </FormField>

          <FormField>
            <label htmlFor="confirm_new_password">Confirm New Password</label>
            <input
              id="confirm_new_password"
              type="password"
              {...register("confirm_new_password", {required: "Confirm password is required"})}
            />
          </FormField>
        </FormFieldGroup>

        <RestFormBtn>
          <Button
            type="primary"
            onClick={onRequestOtp}
            loading={requestOtpMutation.isLoading}
          >
            Request OTP
          </Button>

          <Button
            type="primary"
            htmlType="submit"
            loading={changePasswordMutation.isLoading}
          >
            Change Password
          </Button>
        </RestFormBtn>
      </ResetPasswordForm>
    </ResetPasswordContainer>
  );
};

export default ResetPassword;
