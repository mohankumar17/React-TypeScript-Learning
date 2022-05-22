import React from "react";

type StylePropsType = {
  style: React.CSSProperties;
};

function StylePropsDemo(props: StylePropsType) {
  return <div style={props.style}>Mohan Kumar</div>;
}

export default StylePropsDemo;
