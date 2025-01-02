import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {Forms, LayoutContainer, LayoutImage} from "./form/Form.styled";
import {images} from "../../constant/index"
import {useSelector} from "react-redux";
function AuthLayout(props) {
  const { currentUser } = useSelector((state) => state.user);

  const isAuthenticated = currentUser;
  console.log(isAuthenticated)
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
       <>
         <LayoutContainer>
           <Forms>
             <Outlet />

             <LayoutImage
                src={images.authImage}
                alt="Layout Image"
             />
           </Forms>
         </LayoutContainer>
       </>
      )}
    </>
  );
}

export default AuthLayout;
