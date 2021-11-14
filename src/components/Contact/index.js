import React, { useState } from 'react';
import {validateEmail} from '../../utils/helpers';


function ContactForm() {
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid)
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        console.log('errorMessage', errorMessage);
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value})
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
        
    }


    return (
    <div className='contact' >
        <form id='contact-form' onSubmit={handleSubmit}>
        <h1 data-testid="contact">Contact me</h1>
            <div>
                <label htmlFor="name">Name: <br></br></label>
                <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
            </div>
            <div>
                <label htmlFor="email">Email address: <br></br></label>
                <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" className="flex-row" rows="5" defaultValue={message} onBlur={handleChange} />
            </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <button type="submit" data-testid='submitBtn'>Submit</button>
        </form>
    </div>
    )


}


export default ContactForm;