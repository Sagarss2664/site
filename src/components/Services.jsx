import React, { useState } from 'react';
import { saveAs } from 'file-saver';

const Services = () => {
  // Apartment data from the Excel file
  const apartmentData = [
    { flat: 'A-001', owner: 'A D Vaidya', mobile: '9343408851' },
    { flat: 'A-002', owner: 'Raju Gudi', mobile: '9008054100' },
    { flat: 'A-101', owner: 'Vinayak Hebusur', mobile: '7666719557' },
    { flat: 'A-102', owner: 'Madhukar Jahagirdar', mobile: '8762661730' },
    { flat: 'A-103', owner: 'Borkar', mobile: '9483523365' },
    { flat: 'A-104', owner: 'Shrinivas Anant', mobile: '9739413123' },
    { flat: 'A-201', owner: 'N S Patil', mobile: '9449949762' },
    { flat: 'A-202', owner: 'Amritha G Kulkarni', mobile: '9243263568' },
    { flat: 'A-203', owner: 'Intiyaz H Khalib', mobile: '8105457992' },
    { flat: 'A-204', owner: 'Kendadamath', mobile: '9448733758' },
    { flat: 'B-001', owner: 'Rahul P Uppin', mobile: '8095341551' },
    { flat: 'B-002', owner: 'Samarth Book', mobile: '9035514316' },
    { flat: 'B-101', owner: 'Uma B Patil', mobile: '9449836698' },
    { flat: 'B-102', owner: 'Rajeev Magadi', mobile: '8147562918' },
    { flat: 'B-103', owner: 'Sachin Palankar', mobile: '9108517286' },
    { flat: 'B-104', owner: 'Chandrakant Inamadar', mobile: '9483930246' },
    { flat: 'B-201', owner: 'Shrikant B Minchnal', mobile: '9480491909' },
    { flat: 'B-203', owner: 'V K Kenchanagoudar', mobile: '9343400053' },
    { flat: 'B-204', owner: 'V R Hiremath', mobile: '9448700046' },
    { flat: 'C-001', owner: 'Prashant Hosmani', mobile: '9945614490' },
    { flat: 'C-002', owner: 'Pramod Deshpande', mobile: '9449397667' },
    { flat: 'C-101', owner: 'M M Bommanalli', mobile: '9945957432' },
    { flat: 'C-102', owner: 'Nidhi Sharma', mobile: '9821967107' },
    { flat: 'C-103', owner: 'Shankarappa Budappanavar', mobile: '9902854501' },
    { flat: 'C-104', owner: 'Niranjan Hegde', mobile: '6361916680' },
    { flat: 'C-201', owner: 'Manjunath Hegde', mobile: '9845633109' },
    { flat: 'C-202', owner: 'Vikram Hegde', mobile: '9448112071' },
    { flat: 'C-203', owner: 'Shrinivas Padaki', mobile: '9916405205' },
    { flat: 'C-204', owner: 'Ishaprabhu N Desai', mobile: '7259020326' },
    { flat: 'D-001', owner: 'Sunita Hiremath', mobile: '8494901964' },
    { flat: 'D-002', owner: 'Rudrappa D Koti', mobile: '9740166044' },
    { flat: 'D-101', owner: 'K Mukundachar', mobile: '9742808330' },
    { flat: 'D-102', owner: 'Asgar Khan', mobile: '7975443978' },
    { flat: 'D-103', owner: 'Laxmi Putran', mobile: '9448837636' },
    { flat: 'D-104', owner: 'Dattanand M', mobile: '9448757053' },
    { flat: 'D-201', owner: 'Manoj Singh', mobile: '8709244481' },
    { flat: 'D-202', owner: 'Swati Bhat', mobile: '8277656467' },
    { flat: 'D-203', owner: 'Raghu Naik', mobile: '9834578827' },
    { flat: 'D-204', owner: 'Malakajappa Anehosur', mobile: '9632262986' },
    { flat: 'E-001', owner: 'C. Prakash', mobile: '9448272383' },
    { flat: 'E-101', owner: 'Nagesh Palankar', mobile: '9035534448' },
    { flat: 'E-102', owner: 'Prakash Naganur', mobile: '7022892466' },
    { flat: 'E-103', owner: 'Wilson Rathnam', mobile: '9535831078' },
    { flat: 'E-104', owner: 'Gourish Naik', mobile: '8050034000' },
    { flat: 'E-201', owner: 'Mahesh G Bhat', mobile: '9741621623' },
    { flat: 'E-202', owner: 'Hemalatha Patil', mobile: '9168257959' },
    { flat: 'E-203', owner: 'Sumangala Pattanashetti', mobile: '9844426345' },
    { flat: 'E-204', owner: 'Shriganesh Hegde', mobile: '9449203522' },
    { flat: 'F-001', owner: 'Madhumati Hanchinal', mobile: '9449355171' },
    { flat: 'F-101', owner: 'Ashok B Hoskeri', mobile: '9880710125' },
    { flat: 'F-102', owner: 'M M Bommanalli', mobile: '9945957432' },
    { flat: 'F-103', owner: 'Asha M Sanikoppa', mobile: '9880473914' },
    { flat: 'F-104', owner: 'Vandana Kulkarni', mobile: '9742065583' },
    { flat: 'F-201', owner: 'Jagannath Kundu', mobile: '8250160031' },
    { flat: 'F-202', owner: 'S B Basur', mobile: '9449135125' },
    { flat: 'F-203', owner: 'Divakar D', mobile: '9448468405' },
    { flat: 'F-204', owner: 'Somu J Hanchin', mobile: '9880588119' },
    { flat: 'G-001', owner: 'Manjunath Hebballi', mobile: '9008302693' },
    { flat: 'G-002', owner: 'B H Bhandi', mobile: '9845721190' },
    { flat: 'G-101', owner: 'Fazuna', mobile: '7899534233' },
    { flat: 'G-102', owner: 'Ravi Binnal', mobile: '7019735998' },
    { flat: 'G-104', owner: 'Bhajantri', mobile: '9731188938' },
    { flat: 'G-201', owner: 'Sidagouda Dileep Magadum', mobile: '9738485705' },
    { flat: 'G-202', owner: 'Dr. Supreeta M Lagali', mobile: '9880746776' },
    { flat: 'G-203', owner: 'Rekha Hegde', mobile: '9448128270' },
    { flat: 'G-204', owner: 'Amaan Shah', mobile: '7899256456' },
    { flat: 'H-001', owner: 'Shanti Nayak', mobile: '9591825834' },
    { flat: 'H-002', owner: 'Ravikumar R C', mobile: '8861923810' },
    { flat: 'H-101', owner: 'C K Basha', mobile: '9731649629' },
    { flat: 'H-102', owner: 'Anand R Joshi', mobile: '9480418787' },
    { flat: 'H-103', owner: 'Veeranna S K', mobile: '9945305004' },
    { flat: 'H-104', owner: 'Megha Sahukar', mobile: '9060095949' },
    { flat: 'H-201', owner: 'Sangeeta S Sajjan', mobile: '9482710700' },
    { flat: 'H-203', owner: 'Suraj R. D', mobile: '9739052675' },
    { flat: 'H-204', owner: 'Madevi Naik', mobile: '9448576065' },
    { flat: 'I-001', owner: 'Kumar Puttappa Jainar', mobile: '9513722693' },
    { flat: 'I-002', owner: 'D K Bidkar', mobile: '9762452810' },
    { flat: 'I-101', owner: 'Vidya V Tatti', mobile: '9686352632' },
    { flat: 'I-102', owner: 'Rajkumar T Revankar', mobile: '9880160021' },
    { flat: 'I-103', owner: 'Nitya Prashant', mobile: '8088193728' },
    { flat: 'I-104', owner: 'M S Lalitha', mobile: '9972779252' },
    { flat: 'I-201', owner: 'Rajashekhar Madnoor', mobile: '7846980580' },
    { flat: 'I-202', owner: 'J T Chavaraddi', mobile: '9972258787' },
    { flat: 'I-203', owner: 'Arvind Ronad', mobile: '8951365166' },
    { flat: 'I-204', owner: 'Shripati V Aital', mobile: '9972109913' },
    { flat: 'J-001', owner: 'M B Gotur', mobile: '9481570330' },
    { flat: 'J-002', owner: 'Sainath Revanakar', mobile: '9980683759' },
    { flat: 'J-101', owner: 'Anilkumar Desai', mobile: '9480534055' },
    { flat: 'J-102', owner: 'R A Anvekar', mobile: '7349187109' },
    { flat: 'J-104', owner: 'Vadiraj Purohit', mobile: '9845907019' },
    { flat: 'J-201', owner: 'Mohammed Farookh Shaikh', mobile: '9742323879' },
    { flat: 'J-202', owner: 'Girish K Pachalag', mobile: '9449057639' },
    { flat: 'J-203', owner: 'Santoshkumar', mobile: '9448282019' },
    { flat: 'J-204', owner: 'Maitra Iti', mobile: '8095257011' }
  ];

  const [selectedApartment, setSelectedApartment] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [verificationSuccess, setVerificationSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleApartmentChange = (e) => {
    setSelectedApartment(e.target.value);
    setVerificationSuccess(false);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    
    const apartment = apartmentData.find(apt => apt.flat === selectedApartment);
    
    if (!apartment) {
      setErrorMessage('Invalid Flat selected');
      return;
    }

    const lastFourDigits = mobile.slice(-4);
    const storedLastFour = apartment.mobile.slice(-4);

    if (name.trim() === '' || mobile.length < 10) {
      setErrorMessage('Please enter valid name and 10-digit mobile number');
      return;
    }

    if (lastFourDigits === storedLastFour) {
      setVerificationSuccess(true);
      setErrorMessage('');
    } else {
      setErrorMessage('Mobile number does not match our records');
      setVerificationSuccess(false);
    }
  };

  const handleDownloadApp = () => {
    try {
      // Using require with file-loader
      const apkFile = require('../../src/APK file/app/Akshya_Garden.apk');
      saveAs(apkFile, 'AkshayGardenApp.apk');
    } catch (error) {
      console.error('Error downloading APK:', error);
      setErrorMessage('Failed to download app. Please try again later.');
    }
  };

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
              <li>Employee Attendance – Security can update employee check-in and check-out times for accurate attendance tracking</li>
              <li>Vacancy Monitoring – View vacancy details updated by flat owners to enhance security measures</li>
              <li>Visitor Logs – Add visitor details and record check-in time and date, which can be viewed by the president</li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Download Mobile App</h2>
            <p>Download our mobile app to access all features on the go.</p>
            <div className="app-download-section">
              <div className="download-process">
                <h3>Download Process</h3>
                <div className="steps">
                  <div className={`step ${selectedApartment ? 'completed' : ''}`}>
                    <span>1</span>
                    <p>Select Your Flat</p>
                  </div>
                  <div className={`step ${name && mobile ? 'completed' : ''}`}>
                    <span>2</span>
                    <p>Enter Your Details</p>
                  </div>
                  <div className={`step ${verificationSuccess ? 'completed' : ''}`}>
                    <span>3</span>
                    <p>Download App</p>
                  </div>
                </div>

                <div className="verification-form">
                  <form onSubmit={handleVerify}>
                    <div className="form-group">
                      <label htmlFor="apartment">Select Flat</label>
                      <select
                        id="apartment"
                        value={selectedApartment}
                        onChange={handleApartmentChange}
                        required
                      >
                        <option value="">-- Select Flat --</option>
                        {apartmentData.map((apt) => (
                          <option key={apt.flat} value={apt.flat}>
                            {apt.flat} - {apt.owner} - +91 ******{apt.mobile.slice(-4)}
                          </option>
                        ))}
                      </select>
                    </div>

                    {selectedApartment && (
                      <>
                        <div className="form-group">
                          <label htmlFor="name">Full Name</label>
                          <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="mobile">Mobile Number</label>
                          <input
                            type="tel"
                            id="mobile"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
                            maxLength="10"
                            required
                          />
                        </div>
                        <button type="submit" className="btn primary">
                          Verify Details
                        </button>
                      </>
                    )}
                  </form>

                  {errorMessage && <div className="error-message">{errorMessage}</div>}

                  {verificationSuccess && (
                    <div className="download-section">
                      <h3>Verification Successful!</h3>
                      <p>You can now download the Akshay Garden mobile app.</p>
                      <button 
                        onClick={handleDownloadApp} 
                        className="btn download-btn"
                      >
                        Download App Now
                      </button>
                      <p className="file-size">File size: 25MB</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
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