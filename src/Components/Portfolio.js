import React from 'react';
import '../App.css';

const Portfolio = ({ data }) => {
  if (!data) return null;

  return (
    <section id="portfolio">
      <div className="container">
        <h1 className="section-title">My Projects</h1>
        <div className="portfolio-grid">
          {data.projects.map((project) => (
            <div key={project.title} className="portfolio-item">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <img src={`images/portfolio/${project.image}`} alt={project.title} />
                <div className="portfolio-text">
                  <h3>{project.title}</h3>
                  <p className="category">{project.category}</p>
                  <p className="description">{project.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
