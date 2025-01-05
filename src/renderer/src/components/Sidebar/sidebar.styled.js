import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 400px;
  height: 90vh;
  padding: 30px;
  background-color: var(--white-color);
  box-shadow: 0 1px 4px rgb(146 161 176 / 35%);
  border-radius: 30px;
`
export const SidebarDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`
export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  border-radius: 30px;
  box-shadow: 0 1px 4px rgb(146 161 176 / 25%);
  cursor: pointer;
  overflow: hidden;
`

export const UserLogo = styled.p`
  background-color: var(--white-color);
  padding: 20px;
  font-size: var(--large-text);
  color: var(--primary-color);
  font-weight: 500;
`

export const UserDashboardDetails = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 23px;
  font-size: var(--small-text);
`
export const MenuItemsContainer = styled.div``

export const MenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 0;
`
export const MenuItem = styled.li`
  padding: 12px 30px;
  font-size: var(--small-text);
  border-radius: 30px;
  box-shadow: 0 1px 4px rgb(146 161 176 / 35%);
  cursor: pointer;
`

export const LogOutContainer = styled.div``
