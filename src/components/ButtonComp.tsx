import React from "react";

type ButtonType = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

function ButtonComp(props: ButtonType) {
  return (
    <div>
      <button onClick={(event) => props.handleClick(event, 2)}>Click</button>
    </div>
  );
}

export default ButtonComp;
