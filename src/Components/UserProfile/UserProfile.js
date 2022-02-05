import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
function UserProfile() {
  const [user, loading] = useAuthState(auth);
  const data = user?.providerData[0];
  // const metaData = user?.metadata;

  // console.log(data)
  // console.log(metadata)
  console.log(user);
  let returnvalue;
  if (loading) {
    returnvalue = <p>Loading...</p>;
  } else {
    returnvalue = (
        <div>
            <div id = "infoTitle">

        <h1>INFO</h1>
            </div>
      <div id = "border">
          
        <p className="infoFont">{user.metadata.creationTime}</p>
        <p className="infoFont">{user.metadata.lastSignInTime}</p>
        {user.providerData[0].phoneNumber ? <p className="infoFont">Phone:{user.providerData[0].phoneNumber}</p> : <p className="infoFont">Gmail: {user.providerData[0].email}</p>}
      </div>
        </div>
    );
  }


  return (
    <div id = "INFO">
      {returnvalue}
    </div>
  );
}

export default UserProfile;
