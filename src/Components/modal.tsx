import { Component, ReactNode } from "react";

export interface IModal {
  isOpen: boolean;
}

interface IState {
  isOpen: IModal;
}

interface IProps {
  content: string;
  toggle(idx: number): void;
}

class Modal extends Component<IProps, IState> {
  componentDidMount() {
    console.log(this.props);
  }
  render(): ReactNode {
    // 전처리기, 변수를 이용하면 실행순서 때문에 커스터마이징이 작동하지 않는다.
    // const width = 3;
    // const height = 3;
    return (
      <div className="">
        <div>
          <button type="button" className="button">
            버튼
          </button>
        </div>
        <div className={`absolute top-[calc(50%-1.5rem)]`}>
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default Modal;
