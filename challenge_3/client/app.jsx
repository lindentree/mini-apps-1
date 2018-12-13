// import React from "react";
// import ReactDOM from "react-dom";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {pageLevel: 0,
                  forms: {
                  	formOne: {
                  		contact: {name:"", email:"", password:""},
                  	},
                  	formTwo: {
                  		address:{line1:""}
                  	},
                  	formThree: {
                  		creditCard:[]
                  	},
                  }
                 }

    this.handler = this.handler.bind(this)
  }	


  handler(prevState) {
     this.setState(function(prevState, props){
       var newState = prevState.pageLevel + 1;
     	 console.log('new state', newState)
        return {pageLevel: newState}
   })
    
  }

  renderSwitch(state) {
     switch(state) {
     	case 0:
     	  return (
             <div> 
               <FormOneName master={this.state} template={this.state.forms.formOne} handler={this.handler}/>
             </div>

  		   );

     	case 1:
     	  return (
             <div> 
               <FormTwoAddress master={this.state} placeholder={this.state.forms.formTwo} handler={this.handler}/>
             </div>

  		   );
     	case 2:
     	  return (
             <div> 
               <FormThreePayment master={this.state} check={this.state.forms.formThree} handler={this.handler}/>
             </div>

  		   );
     }
  }

  render() {

  	return  (
          <div>
             {this.renderSwitch(this.state.pageLevel)}
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
    console.log('A form was submitted: ' + this.props.master.pageLevel);
    event.preventDefault();
    this.props.handler(this.props.master);
  }

  render() {
  	
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

class FormTwoAddress extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.placeholder;
  

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(property, event) {
  	const address = this.state.address;
  	address[property] = event.target.value
    this.setState({ address: address });

  }

  handleSubmit(event) {
    console.log('A form was submitted: ' + this.props.master.pageLevel);
    event.preventDefault();
    this.props.handler(this.props.master);
  }

  render() {
  	console.log(this.props)
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Address Line 1:
          <input type="text" value={this.state.address.line1} onChange={this.handleChange.bind(this, 'line1')} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class FormThreePayment extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.check;
  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(property, event) {
  	const creditCard = this.state.creditCard;
  	creditCard.push(event.target.value);
    this.setState({ creditCard: creditCard });

  }

  handleSubmit(event) {
    console.log('A form was submitted: ' + this.props.master.pageLevel);
    event.preventDefault();
    this.props.handler(this.props.master);
  }

  render() {
  	console.log(this.props)
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Credit Card Number
          <input type="text" value={this.state.creditCard} onChange={this.handleChange.bind(this, 'creditCard')} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

