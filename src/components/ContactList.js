import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    console.log(props);

    const renderContactList = props.contacts.map((contact) => {
        // console.log(props);
        return (
            <ContactCard contact={contact} />
        );
    });

    return (
        <div className='contactContainer'>
            <h1>Contact List</h1>
            {renderContactList}
        </div>
    );
};

export default ContactList;