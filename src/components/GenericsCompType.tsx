import React from "react";

// type GenericType = {
//   data: string | number;
// };

type GenericType<T> = {
  data: T;
};

function GenericsCompType<T extends string | number>(props: GenericType<T>) {
  return <div>{props.data}</div>;
}

export default GenericsCompType;
