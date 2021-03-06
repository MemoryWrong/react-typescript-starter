import * as React from 'react';
import * as ReactDOM from "react-dom";
import './scss/themes/a/a.scss';

interface Props {
   name: string
}

class App extends React.Component<Props> {
  render() {
    return <div className='test'>Hello {this.props.name}</div>;
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Hello World" />, mountNode);