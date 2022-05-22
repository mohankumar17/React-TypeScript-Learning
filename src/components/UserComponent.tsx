import React from "react";

export type userType = {
  name: string;
};

function UserComponent(props: userType) {
  return <h2>Hello {props.name}</h2>;
}

export default UserComponent;
