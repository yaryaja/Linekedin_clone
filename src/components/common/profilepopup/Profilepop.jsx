import React, { useState } from "react";
import { CgProfile } from 'react-icons/cg';
import { logout } from "../../../api/AuthAPI";
import { useNavigate } from "react-router-dom";
import "./index.scss"; // Make sure to import the stylesheet here

function ProfilePicture() {
    const [showLogoutPopup, setShowLogoutPopup] = useState(false);
    const navigate = useNavigate();

    const handleProfileClick = () => {
        setShowLogoutPopup(!showLogoutPopup);
    };

    const onLogout = () => {
        logout();
        setTimeout(() => {
            setShowLogoutPopup(false);
        }, 1000);
    };

    return (
        <div>
            <div className="profile-pic-container" onClick={handleProfileClick}>
                <CgProfile size={35} />
            </div>
            {showLogoutPopup && (
                <div className="popup-container">
                    <p className="check">Are you sure you want to log out?</p>

                    <button className="btn" onClick={onLogout}>Logout</button>
                    <button className="btn" onClick={() => navigate("/profile")}>View profile page</button>
                </div>
            )}
        </div>
    );
}

export default ProfilePicture;
