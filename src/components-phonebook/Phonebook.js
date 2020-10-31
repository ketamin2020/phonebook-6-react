import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import ContactCreator from "./ContactCreator";
import ContactList from "./ContactList";
import Section from "./Section";
import FilterContact from "./FilterContact";
import Notification from "./Notification";
import notificationStyles from "./notification.module.css";

class Phonebook extends Component {
  componentDidUpdate() {
    localStorage.setItem("contacts", JSON.stringify(this.props.items));
  }

  render() {
    return (
      <>
        <CSSTransition
          in={this.props.isNotification}
          classNames={notificationStyles}
          timeout={1000}
          unmountOnExit
        >
          <Notification />
        </CSSTransition>

        <Section title="Phonebook">
          <ContactCreator />
        </Section>
        <Section
          title={
            this.props.items.length > 0 ? "Contacts" : "Do not have contacts"
          }
        >
          {this.props.items.length > 0 && <FilterContact />}

          <ContactList />
        </Section>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.items.contact,
  isNotification: state.items.isNotification,
});

export default connect(mapStateToProps)(Phonebook);
