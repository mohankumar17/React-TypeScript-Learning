import React from "react";
import "./App.css";
import Greet from "./components/Greet";
// import ButtonComp from "./components/ButtonComp";
// import StylePropsDemo from "./components/StylePropsDemo";
// import UseStateHookType from "./components/UseStateHookType";
// import ClassCompType from "./components/ClassCompType";
// import CompPropType from "./components/CompPropType";
// import UserComponent from "./components/UserComponent";
// import GenericsCompType from "./components/GenericsCompType";
// import RestrictProps from "./components/RestrictProps";

function App() {
  return (
    <div className="App">
      <Greet name="Mohan" msgCount={10} status="up">
        Greetings Text
      </Greet>
      <Greet status="down">Good Bye</Greet>

      {/* <ButtonComp
        handleClick={(event, id) => {
          console.log(event.target);
          console.log("Button Clicked ID:" + id);
        }}
      ></ButtonComp> */}
      {/* <StylePropsDemo
        style={{
          border: "1px solid black",
          padding: "10px",
          margin: "40% auto",
        }}
      ></StylePropsDemo> */}

      {/* <UseStateHookType></UseStateHookType> */}

      {/* <ClassCompType name="Mohan"></ClassCompType> */}

      {/* <CompPropType
        isLoggedIn={true}
        UserComponent={UserComponent}
      ></CompPropType> */}

      {/* <GenericsCompType data="Laptop"></GenericsCompType>
      <GenericsCompType data={13}></GenericsCompType> */}

      {/* <RestrictProps name="Oracle Database" isUp={true} isDown={true}></RestrictProps> */}
      {/* <RestrictProps name="Oracle Database" isDown={true}></RestrictProps> */}
    </div>
  );
}

export default App;
