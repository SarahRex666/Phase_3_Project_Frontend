import React, { useState } from 'react';

function EmailForm() {
    const [emails, setEmails] = useState("");
    const [formState, setFormState] = useState({
      email_address: "",
      message: "",
    });
  
    const handleChange = (e) => {
      setFormState({
        ...formState,
        [e.target.id]: e.target.value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      e.target.reset();
      fetch("http://localhost:9292/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })
        .then((r) => r.json())
        .then((newEmail) => handleNewEmail(newEmail));
    };
  
    function handleNewEmail(newEmail) {
      setEmails([...emails, newEmail]);
    }
  
    return (
      <form className="new-email-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="email_address"
          placeholder="Email"
          value={formState.email_address}
          onChange={handleChange}
        />
        <br></br>
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={formState.name}
          onChange={handleChange}
        />
        <br></br>
        <textarea
          type="text"
          id="message"
          placeholder="Ask away!"
          rows={10}
          value={formState.message}
          onChange={handleChange}
        />
        <input type="submit" id="submit" value="Submit" />
      </form>
    );
  }
  export default EmailForm;