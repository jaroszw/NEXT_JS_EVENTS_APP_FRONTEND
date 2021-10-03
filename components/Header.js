import AuthContext from '@/context/AuthContext';
import React, { useContext } from 'react';

import Link from 'next/link';
import styles from '@/styles/Header.module.css';
import Search from '@/components/Search';
import { FaSignInAlt, FaSignOutAlt, SignOutAlt } from 'react-icons/fa';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>DJ Events</a>
        </Link>
      </div>
      <Search />
      <nav>
        <ul>
          <li>
            <Link href="/events">
              <a>Events</a>
            </Link>
          </li>
          {user ? (
            <React.Fragment>
              <li>
                <Link href="/events/add">
                  <a>Add Event</a>
                </Link>
              </li>
              <li>
                <Link href="account/dashboard">
                  <a>Dashboard</a>
                </Link>
              </li>
              <li>
                <button
                  className="btn-secondary btn-icon"
                  onClick={() => logout()}
                >
                  <FaSignOutAlt /> Logout
                </button>
              </li>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <li>
                <Link href="/account/login">
                  <a className="btn-secondary bta-icon">
                    <FaSignInAlt />
                    Login
                  </a>
                </Link>
              </li>
            </React.Fragment>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
