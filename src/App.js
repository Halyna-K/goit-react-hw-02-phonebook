import "./App.css";
import { Component } from "react";
import PropTypes from "prop-types";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };
  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        {/* <ContactForm ... /> */}

        <h2>Contacts</h2>
        {/* <Filter ... />
        <ContactList ... /> */}
      </div>
    );
  }
}
export default App;
