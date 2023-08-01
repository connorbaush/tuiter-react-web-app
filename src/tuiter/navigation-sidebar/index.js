import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaHashtag, FaBell, FaEnvelope, FaBookmark, FaList, FaUser, FaBars } from 'react-icons/fa';

const NavigationSidebar = () => {
    const { pathname } = useLocation();
    const [ignore, tuiter, active] = pathname.split("/");
    const links = ["home", "explore", "notifications", "messages", "bookmarks", "lists", "profile", "more"];

    const getIcon = (link) => {
        switch (link) {
            case "home":
                return <FaHome />;
            case "explore":
                return <FaHashtag />;
            case "notifications":
                return <FaBell />;
            case "messages":
                return <FaEnvelope />;
            case "bookmarks":
                return <FaBookmark />;
            case "lists":
                return <FaList />;
            case "profile":
                return <FaUser />;
            case "more":
                return <FaBars />;
            default:
                return null;
        }
    };

    return (
        <div className="list-group">
            {links.map((link) => (
                <Link
                    key={link}
                    to={`/tuiter/${link}`}
                    className={`list-group-item text-capitalize ${active === link ? "active" : ""
                        }`}
                >
                    <span className="icon float-start me-2">{getIcon(link)}</span>
                    <span className="text d-lg-none d-xl-block d-none ms-1">
                        {link}
                    </span>
                </Link>
            ))}
        </div>
    );
};

export default NavigationSidebar;