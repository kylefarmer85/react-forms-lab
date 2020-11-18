import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    console.log(props)
    super();
   
    this.state = {
      message: "",
      maxChars: props.maxChars
    };
  }

  handleText = event => {
    this.setState({
      message: event.target.value,
      maxChars: this.state.maxChars - 1 
    })
    console.log(this.state.message)
    console.log(this.state.maxChars)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
          <input type="text" onChange={event => this.handleText(event)} name="message" id="message" value={this.state.message} />
    
          <h3>Char Count: {this.state.maxChars}</h3>
      </div>
    );
  }
}

export default TwitterMessage;
