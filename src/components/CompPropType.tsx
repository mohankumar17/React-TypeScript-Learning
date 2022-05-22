import React from "react";
import { userType } from "./UserComponent";

type CompProp = {
  isLoggedIn: boolean;
  UserComponent: React.ComponentType<userType>;
};

function CompPropType({ isLoggedIn, UserComponent }: CompProp) {
  if (isLoggedIn) {
    return <UserComponent name="Mohan"></UserComponent>;
  } else {
    return <h2>Please Login to view UserComponet</h2>;
  }
}

export default CompPropType;
