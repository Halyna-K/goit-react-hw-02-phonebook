import "./App.css";
import { Component } from "react";
// import PropTypes from "prop-types";
import initialContacts from "./components/dataBase/contacts.json";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactList } from "./components/ContactList/ContactList";
import { Filter } from "./components/Filter/Filter";
// import AlertDismissible from "./components/Alert/Alert";

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: "",
  };
  addNewContact = (obj) => {
    // <AlertDismissible />;
    <ContactList contacts={this.state.contacts} />;
    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, obj],
      };
    });
  };

  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  render() {
    // console.log(this.state);
    // const { filter } = this.state;
    const { addNewContact, changeFilter, deleteContact } = this;
    const normalizedFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm addNewContact={addNewContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={changeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={deleteContact}
        />
      </div>
    );
  }
}
export default App;
