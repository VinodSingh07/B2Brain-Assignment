import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img style={{ width: 60, height: 60 }} src={images.shape} />
        <h2>B2Brain</h2>
      </div>
      <div className="dashboard">
        <div className="home">
          <img style={{ width: 20, height: 20 }} src={images.home} />
          <h3>Dashboard</h3>
        </div>
        <div className="intels">
          <img style={{ width: 20, height: 20 }} src={images.star} />
          <h3>Intels</h3>
        </div>
        <div className="leads">
          <img style={{ width: 20, height: 20 }} src={images.user} />
          <h3>Leads</h3>
        </div>
        <div className="accounts">
          <img style={{ width: 20, height: 20 }} src={images.building} />
          <details>
            <summary>Accounts</summary>
            <summary>Manage all</summary>
            <summary>Track new accounts</summary>
            <summary>Bulk import</summary>
          </details>
        </div>
        <div className="preferences">
          <img style={{ width: 20, height: 20 }} src={images.cog} />
          <details>
            <summary>Preferences</summary>
            <summary>Product Focus</summary>
            <summary>Intel Preferences</summary>
            <summary>Lead Persona</summary>
          </details>
        </div>
        <div className="integration">
          <img style={{ width: 20, height: 20 }} src={images.link} />
          <h3>Integrations</h3>
        </div>
        <div className="team">
          <img style={{ width: 20, height: 20 }} src={images.users} />
          <h3>Team</h3>
        </div>
        <div className="help">
          <img style={{ width: 20, height: 20 }} src={images.comments} />
          <h3>Help/Support</h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
