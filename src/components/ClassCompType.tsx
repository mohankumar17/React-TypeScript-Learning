import React, { Component } from "react";

type CounterType = {
  count: number;
};

type PropsType = {
  name: string;
};

class ClassCompType extends Component<PropsType, CounterType> {
  constructor(props: PropsType) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    // this.setState({
    //   count: this.state.count + 1,
    // });

    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <p>
          {this.props.name}, You have clicked {this.state.count} times
        </p>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default ClassCompType;
