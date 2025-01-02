import {useSelector} from "react-redux";

const currentUser = () => {
  const user = useSelector((state) => state.user.currentUser)

  return {
    user
  }
}
export default currentUser;
