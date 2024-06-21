import React from "react";
import logo from "./logo.svg";
import Modal, { IModal } from "./Components/modal";
import "./App.scss";

interface IProps {}

interface IState<T> {
  list: T[];
}

class App extends React.Component<IProps, IState<IModal>> {
  constructor(props: IProps) {
    super(props);
    this.state = { list: [{ isOpen: false }] };
  }
  test() {
    console.log("hello");
  }
  toggle(idx: number) {
    this.setState((state: IState<IModal>) => {
      state.list[idx].isOpen = !state.list[idx].isOpen;
      return {
        ...state,
        list: state.list,
      };
    });
  }
  render(): React.ReactNode {
    return (
      <div className="relative w-[100vw] h-[100vh]">
        <div className="fixed top-0 w-[100vw] h-[100vh] bg-black opacity-80 z-10"></div>
        <div className="border border-[20px]">Hello React!</div>
        {this.state.list.map((_, idx) => (
          <Modal
            content="why so serious?"
            toggle={() => {
              this.toggle(idx);
            }}
          ></Modal>
        ))}
      </div>
    );
  }
}

export default App;
