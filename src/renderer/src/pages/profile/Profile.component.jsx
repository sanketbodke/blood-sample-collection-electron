import React from 'react';
import PagesHeading from "../../components/PagesHeading/PagesHeading.component";
import useProfile from "./useProfile";
import { Button } from "../auth/form/Form.styled";
import {
  ResetPassword,
  UserForm,
  UserFormField,
  UserFormFieldGroup,
  UserFormHeading,
  UserProfileFormContainer,
} from "./profile.styled";

const Profile = () => {
  const {
    user,
    handleSubmit,
    register,
    userMutation,
    formattedSubmitHandler
  } = useProfile();


  return (
    <UserProfileFormContainer>
      <PagesHeading heading="Profile" />
      <div>
        <form onSubmit={handleSubmit(formattedSubmitHandler)}>
          <UserFormHeading>User Details</UserFormHeading>

          {user?.role === "patient" ? (
            <UserForm>
              <UserFormFieldGroup>
                <UserFormField>
                  <label htmlFor="first_name">First Name</label>
                  <input
                    type="text"
                    id="first_name" {...register('first_name')}
                    defaultValue={user?.user?.first_name}
                  />
                </UserFormField>

                <UserFormField>
                  <label htmlFor="last_name">Last Name</label>
                  <input
                    type="text"
                    id="last_name" {...register('last_name')}
                    defaultValue={user?.user?.last_name}
                  />
                </UserFormField>

                <UserFormField>
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    {...register('phone')}
                    defaultValue={user?.user?.phone}
                  />
                </UserFormField>
              </UserFormFieldGroup>

              <UserFormFieldGroup>
                <UserFormField>
                  <label htmlFor="blood_group">Blood Group</label>
                  <select id="blood_group" {...register('blood_group')} defaultValue={user?.user?.blood_group}>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                </UserFormField>

                <UserFormField>
                  <label htmlFor="dob">DOB</label>
                  <input
                    type="date"
                    id="dob" {...register('dob')}
                    defaultValue={user?.user?.dob}
                  />
                </UserFormField>

                <UserFormField>
                  <label htmlFor="gender">Gender</label>
                  <select id="gender" {...register('gender')} defaultValue={user?.user?.gender}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </UserFormField>
              </UserFormFieldGroup>
            </UserForm>
          ) : (
            <UserForm>
              <UserFormFieldGroup>
                <UserFormField>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name" {...register('name')}
                    defaultValue={user?.user?.name}
                  />
                </UserFormField>
                <UserFormField>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email" {...register('email')}
                    defaultValue={user?.user?.email}
                  />
                </UserFormField>
                <UserFormField>
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    id="phone" {...register('phone')}
                    defaultValue={user?.user?.phone}
                  />
                </UserFormField>
              </UserFormFieldGroup>
            </UserForm>
          )}

          <UserFormHeading>Address Details</UserFormHeading>

          <UserFormFieldGroup>
            <UserFormField>
              <label htmlFor="street">Street</label>
              <input
                type="text"
                id="street" {...register('street')}
                defaultValue={user?.address?.street}
              />
            </UserFormField>

            <UserFormField>
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city" {...register('city')}
                defaultValue={user?.address?.city}
              />
            </UserFormField>

            <UserFormField>
              <label htmlFor="state">State</label>
              <input
                type="text"
                id="state" {...register('state')}
                defaultValue={user?.address?.state}
              />
            </UserFormField>
          </UserFormFieldGroup>

          <UserFormField>
            <label htmlFor="zip">Zip</label>
            <input
              type="text"
              id="zip" {...register('zip')}
              defaultValue={user?.address?.zip}
            />
          </UserFormField>

          <Button type="submit" disabled={userMutation.isLoading}>
            {userMutation.isLoading ? 'Updating....' : 'Update'}
          </Button>

          <ResetPassword to="/user/password/reset">
            Reset Password
          </ResetPassword>
        </form>
      </div>
    </UserProfileFormContainer>
  );
};

export default Profile;
