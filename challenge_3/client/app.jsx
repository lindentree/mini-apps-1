// import React from "react";
// import ReactDOM from "react-dom";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {pagelevel: 0,
                  forms: {
                  	formOne: {
                  		contact: {name:"", email:"", password:""}
                  	}
                  }
                 }
  }	
  render() {

  	return (
             <div> 
               <FormOneName template={this.state.forms.formOne}/>
             </div>

  		   ) 
  }
}

class FormOneName extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.template;
  

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(property, event) {
  	const contact = this.state.contact;
  	contact[property] = event.target.value
    this.setState({ contact: contact });

  }

  handleSubmit(event) {
    console.log('A form was submitted: ' + this.state.contact.email);
    event.preventDefault();
  }

  render() {
  	console.log(this.props)
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.contact.name} onChange={this.handleChange.bind(this, 'name')} />
        </label>
        <label>
          E-mail:
          <input type="text" value={this.state.contact.email} onChange={this.handleChange.bind(this, 'email')} />
        </label>
        <label>
          Password:
          <input type="text" value={this.state.contact.password} onChange={this.handleChange.bind(this, 'password')} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

