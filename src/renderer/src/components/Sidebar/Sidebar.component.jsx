import React from 'react';
import {
  LogOutContainer,
  MenuItem,
  MenuItems,
  MenuItemsContainer,
  SidebarContainer,
  SidebarDetailsContainer,
  UserDashboardDetails,
  UserLogo,
  UserProfile
} from "./sidebar.styled";
import useSidebar from "./useSidebar";
import {Link} from "react-router-dom";
const Sidebar= () => {
  const {
    userProfileDetails,
    logout
  } = useSidebar()

  return (
    <SidebarContainer>
      <SidebarDetailsContainer>
        <Link to="user/profile">
          <UserProfile>
            <UserLogo>
              { userProfileDetails.first_name[0].toUpperCase() +
                userProfileDetails.last_name[0].toUpperCase() }
            </UserLogo>
            <UserDashboardDetails>
              <p>
                {userProfileDetails.first_name + " "
                  + userProfileDetails.last_name}
              </p>
              <p>{userProfileDetails.role}</p>
            </UserDashboardDetails>
          </UserProfile>
        </Link>
        <MenuItemsContainer>
          <MenuItems>
            {userProfileDetails.role === "patient" ? (
              <>
                <MenuItem><Link to="/">Schedule Appointment</Link></MenuItem>
                <MenuItem><Link to="/">Service Map</Link></MenuItem>
                <MenuItem><Link to="/">Contact Us</Link></MenuItem>
              </>
            ) : (
              <>
                <MenuItem><Link to="/">Patient Samples</Link></MenuItem>
                <MenuItem><Link to="/">Manage Agents</Link></MenuItem>
                <MenuItem><Link to="/">Service Map</Link></MenuItem>
                <MenuItem><Link to="/">Manage Reports</Link></MenuItem>
              </>
            )}
          </MenuItems>
        </MenuItemsContainer>
        <LogOutContainer>
          <MenuItem onClick={logout}>
            <p>Logout</p>
          </MenuItem>
        </LogOutContainer>
      </SidebarDetailsContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
