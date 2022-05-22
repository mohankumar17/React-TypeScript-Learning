import React, { useState } from "react";

type AuthUser = {
  name: string;
};

function UseStateHookType() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  //const [user, setUser] = useState<AuthUser | null>(null);
  const [user, setUser] = useState<AuthUser>({} as AuthUser); //We can access name as user.name

  let handleLogin = () => {
    setLoggedIn(() => {
      return true;
    });
    setUser(() => {
      return { name: "Mohan" };
    });
  };

  let handleLogout = () => {
    setLoggedIn(() => {
      return false;
    });
    setUser(() => {
      //return null;
      return {};
    });
  };

  return (
    <div>
      {/* <div>{user?.name}</div>  */}
      {/* ? is the check operator */}

      <div>{user.name}</div>
      <br></br>
      <br></br>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <p>You are successfully {isLoggedIn ? "Logged In" : "Logged Out"}</p>
    </div>
  );
}

export default UseStateHookType;
