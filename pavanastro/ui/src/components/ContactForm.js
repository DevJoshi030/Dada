import React, { useState } from "react";

import getCookie from "../utils/getCookie";

const ContactForm = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    const csrftoken = getCookie("csrftoken");

    const request_options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken,
      },
      body: JSON.stringify({
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        message: message,
      }),
    };

    await fetch("/api/add-contact/", request_options).then((res) => {
      if (res.status === 400) {
        console.log("Error");
      } else {
        setName("");
        setEmail("");
        setMessage("");
        setPhone("");
        console.log("Success");
      }
    });
  };

  return (
    <div id="contact_form" class="contact-form">
      <ul class="row">
        <li class="col-sm-6">
          <label>
            <input
              type="text"
              value={name}
              class="form-control"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="*NAME"
            />
          </label>
        </li>
        <li class="col-sm-6">
          <label>
            <input
              type="text"
              value={phone}
              class="form-control"
              name="company"
              id="company"
              onChange={(e) => setPhone(e.target.value)}
              placeholder="PHONE"
            />
          </label>
        </li>
        <li class="col-sm-12">
          <label>
            <input
              type="text"
              value={email}
              class="form-control"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="*EMAIL"
            />
          </label>
        </li>
        <li class="col-sm-12">
          <label>
            <textarea
              class="form-control"
              name="message"
              value={message}
              id="message"
              rows="5"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="*MESSAGE"
            ></textarea>
          </label>
        </li>
        <li class="col-sm-12 no-margin">
          <button class="btn" id="btn_submit" onClick={handleSubmit}>
            send message
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ContactForm;
