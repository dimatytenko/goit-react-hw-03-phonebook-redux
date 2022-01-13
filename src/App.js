import React, { Component } from 'react';
import Container from 'components/Container';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import IconButton from 'components/IconButton';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import Modal from 'components/Modal';

export class App extends Component {
  state = {
    showModal: false,
  };

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parseContacts = JSON.parse(contacts);

  //   if (parseContacts) {
  //     this.setState({ contacts: parseContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const nextContacts = this.state.contacts;
  //   const prevContacts = prevState.contacts;

  //   if (nextContacts !== prevContacts) {
  //     localStorage.setItem('contacts', JSON.stringify(nextContacts));
  //   }
  // }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    return (
      <Container>
        <div>
          <h1>Phonebook</h1>
          <IconButton aria-label="plus" onClick={this.toggleModal}>
            <PlusIcon width="20" height="20" />
          </IconButton>
        </div>

        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <ContactForm onClose={this.toggleModal} />
          </Modal>
        )}

        <h2>Contacts</h2>

        <Filter />

        <ContactList />
      </Container>
    );
  }
}

export default App;
