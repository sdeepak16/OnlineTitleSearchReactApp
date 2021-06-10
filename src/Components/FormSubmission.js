import React, { Component  } from 'react';
import axios from 'axios';
import '.././index.css';

class FormSubmission extends Component {
  constructor(props) {
    super(props);

    this.state = {
        searchString: "",
        searchURL: "",
        returnCount: ""
    }
  }

  handleTextChanged(event) {
    this.setState({
        searchString: event.target.value
    });
  }

  handleURLChanged(event) {
    this.setState({
        searchURL: event.target.value
    });
  }

  handleButtonClicked() {
  
     const searchString = this.state.searchString;
     const searchURL = this.state.searchURL;

      axios.get('http://localhost:55902/api/OnlineTitleSearch?searchString='+searchString+',searchURL='+searchURL)
          .then((res) => {
              console.log(res.data);
              this.setState({ returnCount: 'Result:' + res.data})
          }).catch((error) => {
              console.log(error)
          });

      this.setState({ name: '', email: '' })

  }

  render() {
    return  (
      <div >
        <h1>Online Title Search</h1>
        <h2>Please enter a search string and a search Engine URL: </h2>
        <div>
            <label  class='formComps'>Search String: </label>
            <input  class='formComps' type="text" value={this.state.searchString} onChange={this.handleTextChanged.bind(this)}/>
        </div>
        <div >
            <label class='formComps'>   Search URL: </label>
            <input class='formComps' type="text" value={this.state.searchURL} onChange={this.handleURLChanged.bind(this)}/>
        </div>
        <div class='formComps'>
        <button onClick={this.handleButtonClicked.bind(this)}>
          Submit
        </button>
        <div class='formComps'>
           
            <label><b>{this.state.returnCount} </b></label>
        </div>
        </div>
      </div>
    );
  }
}

export default FormSubmission; 