import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FormSubmission from './Components/FormSubmission'; 

class App extends Component {
  render() {
    return (
      <div>
        <FormSubmission />        
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
