import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false); // Profile dropdown state
  const [selectedOption, setSelectedOption] = useState("Projects");
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve user role from local storage
    const role = localStorage.getItem("userRole");
    setUserRole(role);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    setUserRole(null);
    navigate("/login");
  };

  const switchRole = (newRole) => {
    localStorage.setItem("userRole", newRole);
    setUserRole(newRole);
    navigate(`/${newRole}-home`);
  };

  return (
    <header className="header">
      <div className="header-left">
        <img
          src="src/assets/images/logo.png"
          alt="Logo"
          className="header-logo"
        />
        <span className="header-title">Freejboard</span>
      </div>

      <nav className="header-nav">
        <a href="/" className="nav-link">
          Home
        </a>
        <a href="/services" className="nav-link">
          Services
        </a>
        <a href="/JobPostings" className="nav-link">
          Jobs
        </a>
        {userRole && (
          <>
            <a href="/inbox" className="nav-link">
              Inbox
            </a>
            <a href="/manage" className="nav-link">
              Manage
            </a>
          </>
        )}
      </nav>

      <div className="header-center">
        <div className="search-bar">
          <input
            type="text"
            placeholder={`Search ${selectedOption}`}
            className="search-input"
          />
          <div className="filter-wrapper">
            <img
              src="src/assets/icons/filter-icon.png"
              alt="Filter"
              className="filter-icon"
              onClick={toggleDropdown}
            />
            {isDropdownOpen && (
              <div className="dropdown-menu">
                {["Projects", "Services", "Freelancers", "Clients"].map(
                  (option) => (
                    <div
                      key={option}
                      className="dropdown-item"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="header-right">
        {userRole ? (
          <div className="profile-section">
            <span className="welcome-message">Welcome, {userRole}!</span>
            <div className="profile-dropdown">
              <a
                href={`/${userRole}-home`}
                className="user-icon"
                onClick={(e) => e.preventDefault()}
              >
                <img src="src/assets/icons/user-icon.png" alt="User" />
              </a>
              <img
                src="src/assets/icons/arrow-icon.png"
                alt="Arrow"
                className="dropdown-arrow"
                onClick={toggleProfileDropdown}
              />
              {isProfileDropdownOpen && (
                <div className="profile-dropdown-menu">
                  <a href={`/${userRole}-home`} className="dropdown-item">
                    Dashboard
                  </a>
                  <a href="/profile" className="dropdown-item">
                    Profile
                  </a>
                  <a href="/inbox" className="dropdown-item">
                    Inbox
                  </a>
                  <div
                    className="dropdown-item"
                    onClick={() => switchRole(userRole === "freelancer" ? "client" : "freelancer")}
                  >
                    Switch to {userRole === "freelancer" ? "Client" : "Freelancer"}
                  </div>
                  <div className="dropdown-item logout" onClick={handleLogout}>
                    Logout
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            <a href="/login" className="action-link">
              Log In
            </a>
            <a href="/sign-up" className="action-link">
              Sign Up
            </a>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
