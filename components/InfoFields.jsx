/**
 * @jsx React.DOM
 */


var React = require('react')

/* Form Fields for first page  - "personal information" */
var InfoFields = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Personal Information</h2>
        <ul className="form-fields">
          <li>
            <label>Full Name</label>
            <input type="text" ref="name" defaultValue={this.props.fieldValues.name} />
          </li>
          <li>
            <label>date of Birth</label>
            <input type="date" ref="dob" defaultValue={this.props.fieldValues.dob} />
          </li>
          <li>
            <label>Phone number</label>
            <input type="number" ref="phone" defaultValue={this.props.fieldValues.phone} />
          </li>
          <li> 
          <label>email</label>
          <input type="email" ref="email" defaultValue={this.props.fieldValues.email} />
          </li>
          

          /* Address */ 
          <li>
            <label> Address </label>
            <input type="text" ref="address" defaultValue={this.props.fieldValues.address} />
          </li>
            <label> Address Line2 </label>
            <input type="text" ref="addressline" defaultValue={this.props.fieldValues.addressline} />
          <li>
            <label> City </label>
            <input type="text" ref="city" defaultValue={this.props.fieldValues.city} />
          </li>
          <li>
            <label> State </label>
            <input type="select" ref="state" defaultValue={this.props.fieldValues.state} />
          </li>
          <li>
            <label> Zip Code </label>
            <input type="text" ref "zip" defaultValue={this.props.fieldValues.zip} /> /* make sure this is named correctly in fieldvalues var */
          </li>
          <li>
            <label> Bahai ID </label>
            <input type="number" ref="bahaiid" defaultValue={this.props.fieldValues.bahaiid} /> /* make sure the input type is correct */
          </li>


          <li className="form-footer">
            <button className="btn -primary pull-right" onClick={this.nextStep}>Save &amp; Continue</button>
          </li>
        </ul>
      </div>
    )
  },

/* nextStep: saves form values, calls ...itself? */

  nextStep: function(e) {
    e.preventDefault()

    /* form values */
    var data = {

       name : this.refs.name.getDOMNode().value,
       dob  : this.refs.dob.getDOMNode().value,
       phone : this.refs.phone.getDOMNode().value,
       email : this.refs.email.getDOMNNOde().value,
       address : this.refs.email.getDOMNode().value,
       addressline : this.refs.addressline.getDOMNnode().value,
    }

    this.props.saveValues(data)
    this.props.nextStep()

  }
    })

module.exports = InfoFields