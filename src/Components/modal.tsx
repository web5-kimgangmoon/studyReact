import { Component, ReactNode, MouseEventHandler } from "react";

export interface IModal {
  isOpen: boolean;
}

interface IState {

}

interface IProps {
  content: string;
  isOpen: boolean;
  modalOn(): void;
  closeModal(): void;
}

class Modal extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.setState({ isOpen: false });
  }

  componentDidMount() {
  }
  modalOn = (): void => {
    this.props.modalOn();
  }
  render(): ReactNode {
    // 전처리기, 변수를 이용하면 실행순서 때문에 커스터마이징이 작동하지 않는다.
    // const width = 3;
    // const height = 3;
    const style = "absolute top-[calc(50%-1.5rem)] right-[calc(50%-1.5rem)] bg-white";
    return (
      <div className="">
        <div>
          <button type="button" className="button" onClick={this.modalOn}>
            버튼
          </button>
        </div>
        {/* <div className={? style + " z-20" : style}> */}
        <div><span>{this.props.content}</span></div>
        <div><button>X</button></div>
      </div>
      // </div >
    );
  }
}

export default Modal;
