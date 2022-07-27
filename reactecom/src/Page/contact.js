import React from "react";
import "./contact.css";
class Contact extends React.Component {
    render() {
        return (
            <section className="contact-section">
                <h1>A Note for Jenn</h1>
                <form
                    className="form"
                    action="index.html"
                    onSubmit="return validationForm()"
                    method="post"
                >
                    <input
                        type="text"
                        className="contact-form-text"
                        placeholder="First and Last Name"
                    />
                    <input
                        type="email"
                        className="contact-form-text"
                        placeholder="Email"
                    />
                    <input
                        type="text"
                        className="contact-form-text"
                        placeholder="Phone"
                    />
                    <textarea
                        className="contact-form-text"
                        placeholder="Question, Concern, or Compliment~"
                    ></textarea>
                    <input type="submit" className="contact-form-btn" value="Submit" />
                </form>
            </section>
        );
    }
}
export default Contact;