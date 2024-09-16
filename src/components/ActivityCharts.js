import React from 'react'; // Correct import for React
import activity from './'; // Ensure the correct path to your image file

function ActivityCharts() {
  return (
    <div className='Activity-container'>
      <h1>Activity</h1>
      <img src={activity} alt="Activity Chart" /> {/* Use the image variable properly */}
    </div>
  );
}

export default ActivityCharts;
