import currentUser from "../../utils/user";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
const useSidebar = () => {
  const navigateTo = useNavigate()
  const {
    user
  } = currentUser()

  const [userProfileDetails, _] = useState({
    first_name: user?.user?.first_name,
    last_name: user?.user?.last_name,
    role: user?.role,
  })

  const logout = () => {
    window.localStorage.clear();
    window.location.reload()
  }

  return {
    user,
    userProfileDetails,
    logout
  }
}

export default useSidebar
