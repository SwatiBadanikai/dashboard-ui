import react from 'react';
import { FaBell, FaEnvelope } from 'react-icons/fa';
function Header() {
    return (
        <div className='Header-container'>
            <img/>
      <input placeholder="Search" className='Searchbar' />
      <div className='Icons'>
        <FaEnvelope />
        <FaBell />
        <img src="path_to_profile_image" alt="Profile" style={{ borderRadius: '50%' }} />
      </div>
    </div>
    )
}

export default Header;