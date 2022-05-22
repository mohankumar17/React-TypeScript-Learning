import React from "react";
import { GreetProps } from "./GreetProps.types";

// type GreetProps = {
//   children: string;
//   name: string;
//   msgCount?: number; //Optional
//   status: "up" | "down";
// };

function Greet(props: GreetProps) {
  let msgCount: number | undefined;
  msgCount = props.msgCount;
  return (
    <div>
      <h2>Hello {props.name}</h2>
      <p>You have {msgCount} unread messages</p>
      <p>Server is {props.status}</p>
      <p>{props.children}</p>
    </div>
  );
}

export default Greet;
