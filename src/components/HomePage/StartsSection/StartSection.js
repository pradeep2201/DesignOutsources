import React from "react";
import "./StartsSection.css";

const StatsSection = () => {
  return (
    <div className="stats-section">
      <h2 className="margin-zero">
        Why Choose <span className="highlight">Design OutSources?</span>
      </h2>
      <p>
        We are a leading Photo Editing company with over a decade of
        experience and expert developers. We offer custom services 
        for global clients at affordable costs.
      </p>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>240+</h3>
          <p>Clients Globally</p>
        </div>
        <div className="stat-card">
          <h3>45+</h3>
          <p>Developers Globally</p>
        </div>
        <div className="stat-card">
          <h3>10+</h3>
          <p>Startups Served</p>
        </div>
        <div className="stat-card">
          <h3>10+</h3>
          <p>Funded Startups</p>
        </div>
        <div className="stat-card">
          <h3>100+</h3>
          <p>Projects Delivered</p>
        </div>
        <div className="stat-card">
          <h3>80%</h3>
          <p>Repeated Client</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
