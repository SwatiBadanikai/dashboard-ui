import react from 'react';
import ActivityCharts from './ActivityCharts';
import RecentOrders from './RecentOrders';
import CustomerFeedBack from './CustomerFeedbacks';
import { FaHome, FaChartBar, FaCogs, FaSignOutAlt, FaSuitcase, FaSdCard, FaWallet, FaGoogleWallet } from 'react-icons/fa';

function MainContent () {
    return (
      <div  className='MainContent-Container'>
           <h1>Dashboard</h1>
           <div  className='Summary-divs'>
           <div className='card'> <div className='Icons'><FaSuitcase /></div>Total Orders: 75</div>
        <div className='card'><div className='Icons'><FaSdCard /></div>Total Delivered: 70</div>
        <div className='card'><div className='Icons'><FaWallet /></div>Total Cancelled: 5</div>
        <div className='card'><div className='Icons'><FaGoogleWallet /></div>Net Profit: $6759.25</div>
       
           </div>
           <ActivityCharts/>
           <RecentOrders/>
           <CustomerFeedBack/>
      </div>
    )
}
export default MainContent;