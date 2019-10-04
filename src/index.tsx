import * as React from 'react';
import * as ReactDOM from "react-dom";
import './index.module';

interface Props {
   name: string
}

class App extends React.Component<Props> {
  render() {
    return <div className='test'>Hello {this.props.name} + 1</div>;
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Jane" />, mountNode);