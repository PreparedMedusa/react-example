import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CONTACTS from "./bd.js";

class Contact extends React.Component {
  render() {
    return (
      <li className="contact">
        <img
          className="contact-image"
          src={this.props.image}
          width="60px"
          height="60px"
        />
        <div className="contact-info">
          <div className="contact-name">{this.props.name}</div>
          <div className="contact-number">{this.props.phoneNumber}</div>
        </div>
      </li>
    );
  }
}

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedContacts: CONTACTS
    };
  }
  handleSearch(event) {
    var searchQuery = event.target.value.toLowerCase();
    var displayedContacts = CONTACTS.filter(function(el) {
      var searchValue = el.name.toLowerCase();
      return searchValue.indexOf(searchQuery) !== -1;
    });
    this.setState({ displayedContacts: displayedContacts });
  }
  render() {
    return (
      <div className="contacts">
        <input
          type="text"
          className="search-field"
          onChange={this.handleSearch.bind(this)}
        />
        <ul className="contacts-list">
          {this.state.displayedContacts.map(function(el) {
            return (
              <Contact
                key={el.id}
                name={el.name}
                phoneNumber={el.phoneNumber}
                image={el.image}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ContactList;
