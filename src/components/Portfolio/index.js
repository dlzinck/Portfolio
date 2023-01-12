import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Away',
      description: 'React',
      link: "https://dlzinck.github.io/Away/",
      repo: "https://github.com/dlzinck/Away"
    },
    {
      name: 'Text-Editor-(PWA)',
      description: 'Node/Webpack',
      link: "https://github.com/dlzinck/Super-Awesome-Text-Editor",
      repo: "https://github.com/dlzinck/Super-Awesome-Text-Editor"
    },
    {
      name: 'Password-Generator',
      description: 'HTML/CSS/JS',
      link: "https://dlzinck.github.io/Password_Generator/",
      repo: "https://github.com/dlzinck/Password_Generator"
    },
    {
      name: 'Work-Day-Scheduler',
      description: 'Node/MySQL & Object Relational Mapping',
      link: "https://dlzinck.github.io/Work_Day_Scheduler/",
      repo: "https://github.com/dlzinck/Work_Day_Scheduler"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
