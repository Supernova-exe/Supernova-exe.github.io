import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import {ClipLoader} from "react-spinners";

interface Message
{
    name : string,
    email : string,
    message : string
}

const ContactForm: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const data : Message = {
            name,
            email,
            message
        };

        const url : string = "https://script.google.com/macros/s/AKfycbxZRTmYrDYejw6LXeWA7OzjC748SJ8ZftJnplxbVzgMNWGHayzNJJ78bCylFpJbccjYyw/exec";

        try {
            setIsLoading(true);
            await fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
                mode: 'no-cors',
            });
            setIsLoading(false);
            setName("");
            setEmail("");
            setMessage("");
            setError(false);

            navigate("/thankyou");
        } catch (error) {
            setError(true);
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6  col-md-8 col-sm-12">
                    <form onSubmit={handleSubmit} className="p-3">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea className="form-control" id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
                            <label htmlFor="message">Message</label>
                        </div>
                        {isLoading ? (
                            <ClipLoader color="#b600d0" loading={isLoading} size={70} aria-label="Loading"/>
                        ) : (
                            <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                        )}
                        {error && <p className="alert alert-danger text-danger-emphasis" >There was an error with your submission. Make sure you are connected to the internet. If the problem persists, please email us at <a href='mailto:supernova21774@gmail.com'>supernova21774@gmail.com</a></p>}
                    </form>
                </div>
            </div>
        </div>
    );
}       ;

export default ContactForm;