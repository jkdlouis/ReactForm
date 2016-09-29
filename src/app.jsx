var React = require('react');
var ReactDOM = require('react-dom');

var contactForm = React.createClass({

  handleSubmit: function(event) {
    event.preventDefault();
    const refs = this.refs;
    const firstName = refs.firstName.value;
    const lastName = refs.lastName.value;
    const email = refs.email.value;
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(firstName === "" && firstName === null) {
      alert('Please enter your first name');
    } else if(firstName.length > 20) {
      alert('Invalid first name');
    } else {
      return true;
    }

    if(lastName === "" && lastName === null) {
      alert('Please enter your last name');
    } else if(lastName.length > 20) {
      alert('Invalid last name');
    } else {
      return true;
    }

    if(re.test(email) == true && email !== "") {
      return true;
    } else {
      alert('Please enter a valid email address');
    }
    this.props.onSubmit({firstName, lastName, email});
  },

  onSubmit: function(event, formData) {
  event.preventDefault();
    console.log(formData);
    this.props.submit(formData);
  },

  render: function() {
    return <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input ref="firstName" type="text" className="form-control" placeholder="First Name" required="true"/>
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input ref="lastName" type="text" className="form-control" placeholder="Last Name" required="true"/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input ref="email" type="email" className="form-control" placeholder="Email"/>
        </div>
        <button type="submit" className="btn btn-default" onClick={this.handleSubmit}>Submit</button>
      </form>
  }
});

var element = React.createElement(contactForm);
ReactDOM.render(element, document.querySelector('.container'));
