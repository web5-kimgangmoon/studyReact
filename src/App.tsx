import React from "react";
import logo from "./logo.svg";
import Modal, { IModal } from "./Components/modal";
import Curtain from "./Components/curtain";
import "./App.scss";

interface IProps { }

interface IState<T> {
  list: T[];
  isCurtain: boolean;
}

class App extends React.Component<IProps, IState<IModal>> {
  constructor(props: IProps) {
    super(props);
    this.state = { list: [{ isOpen: false, isOpen: false }], isCurtain: false };
  }
  test() {
    console.log("hello");
  }
  modalOn(idx: number) {
    this.setState((state: IState<IModal>) => {
      state.list[idx].isOpen = true;
      state.isCurtain = true;
      return state;
    });
  }
  closeModal(idx: number) {
    this.setState((state: IState<IModal>) => {
      state.list[idx].isOpen = false;
      state.isCurtain = false;
      return state;
    });
  }
  render(): React.ReactNode {
    return (
      <div className="relative w-[100vw] h-[100vh]">
        {this.state.isCurtain ? <Curtain></Curtain> : ""}
        <div className="border border-[20px]">Hello React!</div>
        {this.state.list.map((item: IModal, idx: number) => (
          <Modal
            content="why so serious?"
            modalOn={() =>
              this.modalOn(idx)
            }
            closeModal={() => {
              this.closeModal(idx);
            }}
            isOpen= 
          ></Modal>
        ))}
      </div>
    );
  }
}

export default App;
