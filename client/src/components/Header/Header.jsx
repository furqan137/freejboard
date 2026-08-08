import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import userIcon from "../../assets/icons/user-icon.png";
import "./Header.css";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/Services", label: "Services" },
  { to: "/JobPostings", label: "Jobs" },
  { to: "/category", label: "Categories" },
  { to: "/about", label: "About" },
];

const searchOptions = ["Projects", "Services", "Freelancers", "Clients"];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Projects");
  const [query, setQuery] = useState("");
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const headerRef = useRef(null);

  useEffect(() => {
    setUserRole(localStorage.getItem("userRole"));
  }, [location.pathname]);

  useEffect(() => {
    setMenuOpen(false);
    setFilterOpen(false);
    setProfileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setFilterOpen(false);
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("token");
    setUserRole(null);
    navigate("/login");
  };

  const switchRole = (newRole) => {
    localStorage.setItem("userRole", newRole);
    setUserRole(newRole);
    navigate(`/${newRole}-home`);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    if (selectedOption === "Services") navigate(`/Services?q=${encodeURIComponent(q)}`);
    else if (selectedOption === "Projects" || selectedOption === "Clients")
      navigate(`/JobPostings?q=${encodeURIComponent(q)}`);
    else navigate(`/category?q=${encodeURIComponent(q)}`);
  };

  return (
    <header
      ref={headerRef}
      className={`fj-header ${scrolled ? "is-scrolled" : ""} ${menuOpen ? "is-open" : ""}`}
    >
      <div className="fj-header__inner">
        <Link to="/" className="fj-brand" aria-label="Freejboard home">
          <img src={logo} alt="" className="fj-brand__logo" />
          <span className="fj-brand__name">Freejboard</span>
        </Link>

        <nav className="fj-nav" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `fj-nav__link ${isActive ? "is-active" : ""}`
              }
            >
              <span>{item.label}</span>
            </NavLink>
          ))}
          {userRole && (
            <>
              <NavLink
                to="/inbox"
                className={({ isActive }) =>
                  `fj-nav__link ${isActive ? "is-active" : ""}`
                }
              >
                <span>Inbox</span>
              </NavLink>
              <NavLink
                to="/manage"
                className={({ isActive }) =>
                  `fj-nav__link ${isActive ? "is-active" : ""}`
                }
              >
                <span>Manage</span>
              </NavLink>
            </>
          )}
        </nav>

        <form className="fj-search" onSubmit={handleSearch}>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Search ${selectedOption.toLowerCase()}…`}
            className="fj-search__input"
            aria-label="Search"
          />
          <div className="fj-search__filter">
            <button
              type="button"
              className="fj-search__filter-btn"
              onClick={() => setFilterOpen((v) => !v)}
              aria-expanded={filterOpen}
              aria-label="Search filter"
            >
              {selectedOption}
              <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            {filterOpen && (
              <div className="fj-dropdown" role="listbox">
                {searchOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={`fj-dropdown__item ${
                      selectedOption === option ? "is-selected" : ""
                    }`}
                    onClick={() => {
                      setSelectedOption(option);
                      setFilterOpen(false);
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </form>

        <div className="fj-actions">
          {userRole ? (
            <div className="fj-profile">
              <button
                type="button"
                className="fj-profile__trigger"
                onClick={() => setProfileOpen((v) => !v)}
                aria-expanded={profileOpen}
              >
                <img src={userIcon} alt="" />
                <span className="fj-profile__role">{userRole}</span>
                <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                  <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
              {profileOpen && (
                <div className="fj-dropdown fj-dropdown--right">
                  <Link to={`/${userRole}-home`} className="fj-dropdown__item">
                    Dashboard
                  </Link>
                  <Link to="/profile" className="fj-dropdown__item">
                    Profile
                  </Link>
                  <Link to="/settings" className="fj-dropdown__item">
                    Settings
                  </Link>
                  <button
                    type="button"
                    className="fj-dropdown__item"
                    onClick={() =>
                      switchRole(userRole === "freelancer" ? "client" : "freelancer")
                    }
                  >
                    Switch to {userRole === "freelancer" ? "Client" : "Freelancer"}
                  </button>
                  <button
                    type="button"
                    className="fj-dropdown__item is-danger"
                    onClick={handleLogout}
                  >
                    Log out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="fj-btn fj-btn--ghost">
                Log in
              </Link>
              <Link to="/sign-up" className="fj-btn fj-btn--solid">
                Sign up
              </Link>
            </>
          )}

          <button
            type="button"
            className="fj-burger"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`fj-mobile ${menuOpen ? "is-open" : ""}`}>
        <nav className="fj-mobile__nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `fj-mobile__link ${isActive ? "is-active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          {userRole && (
            <>
              <NavLink to="/inbox" className="fj-mobile__link">
                Inbox
              </NavLink>
              <NavLink to="/manage" className="fj-mobile__link">
                Manage
              </NavLink>
            </>
          )}
          {!userRole && (
            <div className="fj-mobile__cta">
              <Link to="/login" className="fj-btn fj-btn--ghost">
                Log in
              </Link>
              <Link to="/sign-up" className="fj-btn fj-btn--solid">
                Sign up
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
