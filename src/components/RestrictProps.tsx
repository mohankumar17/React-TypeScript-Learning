import React from "react";

type ServerType = {
  name: string;
};

type ServerUpType = ServerType & {
  isUp: boolean;
  isDown?: never;
};

type ServerDownType = ServerType & {
  isUp?: never;
  isDown: boolean;
};

type restrictPropsType = ServerUpType | ServerDownType;

function RestrictProps({ name, isUp, isDown }: restrictPropsType) {
  return (
    <div>
      {name}
      <br />
      {isUp && "Server is Up"}
      <br />
      {isDown && "Server is Down"}
    </div>
  );
}

export default RestrictProps;
