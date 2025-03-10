import React, { Component } from 'react';

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
  <div className="profile-pic-wrapper">
    <img className="profile-pic" src={profilepic} alt="Keerthi Swaroop's Profile Pic" />
  </div>
  <div className="main-col">
    <div className="about-text">
      <h2>About Me</h2>
      <p>
      I am a <strong>Data Engineer & Analyst</strong> passionate about building scalable data pipelines, optimizing ETL workflows, and architecting cloud-based solutions. Proficient in AWS, Azure, Python, SQL, and big data technologies like Apache Spark and Snowflake, I specialize in data modeling, real-time analytics, and machine learning solutions to transform raw data into actionable insights.
      </p>
      <p>
      <strong>What drives me?</strong> The thrill of solving complex data challenges and unlocking business intelligence through innovation. I enjoy collaborating with cross-functional teams to design efficient data strategies and enable data-driven decision-making at scale.
      </p>
    </div>
    
    <h2>Education</h2>
    <ul>
      <li><strong>Master’s in Data Analytics Engineering</strong> – George Mason University</li>
      <li><strong>Bachelor’s in Computer Science & Engineering</strong> – Jawaharlal Nehru Technological University</li>
    </ul>
  </div>
</section>

    );    
  }
} 
    
export default About;
