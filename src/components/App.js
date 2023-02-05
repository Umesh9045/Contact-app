import React, { useState } from "react";

import Header from "./Header";
import AddContact from "./AddContact";
// import ContactCard from "./ContactCard";
import ContactList from "./ContactList";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);
  // const contacts = [
  //   {
  //     id: "1",
  //     name: "Umesh",
  //     mobile: "123",
  //     email: "abc@gmail.com"
  //   },
  //   {
  //     id: "2",
  //     name: "Ram",
  //     mobile: "321",
  //     email: "pqr@gmail.com"
  //   },
  // ];

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  }

  return (
    <>
      <div className="background">
        {/* <h2>Hello Umesh</h2> */}
        <Header />
        <AddContact  addContactHandler={addContactHandler}/>
        <ContactList contacts={contacts} />
      </div>
    </>
  );
}

export default App;
