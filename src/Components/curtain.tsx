import { ReactNode, Component } from "react";

interface ICurtain {}
interface IState<ICurtain> {

}
interface IProps {}
class Curtain extends Component<IState<ICurtain>, IProps> {
    constructor(props: IProps){
        super(props);
        props:
    }
  componentDidMount() {
    console.log("ㅇㅇ 커튼이야");
  }
  render():ReactNode{
    return()
  }
}

export default Curtain;
