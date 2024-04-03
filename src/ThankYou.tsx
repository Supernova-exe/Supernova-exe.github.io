import React from "react";
import { useNavigate } from "react-router-dom";

const ThankYou: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
                <h4>Thank you for your submission!</h4>
                <p>We will be in touch with you shortly</p>
                <button className="btn btn-primary" onClick={() => navigate("/")}>Go back</button>
        </div>
    );
};

export default ThankYou;