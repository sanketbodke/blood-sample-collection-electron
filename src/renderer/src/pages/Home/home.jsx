import React, {useEffect} from 'react';
import currentUser from "../../utils/user";
function Home() {
  const {
    user
  } = currentUser()

  console.log(user.user.is_lab)
  return (
    <div>
      <h1>Welcome {user.user.first_name}</h1>
      <h2 style={{display: "flex"}}>
        Role {user.user.is_lab ? <p> Lab</p> : <p> Patient</p>}
      </h2>
    </div>
  );
}

export default Home;
