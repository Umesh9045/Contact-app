import React from 'react'

const ContactCard = (props) => {

    const { id, name, mobile, email } = props.contact;
    return (
        <>
            <div className="contactList">
                <div>
                    <h3>{name}</h3>
                    <p><b> Mobile: </b>{mobile} </p>
                    <p> <b>Email:</b> {email}</p>
                </div>
            </div>
        </>
    );
}

export default ContactCard;