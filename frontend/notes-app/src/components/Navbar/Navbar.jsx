import React, { useState, useEffect } from 'react'
import ProfileInfo from '../Cards/ProfileInfo'
import { logo } from '../../assets';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

const Navbar = ({ userInfo, onSearchNote, handleClearSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearchNote(searchQuery);
    }
  };

  const onLogout = () => {
    localStorage.clear();
    navigate("/login");
  }

  const handleSearch = (event) => {
    if (searchQuery){
      onSearchNote(searchQuery);
    }
  }

  const onClearSearch = () => {
    setSearchQuery("");
    handleClearSearch();
  }

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query) {
      onSearchNote(query)
    } else {
      handleClearSearch();
    }
  };

  const isDashboard = location.pathname === '/dashboard';

  return (
    <div
    className='bg-white flex items-center justify-between px-6
    py-2 drop-shadow'
    >
      <div
      className="flex items-center gap-2"
      >
        <img 
        className='w-15
          h-12 object-contain'
        src={logo}
        alt="logo"
        />
      </div>
      {isDashboard ? <SearchBar 
      value={searchQuery}
      onChange={handleInputChange}
      handleSearch={handleSearch}
      onClearSearch={onClearSearch}
      onKeyPress={handleKeyPress}
      /> : null }

      {isDashboard ? <ProfileInfo userInfo={userInfo} onLogout={onLogout} /> : null}
    </div>
  )
}

export default Navbar
