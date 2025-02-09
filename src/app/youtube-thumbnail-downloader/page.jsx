import React from 'react';

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>Welcome to Reduce Images, your one-stop solution for image resizing and compression.</p>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>Our mission is to provide a fast, easy, and reliable way to resize and compress images, making it easier for you to share and upload your favorite photos.</p>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-member">
          <img src="https://reduceimages-sigma.vercel.app/team-member-1.jpg" alt="Team Member 1" />
          <h3>John Doe</h3>
          <p>Founder and CEO</p>
        </div>
        <div className="team-member">
          <img src="https://reduceimages-sigma.vercel.app/team-member-2.jpg" alt="Team Member 2" />
          <h3>Jane Doe</h3>
          <p>Co-Founder and CTO</p>
        </div>
      </section>

      <section className="contact-section">
        <h2>Get in Touch</h2>
        <p>If you have any questions or feedback, please don't hesitate to contact us.</p>
        <ul>
          <li>Email: <a href="mailto:support@reduceimages.com">support@reduceimages.com</a></li>
          <li>Twitter: <a href="https://twitter.com/reduceimages" target="_blank" rel="noopener noreferrer">@reduceimages</a></li>
        </ul>
      </section>
    </div>
  );
}

export default About;