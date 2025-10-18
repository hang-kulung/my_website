import React, { useEffect, useState } from "react";
import "./project.css"; // ✅ import the CSS file

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:8000/project/");
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="project-list-container">
      <h2 className="project-list-title">My Projects</h2>

      {projects.length === 0 ? (
        <p className="no-projects">No projects yet.</p>
      ) : (
        <div className="project-grid">
          {projects.map((project) => (
            <a href={project.url} target="_blank" rel="noopener noreferrer">
            <div className="project-card" key={project.id}> <h3 className="project-title"> {project.title} </h3> 
              <p className="project-description">{project.description}</p>
              
              {project.image && (
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                </div>
              )}
            </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Project;

