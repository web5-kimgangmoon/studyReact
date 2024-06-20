import React from "react";
import logo from "./logo.svg";
import test from "./Components/test";
import "./App.css";

interface IProps {}

interface IState<T> {
  list: T[];
}

class App extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.state = { list: [] };
  }
}
render(): React.ReactNode{
  return (
    <div>
      
    </div>
  )
}
export default App;
