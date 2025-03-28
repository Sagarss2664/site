import React from 'react';
import Sagar from '../../src/Images/Sagar.jpg';
import Sunitha from '../../src/Images/Sunitha.png';
import Koushik from '../../src/Images/Koushik.jpg';
import Vishwanath from '../../src/Images/Vishwanath.jpg';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. P G Sunitha Hiremath",
      role: "Professor",
      university: "KLE Technological University Hubli",
      email: "sunithahiremath64@gmail.com",
      bio: "Dr. P G Sunitha Hiremath guides us in the overall project and helps in designing the app interface.",
      image: Sunitha
    },
    {
      id: 2,
      name: "Sagar Shegunashi",
      role: "Student",
      university: "KLE Technological University Hubli",
      email: "sagarshegunasi2664@gmail.com",
      bio: "Sagar oversees technical development, specializing in scalable cloud architectures. He manages backend deployment on Render and frontend deployment on GitHub. Additionally, he writes backend APIs and maintains the MongoDB database, ensuring efficient data management and system performance.",
      image: Sagar
    },
    {
      id: 3,
      name: "Koushik K Reddy",
      role: "Student",
      university: "KLE Technological University Hubli",
      email: "koushikkro580@gmail.com",
      bio: "Koushik develops the frontend, ensuring a smooth user experience while integrating responsive design. He also modifies backend APIs based on frontend needs, optimizing data flow, troubleshooting issues, and enhancing performance for seamless interaction between the client and server.",
      image: Koushik
    },
    {
      id: 4,
      name: "Vishwanath Hubballi",
      role: "Student",
      university: "KLE Technological University Hubli",
      email: "workvishwawork@gmail.com",
      bio: "Vishwanath is responsible for designing the interface and developing the frontend. He writes CSS code to create an interactive and visually appealing user experience, ensuring smooth responsiveness and an engaging design.",
      image: Vishwanath
    }
  ];

  return (
    <div className="team">
      <section className="team-hero">
        <div className="container">
          <h1>Meet Our Team</h1>
          <p>The brilliant minds behind ApartmentPro's success</p>
        </div>
      </section>

      <section className="team-members">
        <div className="container">
          <div className="members-grid">
            {teamMembers.map(member => (
              <div key={member.id} className="member-card">
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="university">{member.university}</p>
                <p className="email">{member.email}</p>
                <p className="bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="join-team">
        <div className="container">
          <h2>Want to Join Our Team?</h2>
          <p>We're always looking for talented individuals passionate about transforming real estate technology.</p>
          <button className="btn primary">View Open Positions</button>
        </div>
      </section>
    </div>
  );
};

export default Team;