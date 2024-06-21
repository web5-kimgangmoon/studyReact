import { ReactNode, Component } from "react";

interface ICurtain { }
interface IProps {
  // isCurtain: boolean;
}
interface IState { }
class Curtain extends Component<IProps, IState> {
  // constructor(props: IProps) {
  //   super(props);
  //   this.state = { isCurtain: false };
  // }
  componentDidMount() {
    console.log("ㅇㅇ 커튼이야");
  }
  render(): ReactNode {
    return (
      <div className="fixed top-0 w-[100vw] h-[100vh] bg-black opacity-80 z-10"></div>
    )
  }
}

export default Curtain;
