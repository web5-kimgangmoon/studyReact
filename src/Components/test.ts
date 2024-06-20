import { Component, ReactNode } from "react";

interface ITest {}

interface IProps {}

class Test extends Component<ITest, IProps> {
  componentDidMount() {
    console.log(this.props);
  }

  render(): ReactNode {}
}
