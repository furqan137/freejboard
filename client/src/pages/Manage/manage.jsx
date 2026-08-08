import React, { useState } from 'react';
import './Manage.css'; // Import the styles for the page

const Manage = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [userSettings, setUserSettings] = useState({
    username: 'JohnDoe',
    email: 'john@example.com',
    notification: true,
  });

  const [orders, setOrders] = useState([
    { id: 1, title: 'Order 1', status: 'Completed', date: '2024-12-20' },
    { id: 2, title: 'Order 2', status: 'In Progress', date: '2024-12-22' },
  ]);

  const [proposals, setProposals] = useState([
    { id: 1, job: 'Web Design', status: 'Accepted', date: '2024-12-15' },
    { id: 2, job: 'App Development', status: 'Pending', date: '2024-12-18' },
  ]);

  const [stats, setStats] = useState({
    totalEarnings: 2000,
    activeOrders: 2,
    completedProjects: 5,
  });

  const handleEditClick = () => {
    setIsEditMode(!isEditMode);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  const handleCheckboxChange = () => {
    setUserSettings((prevSettings) => ({
      ...prevSettings,
      notification: !prevSettings.notification,
    }));
  };

  const handleSaveChanges = () => {
    setIsEditMode(false);
    localStorage.setItem('userSettings', JSON.stringify(userSettings));
  };

  return (
    <div className="manage">
      <h1>MANAGE</h1>

      {/* Orders Section */}
      <div className="orders-section">
        <h2>Your Orders</h2>
        {orders.length === 0 ? (
          <p>No orders available.</p>
        ) : (
          <ul>
            {orders.map((order) => (
              <li key={order.id} className={`order-item ${order.status.toLowerCase()}`}>
                <span className="order-title">{order.title}</span>
                <span className="order-status">{order.status}</span>
                <span className="order-date">{order.date}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Proposals Section */}
      <div className="proposals-section">
        <h2>Your Proposals</h2>
        {proposals.length === 0 ? (
          <p>No proposals available.</p>
        ) : (
          <ul>
            {proposals.map((proposal) => (
              <li key={proposal.id} className={`proposal-item ${proposal.status.toLowerCase()}`}>
                <span className="proposal-job">{proposal.job}</span>
                <span className="proposal-status">{proposal.status}</span>
                <span className="proposal-date">{proposal.date}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <h2>Your Stats</h2>
        <div className="stats-item">
          <span>Total Earnings: </span><strong>${stats.totalEarnings}</strong>
        </div>
        <div className="stats-item">
          <span>Active Orders: </span><strong>{stats.activeOrders}</strong>
        </div>
        <div className="stats-item">
          <span>Completed Projects: </span><strong>{stats.completedProjects}</strong>
        </div>
      </div>
    </div>
  );
};

export default Manage;
