import react from 'react';
import { FaHome, FaChartBar, FaCogs, FaSignOutAlt } from 'react-icons/fa';
function Sidebar() {
  return (
    <div className='sidebar-container'>
        <div className='Icons'><FaHome /></div>
      <div className='Icons'><FaChartBar /></div>
      <div className='Icons'><FaCogs /></div>
      <div className='Icons'><FaSignOutAlt /></div>
    </div>
  )
}
export default Sidebar;