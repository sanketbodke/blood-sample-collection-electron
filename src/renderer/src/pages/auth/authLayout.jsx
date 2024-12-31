import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {Forms, LayoutContainer, LayoutImage} from "./form/Form.styled";
import {images} from "../../constant/index"
function AuthLayout(props) {
  // const currentUser = false
  const isAuthenticated = false;
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
