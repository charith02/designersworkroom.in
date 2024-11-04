// src/components/LoginDialog.jsx
import React, { useState } from "react";
import axios from "axios";

const LoginDialog = ({ onClose, onLogin }) => {
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);

    const handleSendOtp = async () => {
        try {
            const response = await axios.post("http://localhost:5000/auth/send-otp", { phone });
            if (response.data.success) {
                alert(response.data.message);
                setOtpSent(true);
            }
        } catch (error) {
            alert("Failed to send OTP. Try again.");
        }
    };

    const handleVerifyOtp = async () => {
        try {
            const response = await axios.post("http://localhost:5000/auth/verify-otp", { phone, otp });
            if (response.data.success) {
                alert("Logged in successfully!");
                onLogin(response.data.sessionId); // Pass sessionId to parent component
                onClose();
            } else {
                alert("Invalid OTP");
            }
        } catch (error) {
            alert("Verification failed. Try again.");
        }
    };

    return (
        <div className="login-dialog">
            <h2>Login / Sign Up</h2>
            <input
                type="text"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <button onClick={handleSendOtp}>Send OTP</button>

            {otpSent && (
                <>
                    <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />
                    <button onClick={handleVerifyOtp}>Verify OTP</button>
                </>
            )}

            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default LoginDialog;
