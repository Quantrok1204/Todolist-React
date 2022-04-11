import React from 'react';
import './App.css';
import './Css/Style.css';
import {Header} from './Components/Header';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state={};
  }

  render () {
    return (
      <div className="todoapp">
        <h1 className="todoapp-title">TODOLIST</h1>
        <Header />
      </div>
   );
  }
}

export default App;




