import React from 'react';

const Services = () => {
  return (
    <div className="services">
      <section className="services-hero">
        <div className="container">
          <h1>Our Comprehensive Solutions</h1>
          <p>End-to-end apartment management tools designed to save you time and money</p>
        </div>
      </section>

      <section className="service-list">
        <div className="container">
          <div className="service-card">
            <h2>President Dashboard</h2>
            <p>It contains the overall information of all Flats includes Owner Details, Tenant Details, Family Details, Vehicle Details.</p>
            <ul>
            <li>Maintenance bill tracking – view paid and unpaid bills along with remaining balances for all flats</li>
            <li>Vehicle search – identify vehicle owners based on the vehicle registration number</li>
    <li>Visitor logs – filter visitor logs by date, flat, and name</li>
    <li>Complaint tracking – monitor complaints raised by flat owners and track their status</li>
    <li>Employee logs – manage employee check-in/check-out times and track total days worked in a month</li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Flat Owner Dashboard</h2>
            <p>Flat owners can securely log in to their dashboard using their mobile number and password, ensuring authentication and preventing unauthorized access.</p>
            <ul>
    <li>Update Details – Option to update personal details, tenant changes, or add new vehicles</li>
    <li>Raise a Complaint – Submit complaints to the president by selecting a complaint type and providing a description</li>
    <li>Declare Vacancy – Notify security about temporary absence due to travel or relocation for enhanced security monitoring</li>
</ul>

          </div>

          <div className="service-card">
            <h2>Security Dashboard</h2>
            <p>The Security Dashboard allows security personnel to manage employee attendance, monitor flat owner-declared vacancies for enhanced security, and maintain visitor logs with check-in details accessible to the president.</p>
            <ul>
            <ul>
    <li>Employee Attendance – Security can update employee check-in and check-out times for accurate attendance tracking</li>
    <li>Vacancy Monitoring – View vacancy details updated by flat owners to enhance security measures</li>
    <li>Visitor Logs – Add visitor details and record check-in time and date, which can be viewed by the president</li>
</ul>

            </ul>
          </div>

          <div className="service-card">
            <h2>Others</h2>
            <p>What are the clients requirements.</p>
            <ul>
              {/* <li>Occupancy rate trends</li>
              <li>Revenue forecasting</li>
              <li>Expense tracking and budgeting</li>
              <li>Resident satisfaction metrics</li> */}
            </ul>
          </div>
        </div>
      </section>

      <section className="pricing-cta">
        <div className="container">
          <h2>Ready to Transform Your Property Management?</h2>
          <p>Our flexible pricing scales with your portfolio size. Contact us for a customized quote.</p>
          <button className="btn primary">Request a Demo</button>
        </div>
      </section>
    </div>
  );
};

export default Services;