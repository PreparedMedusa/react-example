import React, { Component } from "react";
import "./App.css";
import CONTACTS from "./bd.js";
import { isNumber } from "util";

class Contact extends React.Component {
  render() {
    return (
      <li className="contact">
        <img
          className="contact-image"
          src={this.props.image}
          width="60px"
          height="60px"
          alt="logo"
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
      var searchValue =
        searchQuery > 0 ? el.phoneNumber.toLowerCase() : el.name.toLowerCase();
      console.log(isNumber(searchQuery), searchQuery);
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
